import Avatar from "./Avatar";
import { Separator } from "../ui/separator";
import { useOthers, useSelf } from "@liveblocks/react/suspense";

const AvatarStack = () => {
  const users = useOthers();
  const currentUser = useSelf();

  if (users.length === 0) {
    return null;
  }

  return (
    <>
      <div className="flex items-center">
        {currentUser && (
          <div className="relative ml-2">
            <Avatar src={currentUser.info.avatar} name="You" />
          </div>
        )}
        <div className="flex">
          {users.map(({ id, info }) => {
            return <Avatar key={id} src={info.avatar} name={info.name} />;
          })}
        </div>
      </div>
      <Separator orientation="vertical" className="h-6" />
    </>
  );
};

export default AvatarStack;
