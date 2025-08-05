import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import LoginForm from "@/features/auth/LoginForm";

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-semibold">
            Welcome Back
          </CardTitle>
        </CardHeader>
        <LoginForm />
      </Card>
    </div>
  );
}
