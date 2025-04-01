import { ChevronDown } from "lucide-react";
import { type Level } from "@tiptap/extension-heading";
import { useEditorStore } from "@/store/useEditorStore";

import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Heading = () => {
  const { editor } = useEditorStore();

  const headings = [
    { label: "None", value: 0, fontSize: "16px" },
    { label: "Heading 1", value: 1, fontSize: "32px" },
    { label: "Heading 2", value: 2, fontSize: "24px" },
    { label: "Heading 3", value: 3, fontSize: "20px" },
    { label: "Heading 4", value: 4, fontSize: "18px" },
    { label: "Heading 5", value: 5, fontSize: "16px" },
    { label: "Heading 6", value: 6, fontSize: "14px" },
  ];

  const getCurrentHeading = () => {
    for (let level = 1; level <= 6; level++) {
      if (editor?.isActive("heading", { level })) {
        return `Heading ${level}`;
      }
    }

    return "None";
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-7 min-w-7 flex justify-between items-center shrink-0 rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm">
          <span className="truncate">{getCurrentHeading()}</span>
          <ChevronDown className="ml-2 size-4 shrink-0" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {headings.map(({ label, value, fontSize }) => (
          <DropdownMenuItem asChild key={value}>
            <button
              style={{ fontSize }}
              className={cn(
                "flex items-center justify-between gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80",
                (value === 0 && !editor?.isActive("heading")) ||
                  (editor?.isActive("heading", { level: value }) &&
                    "bg-neutral-200/80")
              )}
              onClick={() => {
                if (value === 0) {
                  editor?.chain().focus().setParagraph().run();
                } else {
                  editor
                    ?.chain()
                    .focus()
                    .toggleHeading({ level: value as Level })
                    .run();
                }
              }}
            >
              {label}
            </button>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Heading;
