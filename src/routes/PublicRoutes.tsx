import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";

export default function PublicRoute() {
  const user = useSelector((state: RootState) => state.auth.user);
  const location = useLocation();

  const redirectTo = new URLSearchParams(location.search).get("redirectTo");

  if (user) {
    return <Navigate to={redirectTo || "/"} replace />;
  }

  return <Outlet />;
}
