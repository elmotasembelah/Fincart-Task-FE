import { useSearchParams } from "react-router-dom";

export const usePagination = (defaultPageSize = 10) => {
  const [params, setParams] = useSearchParams();

  const page = parseInt(params.get("page") || "1", 10);
  const pageSize = parseInt(params.get("limit") || String(defaultPageSize), 10);

  const setPage = (newPage: number) => {
    params.set("page", String(newPage));
    setParams(params);
  };

  return { page, pageSize, setPage };
};
