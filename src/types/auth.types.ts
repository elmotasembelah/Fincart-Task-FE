import type { User } from "./user.types";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User;
}

export interface RegisterPayload {
  fullName: string;
  email: string;
  password: string;
}
