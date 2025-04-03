"use client";
import {
  Bold,
  File,
  FileJson,
  FilePen,
  FilePlus,
  FileText,
  Globe,
  Italic,
  Printer,
  Redo2,
  RemoveFormatting,
  Strikethrough,
  Text,
  Trash,
  Underline,
  Undo2,
} from "lucide-react";
import { toast } from "sonner";
import { useMutation } from "convex/react";
import { BsFilePdf } from "react-icons/bs";
import { useParams, useRouter } from "next/navigation";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useEditorStore } from "@/store/useEditorStore";
import RenameDialog from "@/components/modal/RenameDialog";
import RemoveDialog from "@/components/modal/RemoveDialog";

interface MenuProps {
  title: string;
}

const Menu = ({ title }: MenuProps) => {
  const router = useRouter();
  const { documentId } = useParams<{ documentId: Id<"documents"> }>();
  const { editor } = useEditorStore();
  const mutation = useMutation(api.documents.create);

  const onNewDocument = () => {
    mutation({
      title: "Untitled Document",
      initialContent: "",
    })
      .then((id) => {
        toast.success("Document created successfully");
        router.push(`/document/${id}`);
      })
      .catch(() => {
        toast.error("Error creating document");
      });
  };

  const insertTable = ({ rows, cols }: { rows: number; cols: number }) => {
    editor
      ?.chain()
      .focus()
      .insertTable({ rows, cols, withHeaderRow: false })
      .run();
  };

  const onDownload = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
  };

  const onSaveJSON = () => {
    if (!editor) return;
    const json = editor.getJSON();
    const blob = new Blob([JSON.stringify(json)], {
      type: "application/json",
    });
    const filename = `${title || "Untitled"}.json`;
    onDownload(blob, filename);
  };

  const onSaveHTML = () => {
    if (!editor) return;
    const html = editor.getHTML();
    const blob = new Blob([html], { type: "text/html" });
    const filename = `${title || "Untitled"}.html`;
    onDownload(blob, filename);
  };

  const onSaveText = () => {
    if (!editor) return;
    const content = editor.getText();
    const blob = new Blob([content], { type: "text/plain" });
    const filename = `${title || "Untitled"}.txt`;
    onDownload(blob, filename);
  };

  return (
    <div className="flex">
      <Menubar className="border-none bg-transparent shadow-none h-auto p-0">
        <MenubarMenu>
          <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
            File
          </MenubarTrigger>
          <MenubarContent className="print:hidden">
            <MenubarSub>
              <MenubarSubTrigger>
                <File className="size-4 mr-2" />
                Save
              </MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem onClick={onSaveJSON}>
                  <FileJson className="size-4 mr-2" />
                  JSON
                </MenubarItem>
                <MenubarItem onClick={onSaveHTML}>
                  <Globe className="size-4 mr-2" />
                  HTML
                </MenubarItem>
                <MenubarItem onClick={() => window.print()}>
                  <BsFilePdf className="size-4 mr-2" />
                  PDF
                </MenubarItem>
                <MenubarItem onClick={onSaveText}>
                  <FileText className="size-4 mr-2" />
                  Text
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarItem onClick={onNewDocument}>
              <FilePlus className="size-4 mr-2" />
              New Document
            </MenubarItem>
            <MenubarSeparator />
            <RenameDialog title={title} documentId={documentId}>
              <MenubarItem
                onSelect={(e) => e.preventDefault()}
                onClick={(e) => e.stopPropagation()}
              >
                <FilePen className="size-4 mr-2" />
                Rename
              </MenubarItem>
            </RenameDialog>
            <RemoveDialog documentId={documentId}>
              <MenubarItem
                onSelect={(e) => e.preventDefault()}
                onClick={(e) => e.stopPropagation()}
              >
                <Trash className="size-4 mr-2" />
                Delete
              </MenubarItem>
            </RemoveDialog>
            <MenubarSeparator />
            <MenubarItem onClick={() => window.print()}>
              <Printer className="size-4 mr-2" />
              Print
              <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
            Edit
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem onClick={() => editor?.chain().focus().undo().run()}>
              <Undo2 className="size-4 mr-2" />
              Undo
              <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem onClick={() => editor?.chain().focus().redo().run()}>
              <Redo2 className="size-4 mr-2" />
              Redo
              <MenubarShortcut>⌘Y</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
            Insert
          </MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>Table</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem onClick={() => insertTable({ rows: 1, cols: 1 })}>
                  1 × 1
                </MenubarItem>
                <MenubarItem onClick={() => insertTable({ rows: 2, cols: 2 })}>
                  2 × 2
                </MenubarItem>
                <MenubarItem onClick={() => insertTable({ rows: 3, cols: 3 })}>
                  3 × 3
                </MenubarItem>
                <MenubarItem onClick={() => insertTable({ rows: 4, cols: 4 })}>
                  4 × 4
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
            Format
          </MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>
                <Text className="size-4 mr-2" />
                Text
              </MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem
                  onClick={() => editor?.chain().focus().toggleBold().run()}
                >
                  <Bold className="size-4 mr-2" />
                  Bold
                  <MenubarShortcut>⌘B</MenubarShortcut>
                </MenubarItem>
                <MenubarItem
                  onClick={() => editor?.chain().focus().toggleItalic().run()}
                >
                  <Italic className="size-4 mr-2" />
                  Italic
                  <MenubarShortcut>⌘I</MenubarShortcut>
                </MenubarItem>
                <MenubarItem
                  onClick={() =>
                    editor?.chain().focus().toggleUnderline().run()
                  }
                >
                  <Underline className="size-4 mr-2" />
                  Underline
                  <MenubarShortcut>⌘U</MenubarShortcut>
                </MenubarItem>
                <MenubarItem
                  onClick={() => editor?.chain().focus().toggleStrike().run()}
                >
                  <Strikethrough className="size-4 mr-2" />
                  Strikethrough&nbsp;&nbsp;
                  <MenubarShortcut>⌘D</MenubarShortcut>
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarItem
              onClick={() => editor?.chain().focus().unsetAllMarks().run()}
            >
              <RemoveFormatting className="size-4 mr-2" />
              Clear Formatting
              <MenubarShortcut>⌘E</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default Menu;
