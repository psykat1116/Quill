"use client";
import { useRef, useState } from "react";
import { Search, X } from "lucide-react";

import { useSearch } from "@/hook/useSearch";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchInput = () => {
  const [, setSearch] = useSearch("search");
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    setValue("");
    inputRef.current?.blur();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch(value);
    inputRef.current?.blur();
  };

  return (
    <div className="flex-1 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="relative max-w-[720px] w-full">
        <Input
          autoFocus
          ref={inputRef}
          placeholder="Search..."
          className="placeholder:text-neutral-800 px-8 md:px-11 w-full border-none bg-[#f0f4f8] rounded-sm h-[30px] md:h-[40px] focus-visible:ring-0 text-sm md:text-base"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          className="absolute md:left-2 top-[51%] -translate-y-1/2 [&_svg]:size-4 hover:bg-transparent rounded-full"
          type="submit"
          size="icon"
          variant="ghost"
        >
          <Search />
        </Button>
        {value && (
          <Button
            onClick={handleClear}
            className="absolute right-0 md:right-3 top-1/2 -translate-y-1/2 [&_svg]:size-4 hover:bg-transparent rounded-full"
            type="button"
            size="icon"
            variant="ghost"
          >
            <X />
          </Button>
        )}
      </form>
    </div>
  );
};

export default SearchInput;
