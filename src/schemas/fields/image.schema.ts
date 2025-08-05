import { z } from "zod";
import {
  MAX_IMAGE_SIZE,
  ALLOWED_EXTENSIONS,
  ALLOWED_MIME_TYPES,
} from "@/constants/image";

export const imageSchema = z
  .custom<File | undefined>((file) => !file || file instanceof File, {
    message: "Invalid file",
  })
  .refine(
    (file) => {
      if (!file) return true;
      const mimetype = file.type.toLowerCase();
      const filename = file.name.toLowerCase();
      return (
        ALLOWED_MIME_TYPES.includes(mimetype) ||
        ALLOWED_EXTENSIONS.some((ext) => filename.endsWith(ext))
      );
    },
    {
      message: "Unsupported image type. Allowed: JPG, JPEG, PNG, WEBP",
    },
  )
  .refine((file) => !file || file.size <= MAX_IMAGE_SIZE, {
    message: "Image must be less than 3MB",
  });
