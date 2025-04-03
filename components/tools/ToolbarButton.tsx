import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface ToolbarButtonProps {
  onClick?: () => void;
  isActive?: boolean;
  icon: LucideIcon;
}

const ToolbarButton = ({
  onClick,
  isActive = false,
  icon: Icon,
}: ToolbarButtonProps) => {
  return (
    <button
      className={cn(
        "text-sm h-7 min-w-7 justify-center items-center flex rounded-sm hover:bg-neutral-200/80",
        isActive && "bg-neutral-200/80"
      )}
      onClick={onClick}
    >
      <Icon className="size-4" />
    </button>
  );
};

export default ToolbarButton;
