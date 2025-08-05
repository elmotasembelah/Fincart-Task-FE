import type { PaginatedResponse } from "@/types/pagination.types";
import type { Slot } from "@/types/slot.types";
import api from "./apiClient";
import type { CreateSlotSchema, EditSlotSchema } from "@/schemas/slots.schema";
import { ENDPOINTS } from "@/constants/endpoints";

export const getSlots = async (
  page = 1,
  pageSize = 10,
  serviceId?: string,
  isBooked?: boolean,
): Promise<PaginatedResponse<Slot>> => {
  const res = await api.get("/slots", {
    params: {
      page,
      pageSize,
      ...(serviceId && { service: serviceId }),
      ...(typeof isBooked === "boolean" && { isBooked }),
    },
  });

  return res.data;
};

export const createSlot = async (data: CreateSlotSchema) => {
  const res = await api.post(ENDPOINTS.slots.create, data);
  return res.data.data;
};

export const updateSlot = async (slotId: string, data: EditSlotSchema) => {
  const res = await api.patch(`/slots/${slotId}`, data);
  return res.data.data;
};

export const deleteSlot = async (slotId: string) => {
  const res = await api.delete(`/slots/${slotId}`);
  return res.data;
};
