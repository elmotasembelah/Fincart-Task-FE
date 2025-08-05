import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { ServiceCategory } from "@/types/service.types";

type Props = {
  title: string;
  setTitle: (value: string) => void;
  category?: string;
  setCategory: (value?: string) => void;
};

export default function ServiceFilters({
  title,
  setTitle,
  category,
  setCategory,
}: Props) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <Input
        placeholder="Search services..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full sm:max-w-sm"
      />

      <Select value={category} onValueChange={(val) => setCategory(val)}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Filter by category" />
        </SelectTrigger>
        <SelectContent>
          {Object.values(ServiceCategory).map((cat) => (
            <SelectItem key={cat} value={cat}>
              {cat}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
