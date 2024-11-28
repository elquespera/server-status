"use client";
import { ComponentProps } from "react";
import { useDeviceInfo } from "./contexts/device-info/device-info-context";
import { FilledBar } from "./filled-bar";
import { Heading } from "./heading";

export function CPUInfo({ ...props }: ComponentProps<"div">) {
  const { cpus } = useDeviceInfo();

  const cpuModel = cpus[0]?.model === "unknown" ? "" : cpus[0]?.model;
  const cpuCount = cpus.length;

  return (
    <div {...props}>
      <div className="mb-2 grid grid-cols-[auto,1fr] items-baseline gap-2">
        <Heading>CPU</Heading>
        {cpuCount && (
          <p className="break truncate text-end font-mono text-xs md:text-sm">
            {cpuCount}x {cpuModel}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        {cpus.map(({ usage, speed }, index) => (
          <FilledBar
            key={index}
            index={index + 1}
            color="var(--chart-1)"
            filled={usage}
            endDecoration={`${(speed / 1000).toFixed(2)}GHz`}
          />
        ))}
      </div>
    </div>
  );
}
