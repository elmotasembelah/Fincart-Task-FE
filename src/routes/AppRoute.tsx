import { Routes, Route } from "react-router-dom";
import Login from "@/pages/Login";
import Home from "@/pages/Home";
import Register from "@/pages/Register";
import NotFound from "@/pages/NotFound";
import PublicRoute from "./PublicRoutes";
import Services from "@/pages/services/Services";
import ServiceDetails from "@/pages/services/ServiceDetails";
import MyBookings from "@/pages/bookings/MyBookings";
import ProviderBookings from "@/pages/bookings/ProviderBookings";
import ProviderRoute from "./ProviderRoute";
import UserRoute from "./UserRoute";
import ProviderServices from "@/pages/provider/ProviderServices";
import NewService from "@/pages/provider/NewService";
import EditService from "@/pages/provider/EditService";
import ProviderServiceDetails from "@/pages/provider/ProviderServiceDetails";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route element={<PublicRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route path="/services" element={<Services />} />
      <Route path="/services/:id" element={<ServiceDetails />} />

      <Route element={<UserRoute />}>
        <Route path="/bookings" element={<MyBookings />} />
      </Route>

      <Route element={<ProviderRoute />}>
        <Route path="/provider/services" element={<ProviderServices />} />
        <Route path="/provider/services/new" element={<NewService />} />
        <Route
          path="/provider/services/:id"
          element={<ProviderServiceDetails />}
        />
        <Route path="/provider/services/:id/edit" element={<EditService />} />
        <Route path="/provider/bookings" element={<ProviderBookings />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
