import api from "./apiClient";
import { ENDPOINTS } from "@/constants/endpoints";
import type {
  AuthResponse,
  LoginPayload,
  RegisterPayload,
} from "@/types/auth.types";

export const login = async (payload: LoginPayload): Promise<AuthResponse> => {
  const res = await api.post(ENDPOINTS.auth.login, payload);

  return res.data.data;
};

export const register = async (
  payload: RegisterPayload,
): Promise<AuthResponse> => {
  const res = await api.post(ENDPOINTS.auth.register, payload);
  return res.data.data;
};

export const logout = async (): Promise<void> => {
  await api.post(ENDPOINTS.auth.logout);
};
