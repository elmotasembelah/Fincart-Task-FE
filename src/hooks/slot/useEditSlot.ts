import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSlot } from "@/api/slot.api";
import { toast } from "sonner";
import type { EditSlotSchema } from "@/schemas/slots.schema";

export const useEditSlot = (slotId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: EditSlotSchema) => updateSlot(slotId, data),
    onSuccess: () => {
      toast.success("Slot updated successfully");
      queryClient.invalidateQueries({ queryKey: ["slots"] });
    },
    onError: () => {
      toast.error("Failed to update slot");
    },
  });
};
