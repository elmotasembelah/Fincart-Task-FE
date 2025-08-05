import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AddSlotForm } from "./AddSlotForm";

export function AddSlotModal({ serviceId }: { serviceId: string }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default">Add Slot</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Slot</DialogTitle>
        </DialogHeader>
        <AddSlotForm serviceId={serviceId} onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
