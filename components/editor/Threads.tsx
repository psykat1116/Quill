import { useThreads, ClientSideSuspense } from "@liveblocks/react/suspense";
import {
  AnchoredThreads,
  FloatingComposer,
  FloatingThreads,
} from "@liveblocks/react-tiptap";
import { Editor } from "@tiptap/react";
import ScreenLoader from "../ScreenLoader";

const Threads = ({ editor }: { editor: Editor | null }) => {
  const { threads } = useThreads({ query: { resolved: false } });

  return (
    <ClientSideSuspense fallback={<ScreenLoader label="Threads Loading.." />}>
      <div className="anchored-threads">
        <AnchoredThreads editor={editor} threads={threads} />
      </div>
      <FloatingThreads
        editor={editor}
        threads={threads}
        className="floating-threads"
      />
      <FloatingComposer editor={editor} className="floating-composer" />
    </ClientSideSuspense>
  );
};

export default Threads;
