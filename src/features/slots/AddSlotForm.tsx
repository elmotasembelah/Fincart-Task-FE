import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  createSlotSchema,
  type CreateSlotSchema,
} from "@/schemas/slots.schema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import dayjs from "dayjs";
import { useAddSlot } from "@/hooks/slot/useAddSlots";

interface AddSlotFormProps {
  serviceId: string;
  onSuccess?: () => void;
}

export function AddSlotForm({ serviceId, onSuccess }: AddSlotFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateSlotSchema>({
    resolver: zodResolver(createSlotSchema),
  });

  const { mutate, isPending } = useAddSlot();

  const onSubmit = (data: CreateSlotSchema) => {
    const payload = {
      ...data,
      service: serviceId,
      startTime: dayjs(data.startTime).toISOString(),
      endTime: dayjs(data.endTime).toISOString(),
    };

    mutate(payload, {
      onSuccess: () => onSuccess?.(),
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Start Time</label>
        <Input type="datetime-local" {...register("startTime")} />
        {errors.startTime && (
          <p className="text-sm text-red-500">{errors.startTime.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium">End Time</label>
        <Input type="datetime-local" {...register("endTime")} />
        {errors.endTime && (
          <p className="text-sm text-red-500">{errors.endTime.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isPending}>
        {isPending ? "Creating..." : "Create Slot"}
      </Button>
    </form>
  );
}
