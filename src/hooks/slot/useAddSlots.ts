import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createSlot } from "@/api/slot.api";
import type { CreateSlotSchema } from "@/schemas/slots.schema";
import { toast } from "sonner";

export const useAddSlot = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateSlotSchema) => createSlot(data),
    onSuccess: () => {
      toast.success("Slot created successfully");
      queryClient.invalidateQueries({
        queryKey: ["slots"],
      });
    },

    onError: () => {
      toast.error("Failed to create slot");
    },
  });
};
