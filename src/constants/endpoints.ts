export const ENDPOINTS = {
  auth: {
    login: "/auth/login",
    register: "/auth/register",
    logout: "/auth/logout",
  },
  user: {
    getMe: "/users/me",
  },
  services: {
    getServices: "/services",
    myServices: "/services/my",
    createService: "/services",
    updateService: (serviceId: string) => `/services/${serviceId}`,
  },
  bookings: {
    create: "/bookings",
    myBookings: "/bookings/my",
    cancel: (bookingId: string) => `/bookings/${bookingId}/cancel`,
  },
  slots: {
    create: "/slots",
  },
};
