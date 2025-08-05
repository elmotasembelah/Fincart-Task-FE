import { useParams } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import { useService } from "@/hooks/services/useService";
import { ServiceInfoCard } from "@/features/services/ServiceInfoCard";
import { ServiceSlotList } from "@/features/slots/ServiceSlotsList";

export default function ServiceDetails() {
  const { id } = useParams();
  const { data: service, isLoading } = useService(id);

  if (isLoading || !service || !id) {
    return <Skeleton className="h-[300px] w-full rounded-xl" />;
  }

  return (
    <div className="mx-auto max-w-4xl space-y-6 p-4">
      <ServiceInfoCard service={service} />
      <div>
        <h2 className="mb-2 text-xl font-semibold">Available Slots</h2>
        <ServiceSlotList serviceId={id} isBooked={false} pageSize={9} />
      </div>
    </div>
  );
}
