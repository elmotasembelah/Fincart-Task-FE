import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { editSlotSchema, type EditSlotSchema } from "@/schemas/slots.schema";
import type { Slot } from "@/types/slot.types";
import { useEditSlot } from "@/hooks/slot/useEditSlot";

dayjs.extend(utc);

interface Props {
  slot: Slot;
  onSuccess?: () => void;
}

export function EditSlotForm({ slot, onSuccess }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditSlotSchema>({
    defaultValues: {
      startTime: dayjs(slot.startTime).format("YYYY-MM-DDTHH:mm"),
      endTime: dayjs(slot.endTime).format("YYYY-MM-DDTHH:mm"),
    },
    resolver: zodResolver(editSlotSchema),
  });

  const { mutate, isPending } = useEditSlot(slot.id);

  const onSubmit = (data: EditSlotSchema) => {
    mutate(
      {
        startTime: dayjs(data.startTime).utc().toISOString(),
        endTime: dayjs(data.endTime).utc().toISOString(),
      },
      {
        onSuccess: () => {
          onSuccess?.();
        },
      },
    );
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
        {isPending ? "Updating..." : "Update Slot"}
      </Button>
    </form>
  );
}
