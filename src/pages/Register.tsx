import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import RegisterForm from "@/features/auth/RegisterForm";

export default function Register() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-semibold">
            Create an Account
          </CardTitle>
        </CardHeader>
        <RegisterForm />
      </Card>
    </div>
  );
}
