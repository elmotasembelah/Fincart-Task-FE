import { Button } from "@/components/ui/button";
import { TrashIcon } from "lucide-react";
import { useDeleteService } from "@/hooks/services/useDeleteService";

interface Props {
  serviceId: string;
}

export const DeleteServiceButton = ({ serviceId }: Props) => {
  const { mutate: deleteService, isPending } = useDeleteService();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      deleteService(serviceId);
    }
  };

  return (
    <Button onClick={handleDelete} disabled={isPending} variant="destructive">
      {isPending ? "Deleting..." : <TrashIcon className="h-4 w-4" />}
    </Button>
  );
};
