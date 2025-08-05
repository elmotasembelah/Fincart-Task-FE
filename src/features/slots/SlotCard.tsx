import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useAppSelector } from "@/store/hooks";
import type { Slot } from "@/types/slot.types";
import dayjs from "dayjs";
import { ProviderSlotControls } from "./ProviderSlotControls";

type Props = {
  slot: Slot;
};

export const SlotCard = ({ slot }: Props) => {
  const user = useAppSelector((state) => state.auth.user);
  const isProvider = user?.role === "provider";

  const date = dayjs(slot.startTime).format("MMMM D, YYYY");
  const start = dayjs(slot.startTime).format("HH:mm");
  const end = dayjs(slot.endTime).format("HH:mm");

  return (
    <Card className="shadow-sm">
      <CardContent className="space-y-2 py-4">
        <div className="flex items-center justify-between">
          <div className="text-lg font-medium">{date}</div>
          {slot.isBooked ? (
            <Badge variant="destructive">Booked</Badge>
          ) : (
            <Badge variant="default">Available</Badge>
          )}
        </div>

        <div className="text-sm">
          {start} - {end}
        </div>

        <div className="text-muted-foreground text-sm">
          Service: {slot.service.title} — EGP{slot.service.price}
        </div>
      </CardContent>

      {isProvider && (
        <CardFooter className="flex justify-end">
          <ProviderSlotControls slot={slot} />
        </CardFooter>
      )}
    </Card>
  );
};
