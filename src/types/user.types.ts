export interface User {
  id: string;
  email: string;
  fullName: string;
  role: Role;
}

export interface Provider {
  id: string;
  fullName: string;
  email: string;
  role: Role.PROVIDER;
}

export enum Role {
  USER = "user",
  PROVIDER = "provider",
}
