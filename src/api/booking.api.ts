import api from "./apiClient";
import { ENDPOINTS } from "@/constants/endpoints";
import type { Booking } from "@/types/booking.types";
import type { PaginatedResponse } from "@/types/pagination.types";

export interface CreateBookingPayload {
  service: string;
  slot: string;
}

export const createBooking = async (payload: CreateBookingPayload) => {
  const res = await api.post(ENDPOINTS.bookings.create, payload);
  return res.data;
};

export const getMyBookings = async (
  page = 1,
  pageSize = 10,
): Promise<PaginatedResponse<Booking>> => {
  const res = await api.get(ENDPOINTS.bookings.myBookings, {
    params: { page, pageSize },
  });

  return res.data;
};

export const cancelBooking = async (bookingId: string) => {
  const res = await api.patch(ENDPOINTS.bookings.cancel(bookingId));
  return res.data.data;
};
