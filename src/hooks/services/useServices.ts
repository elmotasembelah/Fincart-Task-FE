import { useQuery } from "@tanstack/react-query";
import { getAllServices } from "@/api/service.api";

export const useServices = (
  page: number,
  pageSize: number,
  title?: string,
  category?: string,
) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["services", page, pageSize, title, category],
    queryFn: () => getAllServices(page, pageSize, title, category),
  });

  const services = data?.data || [];
  const hasNextPage = data?.pagination?.hasNextPage ?? false;

  return {
    isLoading,
    isError,
    services,
    hasNextPage,
  };
};
