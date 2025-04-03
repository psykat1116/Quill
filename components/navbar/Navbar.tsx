import Image from "next/image";
import Link from "next/link";
import DocInput from "./DocInput";
import Menu from "./Menu";
import Avatars from "./Avatars";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import Inbox from "./Inbox";
import { Doc } from "@/convex/_generated/dataModel";

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
