import { ConvexError, v } from "convex/values";
import { paginationOptsValidator } from "convex/server";
import { mutation, query } from "./_generated/server";

export const create = mutation({
  args: {
    title: v.optional(v.string()),
    initialContent: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity();
    if (!user) {
      throw new ConvexError("User not authenticated");
    }

    const orgId = (user.org_id as string) || undefined;

    const documentId = await ctx.db.insert("documents", {
      title: args.title || "Untitled",
      ownerId: user.subject,
      initialContent: args.initialContent,
      organizationId: orgId,
    });

    return documentId;
  },
});

export const get = query({
  args: {
    search: v.optional(v.string()),
    paginationOpts: paginationOptsValidator,
  },
  handler: async (ctx, { search, paginationOpts }) => {
    const user = await ctx.auth.getUserIdentity();
    if (!user) {
      throw new ConvexError("User not authenticated");
    }

    const orgId = (user.org_id as string) || undefined;

    if (search && orgId) {
      return await ctx.db
        .query("documents")
        .withSearchIndex("search_title", (q) =>
          q.search("title", search).eq("organizationId", orgId)
        )
        .paginate(paginationOpts);
    }

    if (search) {
      return await ctx.db
        .query("documents")
        .withSearchIndex("search_title", (q) =>
          q.search("title", search).eq("ownerId", user.subject)
        )
        .paginate(paginationOpts);
    }

    if (orgId) {
      return await ctx.db
        .query("documents")
        .withIndex("by_organization_id", (q) => q.eq("organizationId", orgId))
        .paginate(paginationOpts);
    }

    return await ctx.db
      .query("documents")
      .withIndex("by_owner_id", (q) => q.eq("ownerId", user.subject))
      .paginate(paginationOpts);
  },
});

export const removeById = mutation({
  args: { id: v.id("documents") },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity();
    if (!user) {
      throw new ConvexError("User not authenticated");
    }

    const document = await ctx.db.get(args.id);
    if (!document) {
      throw new ConvexError("Document not found");
    }

    if (document.ownerId !== user.subject && user.org_role !== "admin") {
      throw new ConvexError("Unauthorized to delete this document");
    }

    await ctx.db.delete(args.id);

    return args.id;
  },
});

export const updateById = mutation({
  args: { id: v.id("documents"), title: v.string() },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity();
    if (!user) {
      throw new ConvexError("User not authenticated");
    }

    const document = await ctx.db.get(args.id);
    if (!document) {
      throw new ConvexError("Document not found");
    }

    if (document.ownerId !== user.subject && user.org_role !== "admin") {
      throw new ConvexError("Unauthorized to update this document");
    }

    await ctx.db.patch(args.id, {
      title: args.title,
    });

    return args.id;
  },
});

export const getById = query({
  args: { id: v.id("documents") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const getByIds = query({
  args: { ids: v.array(v.id("documents")) },
  handler: async (ctx, args) => {
    const documents = [];

    for (const id of args.ids) {
      const document = await ctx.db.get(id);
      if (document) {
        documents.push({
          id: document._id,
          name: document.title,
        });
      } else {
        documents.push({
          id,
          name: "[Removed]",
        });
      }
    }

    return documents;
  },
});
