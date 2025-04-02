import TemplateGallery from "@/components/gallery/TemplateGallery";
import HomeNavbar from "@/components/navbar/HomeNavbar";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 p-4">
        <HomeNavbar />
      </div>
      <div className="mt-16">
        <TemplateGallery />
      </div>
    </div>
  );
};

export default Home;
