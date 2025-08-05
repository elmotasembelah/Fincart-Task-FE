import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import type { Slot } from "@/types/slot.types";
import { EditSlotForm } from "./EditSlotForm";
import { useState } from "react";

interface Props {
  slot: Slot;
}

export function EditSlotModal({ slot }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Pencil className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Slot</DialogTitle>
        </DialogHeader>
        <EditSlotForm slot={slot} onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
