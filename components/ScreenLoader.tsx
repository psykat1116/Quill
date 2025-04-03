import { Loader } from "lucide-react";

interface ScreenLoaderProps {
  label?: string;
}

const ScreenLoader = ({ label }: ScreenLoaderProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-blue-700 to-indigo-900  text-white">
      <div className="absolute inset-0 bg-white opacity-10 mix-blend-overlay" />
      <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-20 blur-3xl transform rotate-45" />
      <Loader className="size-6 animate-spin" />
      {label && <p className="text-sm">{label}</p>}
    </div>
  );
};

export default ScreenLoader;
