import { ENDPOINTS } from "@/constants/endpoints";
import api from "./apiClient";
import type { User } from "@/types/user.types";

export const getMe = async (): Promise<{ user: User }> => {
  const res = await api.get(ENDPOINTS.user.getMe);
  return res.data.data;
};
