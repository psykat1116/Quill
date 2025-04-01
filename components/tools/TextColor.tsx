import { useEditorStore } from "@/store/useEditorStore";
import { type ColorResult, SketchPicker } from "react-color";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const TextColor = () => {
  const { editor } = useEditorStore();
  const value = editor?.getAttributes("textStyle")?.color || "#000000";

  const onChange = (color: ColorResult) => {
    editor?.chain().focus().setColor(color.hex).run();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-7 min-w-7 flex flex-col justify-center items-center shrink-0 rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm">
          <span className="text-sm">A</span>
          <div
            className="h-0.5 w-full -mt-0.5"
            style={{ backgroundColor: value }}
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-0">
        <SketchPicker color={value} onChange={onChange} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TextColor;
