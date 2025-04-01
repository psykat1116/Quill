import { UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <div className="flex h-full w-full justify-center items-center">
      <UserButton />
    </div>
  );
};

export default Home;
