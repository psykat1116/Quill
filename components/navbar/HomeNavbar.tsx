import Link from "next/link";
import Image from "next/image";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

import SearchInput from "@/components/navbar/SearchInput";

const HomeNavbar = () => {
  return (
    <nav className="flex items-center justify-between h-full bg-white mx-3 w-[calc(100%-24px)] px-4 rounded-md shadow-md gap-x-5">
      <div className="flex gap-2 items-center shrink-0">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={30} height={30} />
        </Link>
        <h3 className="text-xl font-bold hidden md:block">Quill</h3>
      </div>
      <SearchInput />
      <div className="flex gap-3 items-center">
        <OrganizationSwitcher
          afterCreateOrganizationUrl="/"
          afterLeaveOrganizationUrl="/"
          afterSelectOrganizationUrl="/"
          afterSelectPersonalUrl="/"
        />
        <UserButton />
      </div>
    </nav>
  );
};

export default HomeNavbar;
