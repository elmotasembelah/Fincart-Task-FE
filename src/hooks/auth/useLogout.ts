import { useMutation } from "@tanstack/react-query";
import { logout as logoutApi } from "@/api/auth.api";
import { useAppDispatch } from "@/store/hooks";
import { logout as logoutReducer } from "@/store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const useLogout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      dispatch(logoutReducer());
      toast.success("Logged out successfully");
      navigate("/login");
    },
    onError: () => {
      toast.error("Logout failed");
    },
  });

  return { logout, isPending };
};
