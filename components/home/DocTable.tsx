import { PaginationStatus } from "convex/react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Loading from "@/components/Loading";
import DocRow from "@/components/home/DocRow";
import { Button } from "@/components/ui/button";
import { Doc } from "@/convex/_generated/dataModel";

interface DocTableProps {
  documents: Doc<"documents">[];
  loadMore: (numItem: number) => void;
  status: PaginationStatus;
}

const DocTable = ({ documents, loadMore, status }: DocTableProps) => {
  return (
    <div className="max-w-screen-xl mx-auto py-6 px-16 flex flex-col gap-5">
      {documents === undefined ? (
        <Loading />
      ) : (
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-none">
              <TableHead>Name</TableHead>
              <TableHead>&nbsp;</TableHead>
              <TableHead className="hidden md:table-cell">Share</TableHead>
              <TableHead className="hidden md:table-cell">Created at</TableHead>
            </TableRow>
          </TableHeader>
          {documents.length === 0 ? (
            <TableBody>
              <TableRow className="hover:bg-transparent">
                <TableCell
                  colSpan={4}
                  className="h-24 text-center text-muted-foreground"
                >
                  No documents found
                </TableCell>
              </TableRow>
            </TableBody>
          ) : (
            <TableBody>
              {documents.map((doc) => (
                <DocRow key={doc._id} document={doc} />
              ))}
            </TableBody>
          )}
        </Table>
      )}
      <div className="flex items-center justify-center">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => loadMore(5)}
          disabled={status !== "CanLoadMore"}
        >
          {status === "CanLoadMore" ? "Load more" : "End of documents"}
        </Button>
      </div>
    </div>
  );
};

export default DocTable;
