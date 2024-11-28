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
        <div className="flex items-baseline gap-[1ch]">
          <Heading>Battery</Heading>
          <span className="text-xs italic md:text-sm">{battery.status}</span>
        </div>
        <span className="text-end font-mono text-xs md:text-sm">
          {battery.temperature.toFixed(1)}&deg;
        </span>
      </div>
      <FilledBar
        color="var(--chart-4)"
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
