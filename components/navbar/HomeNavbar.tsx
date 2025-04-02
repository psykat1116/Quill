import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchInput from "./SearchInput";

const HomeNavbar = () => {
  return (
    <nav className="flex items-center justify-between h-full bg-white w-full">
      <div className="flex gap-3 items-center shrink-0 pr-6">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={30} height={30} />
        </Link>
        <h3 className="text-xl font-bold">Quill</h3>
      </div>
      <SearchInput />
      <div />
    </nav>
  );
};

export default HomeNavbar;
