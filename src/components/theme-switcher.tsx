"use client";

import * as React from "react";
import { CircleDashed, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();
  React.useLayoutEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant={"ghost"} size={"sm"}>
        <CircleDashed className="h-4 w-4 animate-spin" />
      </Button>
    );
  }

  return (
    <Button
      onClick={() => {
        setTheme(() => (theme === "dark" ? "light" : "dark"));
      }}
      variant={"ghost"}
      size={"sm"}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </Button>
  );
}
