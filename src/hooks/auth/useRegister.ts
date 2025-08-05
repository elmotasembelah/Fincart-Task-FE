import { useMutation } from "@tanstack/react-query";
import { register } from "@/api/auth.api";
import { useAppDispatch } from "@/store/hooks";
import { setUser } from "@/store/slices/authSlice";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import type { AxiosError } from "axios";

export const useRegister = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      dispatch(setUser(data.user));
      toast.success("Account created successfully");
      navigate("/", { replace: true });
    },
    onError: (error: AxiosError<{ message: string }>) => {
      toast.error(error.response?.data?.message || "Registration failed");
    },
  });
};
