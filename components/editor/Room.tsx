"use client";
import { ReactNode, useEffect, useMemo, useState } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { useParams } from "next/navigation";
import { getUsers } from "@/actions/getUsers";
import { getDocs } from "@/actions/getDocs";
import { toast } from "sonner";
import ScreenLoader from "../ScreenLoader";
import { Id } from "@/convex/_generated/dataModel";
import { DEFAULT_MARGIN } from "@/constant";
import { User } from "@/types";

interface RoomProps {
  children: ReactNode;
}

const Room = ({ children }: RoomProps) => {
  const [users, setUsers] = useState<User[]>([]);
  const { documentId } = useParams<{ documentId: string }>();

  const fetchUsers = useMemo(
    () => async () => {
      try {
        const list = await getUsers();
        setUsers(list);
      } catch {
        toast.error("Failed to fetch users");
      }
    },
    []
  );

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <LiveblocksProvider
      throttle={16}
      authEndpoint={async () => {
        const endpoint = "/api/liveblocks-auth";
        const room = documentId;

        const response = await fetch(endpoint, {
          method: "POST",
          body: JSON.stringify({ room }),
        });

        return await response.json();
      }}
      resolveUsers={({ userIds }) => {
        return userIds.map(
          (userId) => users.find((user) => user.id === userId) || undefined
        );
      }}
      resolveMentionSuggestions={({ text }) => {
        let filteredUsers = users;
        if (text) {
          filteredUsers = users.filter((user) =>
            user.name.toLowerCase().includes(text.toLowerCase())
          );
        }

        return filteredUsers.map((user) => user.id);
      }}
      resolveRoomsInfo={async ({ roomIds }) => {
        const documents = await getDocs(roomIds as Id<"documents">[]);
        return documents.map((doc) => ({
          id: doc.id,
          name: doc.name,
        }));
      }}
    >
      <RoomProvider
        id={documentId}
        initialStorage={{
          leftMargin: DEFAULT_MARGIN,
          rightMargin: DEFAULT_MARGIN,
        }}
      >
        <ClientSideSuspense
          fallback={<ScreenLoader label="Entering Room..." />}
        >
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
};

export default Room;
