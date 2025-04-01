import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEditorStore } from "@/store/useEditorStore";

const FontFamily = () => {
  const { editor } = useEditorStore();

  const fonts = [
    { label: "Arial", value: "Arial" },
    { label: "Courier New", value: "Courier New" },
    { label: "Georgia", value: "Georgia" },
    { label: "Times New Roman", value: "Times New Roman" },
    { label: "Verdana", value: "Verdana" },
    { label: "Tahoma", value: "Tahoma" },
    { label: "Trebuchet MS", value: "Trebuchet MS" },
    { label: "Impact", value: "Impact" },
    { label: "Comic Sans MS", value: "Comic Sans MS" },
    { label: "Lucida Console", value: "Lucida Console" },
    { label: "Palatino Linotype", value: "Palatino Linotype" },
    { label: "Arial Black", value: "Arial Black" },
    { label: "Garamond", value: "Garamond" },
    { label: "Bookman", value: "Bookman" },
    { label: "Century Gothic", value: "Century Gothic" },
    { label: "Frank Ruhl Libre", value: "Frank Ruhl Libre" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-7 w-[150px] flex justify-between items-center shrink-0 rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm">
          <span className="truncate">
            {editor?.getAttributes("textStyle").fontFamily || "Arial"}
          </span>
          <ChevronDown className="ml-2 size-4 shrink-0" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-1 flex flex-col gap-y-1 h-[20rem]">
        {fonts.map((font) => (
          <DropdownMenuItem asChild key={font.value}>
            <button
              className={cn(
                "flex items-center justify-between gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80",
                editor?.getAttributes("textStyle").fontFamily === font.value &&
                  "bg-neutral-200/80"
              )}
              onClick={() => {
                editor?.chain().focus().setFontFamily(font.value).run();
              }}
              style={{ fontFamily: font.value }}
            >
              <span className="text-sm">{font.label}</span>
              {editor?.getAttributes("textStyle").fontFamily === font.value && (
                <span className="text-xs text-neutral-500">✓</span>
              )}
            </button>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FontFamily;
