import { CardFooter } from "@/components/ui/card";
import type { Slot } from "@/types/slot.types";
import { EditSlotModal } from "./EditSlotModal";
import { DeleteSlotButton } from "./DeleteSlotButton";

interface Props {
  slot: Slot;
}

export function ProviderSlotControls({ slot }: Props) {
  return (
    <CardFooter className="flex justify-end gap-2">
      <EditSlotModal slot={slot} />
      <DeleteSlotButton slotId={slot.id} serviceId={slot.service.id} />
    </CardFooter>
  );
}
