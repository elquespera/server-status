"use client";
import { LightningBoltIcon } from "@radix-ui/react-icons";
import { ComponentProps } from "react";
import { useDeviceInfo } from "./contexts/device-info/device-info-context";
import { FilledBar } from "./filled-bar";
import { Heading } from "./heading";

export function BatteryInfo({ ...props }: ComponentProps<"div">) {
  const { battery } = useDeviceInfo();

  if (!battery) return null;

  return (
    <div {...props}>
      <div className="mb-2 grid grid-cols-2 items-baseline gap-2">
        <div className="flex items-baseline gap-1">
          <Heading>Battery</Heading>
          <i className="text-[0.75em] italic text-muted-foreground">
            {battery.status}
          </i>
        </div>
        <span className="text-end font-mono text-xs md:text-sm">
          {battery.temperature.toFixed(1)}
          <i>&deg;C</i>
        </span>
      </div>
      <FilledBar
        color="var(--chart-3)"
        filled={battery.percentage}
        endDecoration={
          battery.plugged === "PLUGGED_AC" ? (
            <LightningBoltIcon className="size-3" />
          ) : null
        }
      />
    </div>
  );
}
