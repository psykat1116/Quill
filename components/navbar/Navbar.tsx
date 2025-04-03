import Link from "next/link";
import Image from "next/image";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

import Menu from "@/components/navbar/Menu";
import Inbox from "@/components/navbar/Inbox";
import Avatars from "@/components/navbar/Avatars";
import { Doc } from "@/convex/_generated/dataModel";
import DocInput from "@/components/navbar/DocInput";

interface NavbarProps {
  data: Doc<"documents">;
}

const Navbar = ({ data }: NavbarProps) => {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={36} height={36} />
        </Link>
        <div className="flex flex-col">
          <DocInput title={data.title} id={data._id} />
          <Menu title={data.title} />
        </div>
      </div>
      <div className="flex gap-3 items-center pl-6">
        <Avatars />
        <Inbox />
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

export default Navbar;
