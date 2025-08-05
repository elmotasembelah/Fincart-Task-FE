import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { Spinner } from "@/components/ui/Spinner";

export default function PrivateRoute() {
  const { user, isAuthLoading } = useSelector((state: RootState) => state.auth);

  if (isAuthLoading) {
    return (
      <div className="flex justify-center py-12">
        <Spinner />
      </div>
    );
  }

  return user ? <Outlet /> : <Navigate to="/login" replace />;
}
