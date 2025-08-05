import { useMutation } from "@tanstack/react-query";
import { updateService } from "@/api/service.api";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export const useEditService = (serviceId: string) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: FormData) => updateService(serviceId, data),
    onSuccess: () => {
      toast.success("Service updated successfully");
      navigate("/provider/services");
    },
    onError: () => {
      toast.error("Failed to update service");
    },
  });
};
