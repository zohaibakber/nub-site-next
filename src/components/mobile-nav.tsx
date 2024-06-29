import { useState } from "react";
import { Button } from "./ui/button";
import { navLinks } from "@/lib/links";
import { ThemeToggle } from "./theme-switcher";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export const MobileNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:hidden">
      <Button
        onClick={() => setOpen(!open)}
        variant={"ghost"}
        size={"sm"}
        aria-label="Toggle navigation"
      >
        {open ? <X className="z-50 h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>
      {open && (
        <div className="fixed inset-0 z-40 flex flex-col items-start justify-start gap-1.5 bg-background px-5 py-20">
          {navLinks.map((link, index) => (
            <Link
              prefetch={false}
              key={index}
              href={link.link}
              className="text-2xl text-primary"
            >
              {link.name}
            </Link>
          ))}
          <div className="space-x-4 pt-6">
            <Button>
              <a href="https://app.dispatchnub.com">Login</a>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      )}
    </div>
  );
};
