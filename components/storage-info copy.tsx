"use client";
import { hMem } from "@/lib/human-mem";
import { ComponentProps } from "react";
import { useDeviceInfo } from "./contexts/device-info/device-info-context";
import { FilledBar } from "./filled-bar";
import { Heading } from "./heading";
import { Skeleton } from "./ui/skeleton";
import { cn } from "@/lib/utils";

export function StorageInfo({ ...props }: ComponentProps<"div">) {
  const { storage } = useDeviceInfo();
  const total = storage?.total ?? 0;
  const free = storage?.free ?? 0;
  const inUse = total - free;
  const writeSpeed = storage?.writeSpeed ?? 0;

  return (
    <div {...props}>
      <div className="mb-2 grid grid-cols-2 items-baseline gap-2">
        <Heading>Storage</Heading>
        <div className="flex items-center gap-[1ch] justify-self-end font-mono text-xs md:text-sm">
          <i className="font-bold italic">Write speed:</i>
          {writeSpeed ? (
            <span>
              {(writeSpeed / 1000).toFixed(1)} <i>MB/s</i>
            </span>
          ) : (
            <Skeleton className="h-[1em] w-[7ch]" />
          )}
        </div>
      </div>
      <FilledBar
        color="var(--storage)"
        total={total}
        filled={inUse}
        className={cn(!total && "animate-pulse")}
        endDecoration={
          total ? (
            <>
              {hMem(total, false).size}
              <i>{hMem(total, false).unit}</i>
            </>
          ) : null
        }
      />
    </div>
  );
}
