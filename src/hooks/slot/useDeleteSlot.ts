// src/hooks/slot/useDeleteSlot.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteSlot } from "@/api/slot.api";
import { toast } from "sonner";

export const useDeleteSlot = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteSlot,
    onSuccess: () => {
      toast.success("Slot deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["slots"] });
    },
    onError: () => {
      toast.error("Failed to delete slot");
    },
  });
};
