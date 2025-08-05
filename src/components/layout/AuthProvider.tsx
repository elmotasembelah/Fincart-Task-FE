import { useMe } from "@/hooks/user/useMe";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  useMe();
  return <>{children}</>;
};
