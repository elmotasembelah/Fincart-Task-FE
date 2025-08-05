import { PaginationControls } from "@/components/ui/PaginationControls";
import { Skeleton } from "@/components/ui/skeleton";
import { useSlots } from "@/hooks/slot/useSlots";
import { usePagination } from "@/hooks/usePagniation";
import { SlotCard } from "./SlotCard";

interface Props {
  serviceId: string;
  isBooked?: boolean;
  pageSize?: number;
}

export const ServiceSlotList = ({ serviceId, pageSize = 9 }: Props) => {
  const { page, setPage } = usePagination(pageSize);

  const { slots, isLoading, isError, hasNextPage } = useSlots(
    page,
    pageSize,
    serviceId,
    false,
  );

  if (isLoading) {
    return (
      <div className="space-y-3">
        {Array.from({ length: pageSize }).map((_, i) => (
          <Skeleton key={i} className="h-16 w-full rounded-md" />
        ))}
      </div>
    );
  }

  if (isError || slots.length === 0) {
    return <p className="text-muted-foreground text-sm">No available slots.</p>;
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {slots.map((slot) => (
          <SlotCard key={slot.id} slot={slot} />
        ))}
      </div>

      <PaginationControls
        page={page}
        hasNextPage={hasNextPage}
        onPageChange={setPage}
      />
    </div>
  );
};
