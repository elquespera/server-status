"use client";

import { cn } from "@/lib/utils";
import { DesktopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { PropsWithClassName } from "@/types/types";

export function ThemeToggle({ className }: PropsWithClassName) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <ToggleGroup
      type="single"
      className={cn(
        "gap-0 overflow-hidden rounded-md border bg-background shadow-sm",
        className,
      )}
      value={theme}
      onValueChange={setTheme}
    >
      <ToggleGroupItem
        value="dark"
        aria-label="Dark theme"
        className="rounded-none"
      >
        <MoonIcon />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="system"
        aria-label="System theme"
        className="rounded-none"
      >
        <DesktopIcon />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="light"
        aria-label="Light theme"
        className="rounded-none"
      >
        <SunIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
