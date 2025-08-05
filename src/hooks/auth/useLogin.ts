import { useMutation } from "@tanstack/react-query";
import { login } from "@/api/auth.api";
import { useAppDispatch } from "@/store/hooks";
import { setUser } from "@/store/slices/authSlice";
import { toast } from "sonner";
import type { AxiosError } from "axios";
import type { LoginPayload } from "@/types/auth.types";

interface LoginMutationPayload extends LoginPayload {
  redirectTo?: string;
}

export const useLogin = (onSuccessNavigate: (path: string) => void) => {
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: (variables: LoginMutationPayload) =>
      login({
        email: variables.email,
        password: variables.password,
      }),
    onSuccess: (data, variables) => {
      dispatch(setUser(data.user));
      toast.success("Login successful");
      onSuccessNavigate(variables.redirectTo || "/");
    },
    onError: (error: AxiosError<{ message: string }>) => {
      toast.error(error.response?.data?.message || "Login failed");
    },
  });
};
