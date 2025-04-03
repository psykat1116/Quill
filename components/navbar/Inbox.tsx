"use client";
import { Bell } from "lucide-react";
import { ClientSideSuspense } from "@liveblocks/react";
import InboxMenu from "./InboxMenu";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Inbox = () => {
  return (
    <ClientSideSuspense
      fallback={
        <>
          <Button disabled variant="ghost" className="relative" size="icon">
            <Bell className="size-5" />
          </Button>
          <Separator className="h-6" orientation="vertical" />
        </>
      }
    >
      <InboxMenu />
      <Separator className="h-6" orientation="vertical" />
    </ClientSideSuspense>
  );
};

export default Inbox;
