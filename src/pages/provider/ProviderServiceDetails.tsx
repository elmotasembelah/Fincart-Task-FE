import { useParams, useNavigate } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { useService } from "@/hooks/services/useService";
import { ServiceInfoCard } from "@/features/services/ServiceInfoCard";
import { ServiceSlotList } from "@/features/slots/ServiceSlotsList";
import { AddSlotModal } from "@/features/slots/AddSlotModal";
import { DeleteServiceButton } from "@/features/services/DeleteServiceButton";

export default function ProviderServiceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: service, isLoading } = useService(id);

  if (isLoading || !service || !id) {
    return <Skeleton className="h-[300px] w-full rounded-xl" />;
  }

  const handleEditClick = () => {
    navigate(`/provider/services/${id}/edit`);
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Service Details</h1>
        <div className="flex gap-2">
          <Button onClick={handleEditClick}>Edit Service</Button>
          <DeleteServiceButton serviceId={id} />
        </div>
      </div>

      <ServiceInfoCard service={service} />

      <div className="flex items-center justify-between">
        <h2 className="mb-2 text-xl font-semibold">Manage Slots</h2>
        <AddSlotModal serviceId={id} />
      </div>

      <div>
        <ServiceSlotList serviceId={id} pageSize={9} />
      </div>
    </div>
  );
}
