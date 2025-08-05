import { Skeleton } from "@/components/ui/skeleton";
import type { Booking } from "@/types/booking.types";
import { BookingCard } from "@/features/bookings/BookingCard";

interface Props {
  bookings: Booking[];
  isLoading: boolean;
  pageSize: number;
}

export const MyBookingsList = ({ bookings, isLoading, pageSize }: Props) => {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: pageSize }).map((_, i) => (
          <Skeleton key={i} className="h-24 w-full rounded-md" />
        ))}
      </div>
    );
  }

  if (bookings.length === 0) {
    return (
      <p className="text-muted-foreground text-center">No bookings found.</p>
    );
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {bookings.map((booking) => (
          <BookingCard key={booking.id} booking={booking} />
        ))}
      </div>
    </div>
  );
};
