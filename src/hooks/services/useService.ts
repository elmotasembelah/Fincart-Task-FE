import { useQuery } from "@tanstack/react-query";
import { getServiceById } from "@/api/service.api";
import type { Service } from "@/types/service.types";

export const useService = (id: string | undefined) => {
  return useQuery<Service>({
    queryKey: ["service", id],
    queryFn: () => getServiceById(id!),
    enabled: !!id,
  });
};
