"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { useState } from "react";
import { toast } from "sonner";

interface RenameDialogProps {
  title: string;
  children: React.ReactNode;
  documentId: Id<"documents">;
}

const RenameDialog = ({ documentId, children, title }: RenameDialogProps) => {
  const update = useMutation(api.documents.updateById);
  const [isUpdating, setIsUpdating] = useState(false);
  const [text, setText] = useState(title);
  const [open, setOpen] = useState(false);

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsUpdating(true);
    await update({ id: documentId, title: text.trim() || "Untitled" })
      .then(() => {
        toast.success("Document renamed successfully");
        setOpen(false);
      })
      .catch((error) => {
        toast.error("Error renaming document: " + error);
      })
      .finally(() => {
        setIsUpdating(false);
      });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleUpdate}>
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogDescription>
              Enter a new name for this document
            </DialogDescription>
          </DialogHeader>
          <div className="my-4">
            <Input value={text} onChange={(e) => setText(e.target.value)} />
          </div>
          <DialogFooter>
            <DialogClose asChild disabled={isUpdating}>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" disabled={isUpdating}>
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RenameDialog;
