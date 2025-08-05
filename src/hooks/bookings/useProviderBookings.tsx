import { useQuery } from "@tanstack/react-query";
import { getMyBookings } from "@/api/booking.api";

export const useProviderBookings = (page: number, pageSize: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ["provider-bookings", page, pageSize],
    queryFn: () => getMyBookings(page, pageSize),
  });

  return {
    bookings: data?.data || [],
    hasNextPage: data?.pagination?.hasNextPage ?? false,
    isLoading,
  };
};
