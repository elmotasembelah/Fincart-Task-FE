import { Button } from "@/components/ui/button";
import { useCancelBooking } from "@/hooks/bookings/useCancelBooking";

interface CancelBookingButtonProps {
  bookingId: string;
  isDisabled?: boolean;
}

export function CancelBookingButton({
  bookingId,
  isDisabled = false,
}: CancelBookingButtonProps) {
  const { mutate: cancelBooking, isPending } = useCancelBooking();

  const handleCancel = () => {
    cancelBooking(bookingId);
  };

  return (
    <Button
      onClick={handleCancel}
      disabled={isPending || isDisabled}
      variant="destructive"
      className="mt-3 w-full"
    >
      {isPending ? "Cancelling..." : "Cancel Booking"}
    </Button>
  );
}
