import type { Provider } from "./user.types";

export interface Slot {
  id: string;
  startTime: string;
  endTime: string;
  createdAt: string;
  updatedAt: string;
  service: {
    id: string;
    title: string;
    price: number;
  };
  provider: Provider;
  isBooked: boolean;
}
