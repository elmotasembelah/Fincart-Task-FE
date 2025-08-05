import { useAppSelector } from "@/store/hooks";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4">
      <div className="max-w-3xl space-y-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Online Booking System for Consultations
        </h1>
        <p className="text-muted-foreground text-lg sm:text-xl">
          Browse consultation services, pick a time slot, and book with ease.
          Whether you're a user looking for help or a provider offering support,
          this platform makes it simple.
        </p>

        <div className="text-md text-gray-700">
          {user ? (
            <p>
              You are logged in as <strong>{user.fullName}</strong> (
              <span className="capitalize">{user.role}</span>)
            </p>
          ) : (
            <p>Please login or register to get started.</p>
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          {!user && (
            <>
              <Button asChild>
                <Link to="/login">Login</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/register">Register</Link>
              </Button>
            </>
          )}

          <Button variant="secondary" asChild>
            <Link to="/services">Browse Services</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
