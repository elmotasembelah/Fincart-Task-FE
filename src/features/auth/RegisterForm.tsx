import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { CardContent } from "@/components/ui/card";
import { useRegister } from "@/hooks/auth/useRegister";
import { registerSchema, type RegisterFormValues } from "@/schemas/auth.schema";
import { RoleSelect } from "@/components/ui/RoleSelect";
import { Role } from "@/types/user.types";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      role: Role.USER,
    },
  });

  const { mutate: registerUser, isPending } = useRegister();

  const onSubmit = (data: RegisterFormValues) => {
    registerUser(data);
  };

  return (
    <CardContent>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input id="fullName" {...register("fullName")} />
          {errors.fullName && (
            <p className="text-sm text-red-500">{errors.fullName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" {...register("email")} />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" {...register("password")} />
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>

        <RoleSelect
          value={watch("role")}
          onChange={(value) => setValue("role", value as Role)}
          error={errors.role?.message}
        />

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isPending ? "Creating account..." : "Register"}
        </Button>
      </form>
    </CardContent>
  );
}
