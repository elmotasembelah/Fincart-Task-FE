import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cancelBooking } from "@/api/booking.api";
import { toast } from "sonner";
import type { AxiosError } from "axios";

export const useCancelBooking = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (bookingId: string) => cancelBooking(bookingId),
    onSuccess: () => {
      toast.success("Booking canceled successfully");
      queryClient.invalidateQueries({ queryKey: ["myBookings"] });
    },
    onError: (err: AxiosError<{ message: string }>) => {
      toast.error(err?.response?.data?.message || "Failed to cancel booking");
    },
  });
};
