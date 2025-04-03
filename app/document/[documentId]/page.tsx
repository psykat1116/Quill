import Editor from "@/components/editor/Editor";
import Navbar from "@/components/navbar/Navbar";
import Room from "@/components/editor/Room";
import Toolbar from "@/components/editor/Toolbar";

interface DocIdPageProps {
  params: Promise<{ documentId: string }>;
}

const DocIdPage = async ({ params }: DocIdPageProps) => {
  const { documentId } = await params;

  return (
    <Room>
      <div className="min-h-screen bg-[#fafbfb]">
        <div className="flex flex-col pt-2 px-4 gap-2 fixed top-0 left-0 right-0 z-10 bg-[#fafbfd] print:hidden">
          <Navbar />
          <Toolbar />
        </div>
        <div className="pt-[114px] print:pt-0">
          <Editor />
        </div>
      </div>
    </Room>
  );
};

export default DocIdPage;
