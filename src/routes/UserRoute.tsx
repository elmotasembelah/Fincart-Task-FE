import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { Spinner } from "@/components/ui/Spinner";

export default function UserRoute() {
  const { user, isAuthLoading } = useSelector((state: RootState) => state.auth);

  if (isAuthLoading) {
    return (
      <div className="flex justify-center py-12">
        <Spinner />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role !== "user") {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
