import { BookingStatus, type Booking } from "@/types/booking.types";
import dayjs from "dayjs";
import { CancelBookingButton } from "@/features/bookings/CancelBookingButton";
import { useAppSelector } from "@/store/hooks";
import { Badge } from "@/components/ui/badge";

interface BookingCardProps {
  booking: Booking;
}

export const BookingCard = ({ booking }: BookingCardProps) => {
  const user = useAppSelector((state) => state.auth.user);
  const canCancel =
    user?.role === "user" && booking.status !== BookingStatus.CANCELLED;

  const formattedDate = dayjs(booking.slot.startTime).format("MMM D, YYYY");
  const startTime = dayjs(booking.slot.startTime).format("HH:mm");
  const endTime = dayjs(booking.slot.endTime).format("HH:mm");

  return (
    <div className="space-y-3 rounded-xl border bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold capitalize">
            {booking.service.title}
          </h3>
          <p className="text-muted-foreground text-sm">
            {booking.service.category}
          </p>
        </div>
        <Badge
          variant={getStatusVariant(booking.status)}
          className="capitalize"
        >
          {booking.status}
        </Badge>
      </div>

      <div className="space-y-1 text-sm">
        <p className="text-muted-foreground">Date: {formattedDate}</p>
        <p>
          Time:{" "}
          <span className="font-medium">
            {startTime} - {endTime}
          </span>
        </p>
      </div>

      {canCancel && (
        <div>
          <CancelBookingButton bookingId={booking.id} />
        </div>
      )}
    </div>
  );
};

function getStatusVariant(
  status: BookingStatus,
): "default" | "destructive" | "outline" | "secondary" {
  switch (status) {
    case BookingStatus.CANCELLED:
      return "destructive";
    case BookingStatus.COMPLETED:
      return "default";
    case BookingStatus.PENDING:
      return "secondary";
    default:
      return "outline";
  }
}
