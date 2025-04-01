import { useEditorStore } from "@/store/useEditorStore";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Link2 } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Anchor = () => {
  const { editor } = useEditorStore();
  const [value, setValue] = useState<string>("");

  const onChange = (href: string) => {
    editor?.chain().focus().extendMarkRange("link").setLink({ href }).run();
    setValue("");
  };

  return (
    <DropdownMenu
      onOpenChange={(open) => {
        if (open) {
          setValue(editor?.getAttributes("link").href || "");
        }
      }}
    >
      <DropdownMenuTrigger asChild>
        <button className="h-7 min-w-7 flex justify-center items-center shrink-0 rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm">
          <Link2 className="size-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-2.5 flex items-center gap-x-2">
        <Input
          placeholder="https://example.com"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button onClick={() => onChange(value)}>Apply</Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Anchor;
