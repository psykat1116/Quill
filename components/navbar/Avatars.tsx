"use client";
import { ClientSideSuspense } from "@liveblocks/react";

import AvatarStack from "@/components/navbar/AvatarStack";

const Avatars = () => {
  return (
    <ClientSideSuspense fallback={null}>
      <AvatarStack />
    </ClientSideSuspense>
  );
};

export default Avatars;
