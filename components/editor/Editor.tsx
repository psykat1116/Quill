"use client";
import Link from "@tiptap/extension-link";
import Table from "@tiptap/extension-table";
import Image from "@tiptap/extension-image";
import StarterKit from "@tiptap/starter-kit";
import { useStorage } from "@liveblocks/react";
import { Color } from "@tiptap/extension-color";
import TaskItem from "@tiptap/extension-task-item";
import TableRow from "@tiptap/extension-table-row";
import TaskList from "@tiptap/extension-task-list";
import Highlight from "@tiptap/extension-highlight";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import TableCell from "@tiptap/extension-table-cell";
import TextStyle from "@tiptap/extension-text-style";
import FontFamily from "@tiptap/extension-font-family";
import ImageResize from "tiptap-extension-resize-image";
import TableHeader from "@tiptap/extension-table-header";
import { useEditor, EditorContent } from "@tiptap/react";
import { useLiveblocksExtension } from "@liveblocks/react-tiptap";

import { DEFAULT_MARGIN } from "@/constant";
import Ruler from "@/components/editor/Ruler";
import Threads from "@/components/editor/Threads";
import { useEditorStore } from "@/store/useEditorStore";
import { FontSizeExtension } from "@/components/extension/font-size";
import { LineHeightExtension } from "@/components/extension/line-height";

interface EditorProps {
  initialContent?: string;
}

const Editor = ({ initialContent }: EditorProps) => {
  const { setEditor } = useEditorStore();
  const leftMargin = useStorage((root) => root.leftMargin);
  const rightMargin = useStorage((root) => root.rightMargin);
  const Liveblocks = useLiveblocksExtension({
    initialContent,
    offlineSupport_experimental: true,
  });

  const editor = useEditor({
    autofocus: true,
    onCreate({ editor }) {
      setEditor(editor);
    },
    onDestroy() {
      setEditor(null);
    },
    onUpdate({ editor }) {
      setEditor(editor);
    },
    onSelectionUpdate({ editor }) {
      setEditor(editor);
    },
    onTransaction({ editor }) {
      setEditor(editor);
    },
    onFocus({ editor }) {
      setEditor(editor);
    },
    onBlur({ editor }) {
      setEditor(editor);
    },
    onContentError({ editor }) {
      setEditor(editor);
    },
    extensions: [
      Color,
      Table,
      Image,
      Liveblocks,
      TaskList,
      TableRow,
      TableCell,
      TextStyle,
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      StarterKit.configure({
        history: false,
      }),
      FontFamily,
      TableHeader,
      ImageResize,
      FontSizeExtension,
      LineHeightExtension.configure({
        types: ["heading", "paragraph"],
        defaultLineHeight: "normal",
      }),
      TaskItem.configure({ nested: true }),
      Highlight.configure({
        multicolor: true,
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
        protocols: ["http", "https", "mailto"],
        linkOnPaste: true,
      }),
    ],
    content: "<p>Hello World! 🌎️</p>",
    editorProps: {
      attributes: {
        class:
          "focus:outline-none print:border-0 bg-white border-[#c7c7c7] border flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text",
        style: `padding-left: ${leftMargin || DEFAULT_MARGIN}px; padding-right: ${rightMargin || DEFAULT_MARGIN}px;`,
      },
    },
    immediatelyRender: false,
  });

  return (
    <div className="size-full overflow-x-auto bg-[#f9fbfd] px-4 print:p-0 print:bg-white print:overflow-visible">
      <Ruler />
      <div className="min-w-max justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
        <EditorContent editor={editor} />
        <Threads editor={editor} />
      </div>
    </div>
  );
};

export default Editor;
