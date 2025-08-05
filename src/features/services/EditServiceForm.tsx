import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ServiceCategory } from "@/types/service.types";
import {
  editServiceSchema,
  type EditServiceSchema,
} from "@/schemas/services.schema";
import { useService } from "@/hooks/services/useService";
import { useEditService } from "@/hooks/services/useEditService";

interface EditServiceFormProps {
  serviceId: string;
}

export default function EditServiceForm({ serviceId }: EditServiceFormProps) {
  const { data: service, isLoading } = useService(serviceId);
  const { mutate: updateService, isPending } = useEditService(serviceId);
  const [file, setFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<EditServiceSchema>({
    resolver: zodResolver(editServiceSchema),
  });

  useEffect(() => {
    if (service) {
      setValue("title", service.title);
      setValue("description", service.description || "");
      setValue("price", service.price);
      setValue("category", service.category as ServiceCategory);
    }
  }, [service, setValue]);

  const onSubmit = async (data: EditServiceSchema) => {
    const formData = new FormData();
    formData.append("title", data.title);
    if (data.description) formData.append("description", data.description);
    formData.append("price", String(data.price));
    formData.append("category", data.category);
    if (file) formData.append("image", file);

    updateService(formData);
  };

  if (isLoading) {
    return (
      <p className="text-muted-foreground py-4 text-center">
        Loading service...
      </p>
    );
  }

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
          value={watch("category")}
          onValueChange={(value) =>
            setValue("category", value as ServiceCategory)
          }
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {Object.values(ServiceCategory).map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.category && (
          <p className="text-sm text-red-500">{errors.category.message}</p>
        )}
      </div>

      <div>
        <Label className="mb-1 block text-sm font-medium">Image</Label>
        <Input
          type="file"
          accept="image/*"
          onChange={(e) => {
            if (e.target.files?.[0]) {
              setFile(e.target.files[0]);
            }
          }}
        />
        {(file || service?.imageUrl) && (
          <div className="mt-2 aspect-[4/3] w-full max-w-xs overflow-hidden rounded-md">
            <img
              src={file ? URL.createObjectURL(file) : service?.imageUrl}
              alt="Selected or existing"
              className="h-full w-full object-cover"
            />
          </div>
        )}
      </div>

      <Button type="submit" disabled={isPending}>
        Update Service
      </Button>
    </form>
  );
}
