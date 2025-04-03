import { AVATAR_SIZE } from "@/constant";
import Image from "next/image";

interface AvatarProps {
  src: string;
  name: string;
}

const Avatars = ({ src, name }: AvatarProps) => {
  return (
    <div
      style={{ width: AVATAR_SIZE, height: AVATAR_SIZE }}
      className="group -ml-2 flex shrink-0 place-content-center relative border-4 border-white rounded-full bg-gray-400"
    >
      <div className="opacity-0 group-hover:opaity-100 absolute top-full py-1 px-2 text-white text-xs rounded-lg mt-2.5 z-10 bg-black whitespace-nowrap transition-opacity">
        {name}
      </div>
      <Image alt={name} src={src} fill className="rounded-full" />
    </div>
  );
};

export default Avatars;
