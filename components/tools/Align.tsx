import { useEditorStore } from "@/store/useEditorStore";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignCenter, AlignJustify, AlignLeft, AlignRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Align = () => {
  const { editor } = useEditorStore();
  const alignments = [
    {
      label: "Align Left",
      value: "left",
      icon: AlignLeft,
    },
    {
      label: "Align Right",
      value: "right",
      icon: AlignRight,
    },
    {
      label: "Align Center",
      value: "center",
      icon: AlignCenter,
    },
    {
      label: "Align Justify",
      value: "justify",
      icon: AlignJustify,
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-7 min-w-7 flex justify-center items-center shrink-0 rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm">
          <AlignLeft className="size-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-1 flex flex-col gap-y-1">
        {alignments.map(({ label, value, icon: Icon }) => (
          <button
            key={value}
            onClick={() => editor?.chain().focus().setTextAlign(value).run()}
            className={cn(
              "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80",
              editor?.isActive("textAlign", { textAlign: value }) &&
                "bg-neutral-200/80"
            )}
          >
            <Icon className="size-4" />
            <span className="text-sm">{label}</span>
          </button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Align;
