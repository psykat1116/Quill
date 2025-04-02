"use client";
import { useRef, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useSearch } from "@/hook/useSearch";
import { Search, X } from "lucide-react";

const SearchInput = () => {
  const [search, setSearch] = useSearch("search");
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
          ref={inputRef}
          placeholder="Search..."
          className="md:text-base placeholder:text-neutral-800 px-14 w-full border-none focus-visible:shadow-[0_1px_1px_0_rgba(65,69,73,.3),0_1px_3px_1px_rgba(65,69,73,.15)] bg-[#f0f4f8] rounded-full h-[48px] focus-visible:ring-0 focus:bg-white"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          className="absolute left-3 top-1/2 -translate-y-1/2 [&_svg]:size-5 rounded-full"
          type="submit"
          size="icon"
          variant="ghost"
        >
          <Search />
        </Button>
        {value && (
          <Button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 [&_svg]:size-5 rounded-full"
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
