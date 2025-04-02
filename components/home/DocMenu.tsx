import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Id } from "@/convex/_generated/dataModel";
import { Button } from "../ui/button";
import { ExternalLink, FilePen, MoreVertical, Trash } from "lucide-react";
import RemoveDialog from "@/components/modal/RemoveDialog";
import RenameDialog from "@/components/modal/RenameDialog";

interface DocMenuProps {
  documentId: Id<"documents">;
  title: string;
  onNewTab: () => void;
}

const DocMenu = ({ documentId, title, onNewTab }: DocMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="rounded-full" size="icon">
          <MoreVertical className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem className="cursor-pointer" onClick={onNewTab}>
          <ExternalLink className="size-4 mr-2" />
          Open in new tab
        </DropdownMenuItem>
        <RenameDialog title={title} documentId={documentId}>
          <DropdownMenuItem
            onSelect={(e) => e.preventDefault()}
            onClick={(e) => e.stopPropagation()}
            className="cursor-pointer"
          >
            <FilePen className="size-4 mr-2" />
            Rename
          </DropdownMenuItem>
        </RenameDialog>
        <RemoveDialog documentId={documentId}>
          <DropdownMenuItem
            onSelect={(e) => e.preventDefault()}
            onClick={(e) => e.stopPropagation()}
            className="cursor-pointer"
          >
            <Trash className="size-4 mr-2" />
            Delete
          </DropdownMenuItem>
        </RemoveDialog>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DocMenu;
