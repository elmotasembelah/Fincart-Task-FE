import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteService } from "@/api/service.api";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export const useDeleteService = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: deleteService,
    onSuccess: () => {
      toast.success("Service deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["my-services"] });
      navigate("/provider/services");
    },
    onError: () => {
      toast.error("Failed to delete service");
    },
  });
};
