import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import AuthNav from "./authNav/AuthNav";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <Menu className="h-6 w-6" />
      </SheetTrigger>

      <SheetContent side="right" className="w-64 space-y-4 px-6 py-8 md:hidden">
        <SheetHeader>
          <SheetTitle className="text-center">Menu</SheetTitle>
        </SheetHeader>

        <Link
          to="/services"
          className="rounded-md px-3 py-2 text-center text-sm font-medium text-gray-600 transition hover:text-black"
        >
          Services
        </Link>

        <AuthNav />
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
