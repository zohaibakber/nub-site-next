"use client";

import { buttonVariants } from "./ui/button";
import { ThemeToggle } from "./theme-switcher";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/links";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { MobileNav } from "./mobile-nav";

export function Navbar() {
  const path = usePathname();
  return (
    <header className="sticky top-0 lg:relative">
      <nav className="flex items-center justify-between p-4 lg:container lg:p-3">
        <a href="/" className="z-50 text-xl font-semibold text-primary">
          DispatchNub
        </a>
        <div className="hidden items-center justify-center gap-4 py-4 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.name}
              prefetch={false}
              className={cn(
                "transition-colors duration-200 ease-in-out hover:text-primary",
                path === link.link ? "text-primary" : "text-primary/70",
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <MobileNav />
        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <a
            href="https://app.dispatchnub.com"
            className={cn(buttonVariants())}
          >
            Login
          </a>
        </div>
      </nav>
    </header>
  );
}
