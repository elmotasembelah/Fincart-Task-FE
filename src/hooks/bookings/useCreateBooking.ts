import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBooking, type CreateBookingPayload } from "@/api/booking.api";
import { toast } from "sonner";
import type { AxiosError } from "axios";

export const useCreateBooking = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateBookingPayload) => createBooking(payload),
    onSuccess: () => {
      toast.success("Slot booked successfully!");

      queryClient.invalidateQueries({
        queryKey: ["slots"],
        exact: false,
      });
    },
    onError: (err: AxiosError<{ message: string }>) => {
      toast.error(err?.response?.data?.message || "Booking failed");
    },
  });
};
