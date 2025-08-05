import { ServiceCategory } from "@/types/service.types";
import { z } from "zod";
import { imageSchema } from "./fields/image.schema";

export const createServiceSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  price: z
    .number({ required_error: "Price is required" })
    .positive("Price must be a positive number"),
  category: z.nativeEnum(ServiceCategory, {
    required_error: "Category is required",
    invalid_type_error: "Invalid category value",
  }),
  image: imageSchema.optional(),
});

export const editServiceSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  price: z
    .number({ required_error: "Price is required" })
    .positive("Price must be a positive number"),
  category: z.nativeEnum(ServiceCategory, {
    required_error: "Category is required",
    invalid_type_error: "Invalid category value",
  }),
  image: imageSchema.optional(),
});

export type CreateServiceSchema = z.infer<typeof createServiceSchema>;
export type EditServiceSchema = z.infer<typeof editServiceSchema>;
