import { usePagination } from "@/hooks/usePagniation";
import { useMyBookings } from "@/hooks/bookings/useMyBookings";
import { PaginationControls } from "@/components/ui/PaginationControls";
import { MyBookingsList } from "@/features/bookings/BookingsList";

const PAGE_SIZE = 9;

export default function MyBookings() {
  const { page, pageSize, setPage } = usePagination(PAGE_SIZE);
  const { bookings, isLoading, hasNextPage } = useMyBookings(page, pageSize);

  return (
    <div className="mx-auto max-w-6xl space-y-6 p-4">
      <h1 className="text-2xl font-bold">My Bookings</h1>

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
