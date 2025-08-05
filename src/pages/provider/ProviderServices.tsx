import { useState } from "react";
import { usePagination } from "@/hooks/usePagniation";
import { PaginationControls } from "@/components/ui/PaginationControls";
import { useDebounce } from "@/hooks/useDebounce";
import ServicesList from "@/features/services/ServicesList";
import ServiceFilters from "@/features/services/ServiceFilter";
import { useMyServices } from "@/hooks/bookings/useMyServices";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PAGE_SIZE = 9;

export default function ProviderServices() {
  const [title, setSearch] = useState("");
  const [category, setCategory] = useState<string | undefined>(undefined);
  const debouncedSearch = useDebounce(title, 400);

  const { page, pageSize, setPage } = usePagination(PAGE_SIZE);

  const { isLoading, services, hasNextPage } = useMyServices(
    page,
    pageSize,
    debouncedSearch,
    category,
  );

  return (
    <div className="mx-auto max-w-6xl space-y-4 p-4">
      <h1 className="text-2xl font-bold">My Services</h1>

      <Button asChild>
        <Link to="/provider/services/new">Create Service +</Link>
      </Button>

      <ServiceFilters
        title={title}
        setTitle={setSearch}
        category={category}
        setCategory={setCategory}
      />

      <ServicesList
        isLoading={isLoading}
        services={services}
        pageSize={pageSize}
      />

      <PaginationControls
        page={page}
        hasNextPage={hasNextPage}
        onPageChange={setPage}
      />
    </div>
  );
}
