import { Bell } from "lucide-react";
import { useInboxNotifications } from "@liveblocks/react/suspense";
import { InboxNotification, InboxNotificationList } from "@liveblocks/react-ui";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const InboxMenu = () => {
  const { inboxNotifications } = useInboxNotifications();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative" size="icon">
          <Bell className="size-5" />
          {inboxNotifications?.length > 0 && (
            <span className="absolute -top-1 -right-1 size-4 rounded-full bg-sky-500 flex items-center justify-center text-white">
              {inboxNotifications.length}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-auto">
        {inboxNotifications.length > 0 ? (
          <InboxNotificationList>
            {inboxNotifications.map((not) => (
              <InboxNotification key={not.id} inboxNotification={not} />
            ))}
          </InboxNotificationList>
        ) : (
          <div className="p-2 w-[400px] text-center text-muted-foreground text-sm">
            No Notifications.
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default InboxMenu;
