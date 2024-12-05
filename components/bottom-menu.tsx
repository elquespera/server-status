import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { DashboardButton } from "./dashboard-button";
import { ThemeToggle } from "./theme-toggle";
import { Separator } from "./ui/separator";

export function BottomMenu({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex overflow-hidden rounded-md border bg-background shadow-sm transition-shadow hover:shadow-md",
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-1">
        <ThemeToggle />
        <Separator orientation="vertical" className="h-7" />
        <DashboardButton />
      </div>
    </div>
  );
}
