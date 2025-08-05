import { ENDPOINTS } from "@/constants/endpoints";
import type { PaginatedResponse } from "@/types/pagination.types";
import type { Service } from "@/types/service.types";
import api from "./apiClient";

export const getAllServices = async (
  page = 1,
  pageSize = 10,
  title?: string,
  category?: string,
): Promise<PaginatedResponse<Service>> => {
  const res = await api.get(ENDPOINTS.services.getServices, {
    params: {
      page,
      pageSize,
      ...(title && { title }),
      ...(category && { category }),
    },
  });

  return res.data;
};

export const getServiceById = async (id: string): Promise<Service> => {
  const res = await api.get(`${ENDPOINTS.services.getServices}/${id}`);
  return res.data.data;
};

export const getMyServices = async (
  page: number,
  pageSize: number,
  title?: string,
  category?: string,
) => {
  const params = {
    page,
    pageSize,
    ...(title && { title }),
    ...(category && { category }),
  };

  const res = await api.get(ENDPOINTS.services.myServices, { params });
  return res.data;
};

export const createService = async (formData: FormData) => {
  const response = await api.post(ENDPOINTS.services.createService, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data.data;
};

export const updateService = async (serviceId: string, formData: FormData) => {
  const res = await api.patch(
    ENDPOINTS.services.updateService(serviceId),
    formData,
  );
  return res.data.data;
};
