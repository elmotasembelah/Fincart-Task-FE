import { useQuery } from "@tanstack/react-query";
import { getSlots } from "@/api/slot.api";
import type { Slot } from "@/types/slot.types";
import type { PaginatedResponse } from "@/types/pagination.types";

export const useSlots = (
  page: number,
  pageSize = 10,
  serviceId?: string,
  isBooked?: boolean,
) => {
  const { data, isLoading, isError } = useQuery<PaginatedResponse<Slot>>({
    queryKey: ["slots", page, pageSize, serviceId, isBooked],
    queryFn: () => getSlots(page, pageSize, serviceId, isBooked),
  });

  const slots = data?.data || [];
  const hasNextPage = data?.pagination?.hasNextPage ?? false;

  return {
    isLoading,
    isError,
    slots,
    hasNextPage,
  };
};
