import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-24">
      <Loader className="animate-spin text-muted-foreground size-5" />
    </div>
  );
};

export default Loading;
