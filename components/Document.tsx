"use client";
import Editor from "@/components/editor/Editor";
import Navbar from "@/components/navbar/Navbar";
import Room from "@/components/editor/Room";
import Toolbar from "@/components/editor/Toolbar";
import { Preloaded, usePreloadedQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

interface DocumentProps {
  preloadedDocument: Preloaded<typeof api.documents.getById>;
}

const Document = ({ preloadedDocument }: DocumentProps) => {
  const document = usePreloadedQuery(preloadedDocument);

  return (
    <Room>
      <div className="min-h-screen bg-[#fafbfb]">
        <div className="flex flex-col pt-2 px-4 gap-2 fixed top-0 left-0 right-0 z-10 bg-[#fafbfd] print:hidden">
          <Navbar data={document} />
          <Toolbar />
        </div>
        <div className="pt-[114px] print:pt-0">
          <Editor initialContent={document.initialContent} />
        </div>
      </div>
    </Room>
  );
};

export default Document;
