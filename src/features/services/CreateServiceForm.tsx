import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useRef, useState } from "react";
import { useCreateService } from "@/hooks/services/useCreateService";
import { ServiceCategory } from "@/types/service.types";
import { Label } from "@/components/ui/label";
import {
  createServiceSchema,
  type CreateServiceSchema,
} from "@/schemas/services.schema";

export default function CreateServiceForm() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const { mutate, isPending } = useCreateService();
  const objectUrlRef = useRef<string | null>(null);

  useEffect(() => {
    if (file) {
      if (objectUrlRef.current) {
        URL.revokeObjectURL(objectUrlRef.current);
      }

      const url = URL.createObjectURL(file);
      objectUrlRef.current = url;
      setPreviewUrl(url);
    }

    return () => {
      if (objectUrlRef.current) {
        URL.revokeObjectURL(objectUrlRef.current);
      }
    };
  }, [file]);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<CreateServiceSchema>({
    resolver: zodResolver(createServiceSchema),
  });

  const selectedCategory = watch("category");

  const onSubmit = (data: CreateServiceSchema) => {
    const formData = new FormData();
    formData.append("title", data.title);
    if (data.description) formData.append("description", data.description);
    formData.append("price", String(data.price));
    formData.append("category", data.category);
    if (file) formData.append("image", file);

    mutate(formData);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
      encType="multipart/form-data"
    >
      <div>
        <Input placeholder="Title" {...register("title")} />
        {errors.title && (
          <p className="text-sm text-red-500">{errors.title.message}</p>
        )}
      </div>

      <div>
        <Textarea
          placeholder="Description (optional)"
          {...register("description")}
        />
      </div>

      <div>
        <Input
          type="number"
          placeholder="Price"
          {...register("price", { valueAsNumber: true })}
        />
        {errors.price && (
          <p className="text-sm text-red-500">{errors.price.message}</p>
        )}
      </div>

      <div>
        <Label className="mb-1 block text-sm font-medium">Category</Label>
        <Select
          onValueChange={(value) =>
            setValue("category", value as ServiceCategory)
          }
          value={selectedCategory}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            {Object.values(ServiceCategory).map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.category && (
          <p className="mt-1 text-sm text-red-500">{errors.category.message}</p>
        )}
      </div>

      <div>
        <Label className="mb-1 block text-sm font-medium">Image</Label>
        <Input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const selected = e.target.files?.[0];
            if (selected) setFile(selected);
          }}
        />
        {file && (
          <div className="mt-2 aspect-[4/3] w-full max-w-xs overflow-hidden rounded-md">
            <img
              src={previewUrl ?? ""}
              alt="Preview"
              className="h-full w-full object-cover"
            />
          </div>
        )}
      </div>

      <Button type="submit" disabled={isPending}>
        Create Service
      </Button>
    </form>
  );
}
