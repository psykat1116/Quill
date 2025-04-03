import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { SiGoogledocs } from "react-icons/si";
import { Building2, CircleUser } from "lucide-react";

import DocMenu from "@/components/home/DocMenu";
import { Doc } from "@/convex/_generated/dataModel";
import { TableCell, TableRow } from "@/components/ui/table";

interface DocRowProps {
  document: Doc<"documents">;
}

const DocRow = ({ document }: DocRowProps) => {
  const router = useRouter();

  return (
    <TableRow
      className="cursor-pointer"
      onClick={() => router.push(`/document/${document._id}`)}
    >
      <TableCell className="w-[50px]">
        <SiGoogledocs className="size-6 fill-blue-500" />
      </TableCell>
      <TableCell className="font-medium md:w-[45%]">{document.title}</TableCell>
      <TableCell className="text-muted-foreground hidden md:flex items-center gap-2">
        {document.organizationId ? (
          <Building2 className="size-4" />
        ) : (
          <CircleUser className="size-4" />
        )}
        {document.organizationId ? "Organization" : "Personal"}
      </TableCell>
      <TableCell className="text-muted-foreground hidden md:table-cell">
        {format(new Date(document._creationTime), "MMM dd, yyyy")}
      </TableCell>
      <TableCell className="flex justify-end">
        <DocMenu
          documentId={document._id}
          title={document.title}
          onNewTab={() => window.open(`/document/${document._id}`, "_blank")}
        />
      </TableCell>
    </TableRow>
  );
};

export default DocRow;
