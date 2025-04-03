"use client";
import {
  Bold,
  Italic,
  ListTodo,
  LucideIcon,
  MessageSquarePlus,
  Printer,
  Redo2,
  RemoveFormatting,
  SpellCheck,
  Strikethrough,
  Underline,
  Undo2,
} from "lucide-react";

import List from "@/components/tools/List";
import Align from "@/components/tools/Align";
import Photo from "@/components/tools/Photo";
import Anchor from "@/components/tools/Anchor";
import Heading from "@/components/tools/Heading";
import FontSize from "@/components/tools/FontSize";
import TextColor from "@/components/tools/TextColor";
import { Separator } from "@/components/ui/separator";
import FontFamily from "@/components/tools/FontFamily";
import LineHeight from "@/components/tools/LineHeight";
import { useEditorStore } from "@/store/useEditorStore";
import ToolbarButton from "@/components/tools/ToolbarButton";
import HighlightColor from "@/components/tools/HighlightColor";

const Toolbar = () => {
  const { editor } = useEditorStore();

  const sections: {
    label: string;
    icon: LucideIcon;
    onClick: () => void;
    isActive?: boolean;
  }[][] = [
    [
      {
        label: "Undo",
        icon: Undo2,
        onClick: () => {
          editor?.chain().focus().undo().run();
        },
      },
      {
        label: "Redo",
        icon: Redo2,
        onClick: () => {
          editor?.chain().focus().redo().run();
        },
      },
      {
        label: "Print",
        icon: Printer,
        onClick: () => {
          window.print();
        },
      },
      {
        label: "Spell Check",
        icon: SpellCheck,
        onClick: () => {
          const current = editor?.view.dom.getAttribute("spellcheck");
          editor?.view.dom.setAttribute(
            "spellcheck",
            current === "false" ? "true" : "false"
          );
        },
      },
    ],
    [
      {
        label: "Bold",
        icon: Bold,
        onClick: () => {
          editor?.chain().focus().toggleBold().run();
        },
        isActive: editor?.isActive("bold"),
      },
      {
        label: "Italic",
        icon: Italic,
        onClick: () => {
          editor?.chain().focus().toggleItalic().run();
        },
        isActive: editor?.isActive("italic"),
      },
      {
        label: "Underline",
        icon: Underline,
        onClick: () => {
          editor?.chain().focus().toggleUnderline().run();
        },
        isActive: editor?.isActive("underline"),
      },
      {
        label: "Strikethrough",
        icon: Strikethrough,
        onClick: () => {
          editor?.chain().focus().toggleStrike().run();
        },
        isActive: editor?.isActive("strike"),
      },
    ],
    [
      {
        label: "Comment",
        icon: MessageSquarePlus,
        onClick: () => {
          editor?.chain().focus().addPendingComment().run();
        },
        isActive: editor?.isActive("liveblocksCommentMark"),
      },
      {
        label: "List Todo",
        icon: ListTodo,
        onClick: () => {
          editor?.chain().focus().toggleTaskList().run();
        },
        isActive: editor?.isActive("taskList"),
      },
      {
        label: "Remove Formatting",
        icon: RemoveFormatting,
        onClick: () => {
          editor?.chain().focus().unsetAllMarks().run();
        },
      },
    ],
  ];

  return (
    <div className="bg-[#f1f4f9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto">
      {sections[0].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      <FontFamily />
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      <Heading />
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      <FontSize />
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      {sections[1].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
      <TextColor />
      <HighlightColor />
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      <Anchor />
      <Photo />
      <Align />
      <LineHeight />
      <List />
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      {sections[2].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
    </div>
  );
};

export default Toolbar;
