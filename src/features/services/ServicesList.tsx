import { Skeleton } from "@/components/ui/skeleton";
import { ServiceCard } from "@/features/services/ServiceCard";
import type { Service } from "@/types/service.types";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";

type Props = {
  isLoading: boolean;
  services: Service[];
  pageSize: number;
};

export default function ServicesList({ isLoading, services, pageSize }: Props) {
  const user = useSelector((state: RootState) => state.auth.user);
  const isProvider = user?.role === "provider";

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: pageSize }).map((_, i) => (
          <Skeleton key={i} className="h-64 w-full rounded-xl" />
        ))}
      </div>
    );
  }

  if (services.length === 0) {
    return (
      <div className="text-muted-foreground py-12 text-center text-lg">
        No services found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => {
        const to = isProvider
          ? `/provider/services/${service.id}`
          : `/services/${service.id}`;

        return <ServiceCard key={service.id} service={service} to={to} />;
      })}
    </div>
  );
}
