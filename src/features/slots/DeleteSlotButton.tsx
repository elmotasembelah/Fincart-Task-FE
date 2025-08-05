import { Button } from "@/components/ui/button";
import { useDeleteSlot } from "@/hooks/slot/useDeleteSlot";
import { TrashIcon } from "lucide-react";

interface Props {
  slotId: string;
  serviceId: string;
}

export const DeleteSlotButton = ({ slotId }: Props) => {
  const { mutate: deleteSlot, isPending } = useDeleteSlot();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this slot?")) {
      deleteSlot(slotId);
    }
  };

  return (
    <Button
      onClick={handleDelete}
      disabled={isPending}
      variant="destructive"
      size="sm"
    >
      {isPending ? "Deleting..." : <TrashIcon className="h-4 w-4" />}
    </Button>
  );
};
