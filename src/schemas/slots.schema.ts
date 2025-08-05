import { z } from "zod";

export const createSlotSchema = z
  .object({
    startTime: z
      .string({ required_error: "Start time is required" })
      .refine((val) => !isNaN(Date.parse(val)), {
        message: "Start time must be a valid ISO date string",
      })
      .refine((val) => Date.parse(val) > Date.now(), {
        message: "Start time must be in the future",
      }),

    endTime: z
      .string({ required_error: "End time is required" })
      .refine((val) => !isNaN(Date.parse(val)), {
        message: "End time must be a valid ISO date string",
      })
      .refine((val) => Date.parse(val) > Date.now(), {
        message: "End time must be in the future",
      }),
  })
  .refine((data) => Date.parse(data.endTime) > Date.parse(data.startTime), {
    message: "End time must be after start time",
    path: ["endTime"],
  });

export const editSlotSchema = z
  .object({
    startTime: z
      .string({ required_error: "Start time is required" })
      .refine((val) => !isNaN(Date.parse(val)), {
        message: "Start time must be a valid ISO date string",
      })
      .refine((val) => Date.parse(val) > Date.now(), {
        message: "Start time must be in the future",
      }),

    endTime: z
      .string({ required_error: "End time is required" })
      .refine((val) => !isNaN(Date.parse(val)), {
        message: "End time must be a valid ISO date string",
      })
      .refine((val) => Date.parse(val) > Date.now(), {
        message: "End time must be in the future",
      }),
  })
  .refine((data) => Date.parse(data.endTime) > Date.parse(data.startTime), {
    message: "End time must be after start time",
    path: ["endTime"],
  });

export type CreateSlotSchema = z.infer<typeof createSlotSchema>;
export type EditSlotSchema = z.infer<typeof editSlotSchema>;
