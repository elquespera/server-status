"use client";
import { ComponentProps } from "react";
import { useDeviceInfo } from "./contexts/device-info/device-info-context";
import { FilledBar } from "./filled-bar";
import { Heading } from "./heading";
import { cpuCores, cpuModel } from "@/consts/consts";
import { cn } from "@/lib/utils";

export function CPUInfo({ ...props }: ComponentProps<"div">) {
  const { cpus: loadedCpus, cpuTemp } = useDeviceInfo();

  const model = cpuModel || loadedCpus?.[0]?.model || "";

  const cpus = loadedCpus?.length
    ? loadedCpus
    : Array.from({ length: cpuCores })
        .fill("")
        .map(() => ({ usage: 0, speed: 0 }));

  return (
    <div {...props}>
      <div className="mb-2 grid grid-cols-[auto,1fr] items-baseline gap-2">
        <Heading>CPU</Heading>
        {model && (
          <p className="break truncate text-end font-mono text-xs md:text-sm">
            {model}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        {cpus.map(({ usage, speed }, index) => (
          <FilledBar
            key={index}
            index={index + 1}
            color="var(--cpu)"
            className={cn(!loadedCpus?.length && "animate-pulse")}
            filled={usage}
            endDecoration={
              <span>
                {cpuTemp?.[index] && (
                  <span className="pr-6">
                    {cpuTemp[index].toFixed(1)}
                    <i>&deg;</i>
                  </span>
                )}
                {(speed / 1000).toFixed(2)}
                <i>GHz</i>
              </span>
            }
          />
        ))}
      </div>
    </div>
  );
}
