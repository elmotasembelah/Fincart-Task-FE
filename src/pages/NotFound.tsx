import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-3xl font-bold">404 - Page Not Found</h1>
        <p>The page you’re looking for does not exist.</p>
        <Button asChild className="mt-4">
          <Link to="/">Go back to Home</Link>
        </Button>
      </div>
    </main>
  );
};

export default NotFound;
