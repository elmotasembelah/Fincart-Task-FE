import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/store/hooks";
import LogoutButton from "../logoutButton/LogoutButton";
import { Spinner } from "@/components/ui/Spinner";

const AuthNav = () => {
  const { user, isAuthLoading } = useAppSelector((state) => state.auth);

  if (isAuthLoading) {
    return (
      <div className="px-3 py-2">
        <Spinner />
      </div>
    );
  }

  if (!user) {
    return (
      <>
        <Button asChild variant="outline">
          <Link to="/login">Login</Link>
        </Button>
        <Button asChild>
          <Link to="/register">Register</Link>
        </Button>
      </>
    );
  }

  if (user.role === "user") {
    return (
      <>
        <Button asChild variant="ghost">
          <Link to="/bookings">My Bookings</Link>
        </Button>
        <LogoutButton />
      </>
    );
  }

  if (user.role === "provider") {
    return (
      <>
        <Button asChild variant="ghost">
          <Link to="/provider/bookings">Client Bookings</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link to="/provider/services">My Services</Link>
        </Button>
        <LogoutButton />
      </>
    );
  }

  return null;
};

export default AuthNav;
