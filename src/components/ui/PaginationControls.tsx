import { Button } from "@/components/ui/button";

interface PaginationControlsProps {
  page: number;
  hasNextPage: boolean;
  onPageChange: (newPage: number) => void;
}

export const PaginationControls = ({
  page,
  hasNextPage,
  onPageChange,
}: PaginationControlsProps) => {
  return (
    <div className="mt-6 flex items-center justify-center gap-4">
      <Button
        variant="outline"
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
      >
        Prev
      </Button>
      <span className="text-muted-foreground text-sm">{page}</span>
      <Button onClick={() => onPageChange(page + 1)} disabled={!hasNextPage}>
        Next
      </Button>
    </div>
  );
};
