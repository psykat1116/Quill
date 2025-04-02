import { BsCloudCheck } from "react-icons/bs";

const DocInput = () => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-lg px-1.5 cursor-pointer truncate">
        Untitled Document
      </span>
      <BsCloudCheck className="text-gray-500" />
    </div>
  );
};

export default DocInput;
