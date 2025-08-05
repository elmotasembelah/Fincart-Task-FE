import { Role } from "@/types/user.types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface RoleSelectProps {
  value?: Role;
  onChange: (value: Role) => void;
  error?: string;
}

export const RoleSelect = ({ value, onChange, error }: RoleSelectProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="role">Role</Label>
      <Select value={value} onValueChange={(val) => onChange(val as Role)}>
        <SelectTrigger className="h-10 w-full px-3 text-sm">
          <SelectValue placeholder="Select a role" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={Role.USER}>User</SelectItem>
          <SelectItem value={Role.PROVIDER}>Provider</SelectItem>
        </SelectContent>
      </Select>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};
