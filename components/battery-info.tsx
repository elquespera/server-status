"use client";
import { LightningBoltIcon } from "@radix-ui/react-icons";
import { ComponentProps } from "react";
import { useDeviceInfo } from "./contexts/device-info/device-info-context";
import { FilledBar } from "./filled-bar";
import { Heading } from "./heading";
import { cn } from "@/lib/utils";

export function BatteryInfo({ ...props }: ComponentProps<"div">) {
  const { battery } = useDeviceInfo();

  return (
    <div {...props}>
      <div className="mb-2 grid grid-cols-2 items-baseline gap-2">
        <div className="flex items-baseline gap-1">
          <Heading>Battery</Heading>
          {battery && (
            <i className="text-[0.75em] italic text-muted-foreground">
              {battery.status}
            </i>
          )}
        </div>
        {battery && (
          <span className="text-end font-mono text-xs md:text-sm">
            {battery.temperature.toFixed(1)}
            <i>&deg;C</i>
          </span>
        )}
      </div>
      <FilledBar
        color="var(--battery)"
        className={cn(!battery && "animate-pulse")}
        filled={battery?.level || 0}
        endDecoration={
          battery?.powered ? <LightningBoltIcon className="size-3" /> : null
        }
      />
    </div>
  );
}
