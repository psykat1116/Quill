import { useState } from "react";
import { Minus, Plus } from "lucide-react";

import { useEditorStore } from "@/store/useEditorStore";

const FontSize = () => {
  const { editor } = useEditorStore();
  const currentSize = editor?.getAttributes("textStyle").fontSize
    ? editor.getAttributes("textStyle").fontSize.replace("px", "")
    : "16";

  const [fontSize, setFontSize] = useState(currentSize);
  const [inputValue, setInputValue] = useState(fontSize);
  const [isEditing, setIsEditing] = useState(false);

  const updateFontSize = (value: string) => {
    const size = parseInt(value);
    if (!isNaN(size) && size > 0) {
      editor?.chain().focus().setFontSize(`${size}px`).run();
      setFontSize(value);
      setInputValue(value);
      setIsEditing(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      updateFontSize(inputValue);
      editor?.commands.focus();
    }
  };

  const increment = () => {
    const newSize = parseInt(fontSize) + 1;
    if (newSize < 100) {
      updateFontSize(newSize.toString());
    }
  };

  const decrement = () => {
    const newSize = parseInt(fontSize) - 1;
    if (newSize > 10) {
      updateFontSize(newSize.toString());
    }
  };

  return (
    <div className="flex items-center gap-x-0.5">
      <button
        onClick={decrement}
        className="h-7 w-7 flex justify-center items-center shrink-0 rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm"
      >
        <Minus className="size-4" />
      </button>
      {isEditing ? (
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={() => updateFontSize(inputValue)}
          onKeyDown={handleKeyDown}
          className="h-7 w-10 border border-neutral-400 text-center rounded-sm bg-transparent focus:outline-none focus:ring-0 text-sm"
        />
      ) : (
        <button
          onClick={() => {
            setIsEditing(true);
            setFontSize(currentSize);
          }}
          className="h-7 w-10 border border-neutral-400 text-center rounded-sm bg-transparent cursor-text text-sm"
        >
          {currentSize}
        </button>
      )}
      <button
        onClick={increment}
        className="h-7 w-7 flex justify-center items-center shrink-0 rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm"
      >
        <Plus className="size-4" />
      </button>
    </div>
  );
};

export default FontSize;
