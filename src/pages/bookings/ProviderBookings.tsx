import { usePagination } from "@/hooks/usePagniation";
import { PaginationControls } from "@/components/ui/PaginationControls";
import { MyBookingsList } from "@/features/bookings/BookingsList";
import { useProviderBookings } from "@/hooks/bookings/useProviderBookings";

const PAGE_SIZE = 10;

export default function ProviderBookings() {
  const { page, pageSize, setPage } = usePagination(PAGE_SIZE);

  const { bookings, isLoading, hasNextPage } = useProviderBookings(
    page,
    pageSize,
  );

  return (
    <div className="mx-auto max-w-6xl space-y-4 p-4">
      <h2 className="text-2xl font-bold">Client Bookings</h2>
      <MyBookingsList
        bookings={bookings}
        isLoading={isLoading}
        pageSize={pageSize}
      />
      <PaginationControls
        page={page}
        hasNextPage={hasNextPage}
        onPageChange={setPage}
      />
    </div>
  );
}
