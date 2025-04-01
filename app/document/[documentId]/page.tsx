import Editor from "@/components/Editor";
import Toolbar from "@/components/Toolbar";

interface DocIdPageProps {
  params: Promise<{ documentId: string }>;
}

const DocIdPage = async ({ params }: DocIdPageProps) => {
  const { documentId } = await params;
  return (
    <div className="min-h-screen bg-[#fafbfb]">
      <Toolbar />
      <Editor />
    </div>
  );
};

export default DocIdPage;
