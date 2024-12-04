"use client";

import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { ThemeToggle } from "./theme-toggle";
import { Separator } from "./ui/separator";
import { DashboardButton } from "./dashboard-button";

export function BottomMenu({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex overflow-hidden rounded-md border bg-background shadow-sm transition-shadow hover:shadow-md",
        className,
      )}
      {...props}
    >
      <div className="flex gap-1">
        <ThemeToggle />
        <Separator orientation="vertical" />
        <DashboardButton />
      </div>
    </div>
  );
}
