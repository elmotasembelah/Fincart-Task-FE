import { useQuery } from "@tanstack/react-query";
import { getMyBookings } from "@/api/booking.api";

export const useMyBookings = (page: number, pageSize: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ["myBookings", page, pageSize],
    queryFn: () => getMyBookings(page, pageSize),
  });

  return {
    bookings: data?.data || [],
    isLoading,
    hasNextPage: data?.pagination?.hasNextPage ?? false,
  };
};
