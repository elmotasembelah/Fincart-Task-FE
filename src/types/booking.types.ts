import type { Service } from "./service.types";
import type { Slot } from "./slot.types";
import type { User } from "./user.types";

export interface Booking {
  id: string;
  user: Pick<User, "id" | "email">;
  provider: Pick<User, "id" | "email">;
  service: Pick<Service, "id" | "title" | "category">;
  slot: Pick<Slot, "id" | "startTime" | "endTime" | "isBooked">;
  status: BookingStatus;
  createdAt: string;
  updatedAt: string;
}

export enum BookingStatus {
  PENDING = "pending",
  CANCELLED = "cancelled",
  COMPLETED = "completed",
}
