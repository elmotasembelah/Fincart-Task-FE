import { Button } from "@/components/ui/button";
import { useCreateBooking } from "@/hooks/bookings/useCreateBooking";
import type { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

interface BookButtonProps {
  serviceId: string;
  slotId: string;
}

export function BookButton({ serviceId, slotId }: BookButtonProps) {
  const { mutate: bookSlot, isPending } = useCreateBooking();
  const user = useSelector((state: RootState) => state.auth.user);
  const navigate = useNavigate();

  const handleClick = () => {
    if (!user) {
      navigate(`/login?redirectTo=/services/${serviceId}`);
      return;
    }

    bookSlot({ service: serviceId, slot: slotId });
  };

  return (
    <Button onClick={handleClick} disabled={isPending} className="w-full">
      {isPending ? "Booking..." : "Book Slot"}
    </Button>
  );
}
