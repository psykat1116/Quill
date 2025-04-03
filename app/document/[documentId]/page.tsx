import { auth } from "@clerk/nextjs/server";
import { preloadQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

import Document from "@/components/Document";

interface DocIdPageProps {
  params: Promise<{ documentId: Id<"documents"> }>;
}

const DocIdPage = async ({ params }: DocIdPageProps) => {
  const { documentId } = await params;

  const { getToken } = await auth();
  const token = (await getToken({ template: "convex" })) || undefined;

  if (!token) {
    throw new Error("Unauthorized");
  }

  const preloadedDocument = await preloadQuery(
    api.documents.getById,
    {
      id: documentId,
    },
    { token }
  );

  if (!preloadedDocument) {
    throw new Error("Document not found");
  }

  return <Document preloadedDocument={preloadedDocument} />;
};

export default DocIdPage;
