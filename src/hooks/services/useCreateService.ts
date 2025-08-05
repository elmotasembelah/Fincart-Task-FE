import { useMutation } from "@tanstack/react-query";
import { createService } from "@/api/service.api";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const useCreateService = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (formData: FormData) => {
      return createService(formData);
    },
    onSuccess: () => {
      toast.success("Service created successfully");
      navigate("/provider/services");
    },
    onError: () => {
      toast.error("Failed to create service");
    },
  });
};
