"use client";
import { api } from "@/convex/_generated/api";
import { usePaginatedQuery } from "convex/react";

import { useSearch } from "@/hook/useSearch";
import DocTable from "@/components/home/DocTable";
import HomeNavbar from "@/components/navbar/HomeNavbar";
import TemplateGallery from "@/components/home/TemplateGallery";

const Home = () => {
  const [search] = useSearch("search");
  const { results, status, loadMore } = usePaginatedQuery(
    api.documents.get,
    { search },
    {
      initialNumItems: 5,
    }
  );

  return (
    <div className="flex min-h-screen flex-col">
      <div className="fixed top-2 left-0 right-0 z-10 h-14 ">
        <HomeNavbar />
      </div>
      <div>
        <TemplateGallery />
        <DocTable documents={results} loadMore={loadMore} status={status} />
      </div>
    </div>
  );
};

export default Home;
