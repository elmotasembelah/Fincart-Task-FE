import { useQuery } from "@tanstack/react-query";
import { getMyServices } from "@/api/service.api";

export const useMyServices = (
  page: number,
  pageSize: number,
  title?: string,
  category?: string,
) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["my-services", page, pageSize, title, category],
    queryFn: () => getMyServices(page, pageSize, title, category),
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
