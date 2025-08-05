import { Button } from "@/components/ui/button";
import { useLogout } from "@/hooks/auth/useLogout";

const LogoutButton = () => {
  const { logout, isPending } = useLogout();

  return (
    <Button variant="ghost" onClick={() => logout()} disabled={isPending}>
      {isPending ? "Logging out..." : "Logout"}
    </Button>
  );
};

export default LogoutButton;
