import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useDebounce } from "@/hook/useDebounce";
import { useStatus } from "@liveblocks/react";
import { useMutation } from "convex/react";
import { Loader } from "lucide-react";
import React, { useRef, useState } from "react";
import { BsCloudCheck, BsCloudSlash } from "react-icons/bs";
import { toast } from "sonner";

interface DocInputProps {
  title: string;
  id: Id<"documents">;
}

const DocInput = ({ title, id }: DocInputProps) => {
  const status = useStatus();
  const [isPending, setIsPending] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(title || "Untitled");

  const showLoader =
    isPending || status === "connecting" || status === "reconnecting";
  const showError = status === "disconnected";

  const inputRef = useRef<HTMLInputElement>(null);
  const mutate = useMutation(api.documents.updateById);

  const devouncedUpdate = useDebounce((newValue: string) => {
    if (newValue === title) return;

    setIsPending(true);
    mutate({ id, title: newValue })
      .then(() => {
        toast.success("Document Updated");
      })
      .catch(() => {
        toast.error("Error updating document");
      })
      .finally(() => {
        setIsPending(false);
      });
  });

  const handleSubmit = (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value === title) return;
    setIsPending(true);
    mutate({ id, title: value })
      .then(() => {
        toast.success("Document Updated");
        setIsEditing(false);
      })
      .catch(() => {
        toast.error("Error updating document");
      })
      .finally(() => {
        setIsPending(false);
      });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    devouncedUpdate(e.target.value);
  };

  return (
    <div className="flex items-center gap-2">
      {isEditing ? (
        <form onSubmit={handleSubmit} className="relative w-fit max-w-[50ch]">
          <span className="invisible whitespace-pre px-1.5 text-lg">
            {value || "Untitled"}
          </span>
          <input
            ref={inputRef}
            value={value}
            disabled={isPending}
            onChange={onChange}
            onBlur={() => setIsEditing(false)}
            className="absolute inset-0 text-lg text-black px-1.5 bg-transparent truncate"
          />
        </form>
      ) : (
        <span
          onClick={() => {
            setIsEditing(true);
            setTimeout(() => {
              inputRef.current?.focus();
            }, 0);
          }}
          className="text-lg px-1.5 cursor-pointer truncate"
        >
          {title || "Untitled"}
        </span>
      )}
      {!showError && !showLoader && <BsCloudCheck className="text-green-600" />}
      {showLoader && (
        <Loader className="animate-spin text-muted-foreground size-4" />
      )}
      {showError && <BsCloudSlash className="text-rose-600" />}
    </div>
  );
};

export default DocInput;
