"use client";
import { hMem } from "@/lib/device-info/human-mem";
import { ComponentProps } from "react";
import { useDeviceInfo } from "./contexts/device-info/device-info-context";
import { FilledBar } from "./filled-bar";
import { Heading } from "./heading";
import { Skeleton } from "./ui/skeleton";
import { cn } from "@/lib/utils";

export function MemInfo({ ...props }: ComponentProps<"div">) {
  const { totalMem, freeMem } = useDeviceInfo();
  const inUse = totalMem - freeMem;

  return (
    <div {...props}>
      <div className="mb-2 grid grid-cols-2 items-baseline gap-2">
        <Heading>Memory</Heading>
        <div className="flex items-center gap-[1ch] justify-self-end font-mono text-xs md:text-sm">
          <i className="font-bold italic">Total:</i>
          {totalMem ? (
            <span>
              {hMem(totalMem).size}
              <i>{hMem(totalMem).unit}</i>
            </span>
          ) : (
            <Skeleton className="h-[1em] w-[6ch]" />
          )}
        </div>
      </div>
      <FilledBar
        color="var(--memory)"
        total={totalMem}
        className={cn(!totalMem && "animate-pulse")}
        filled={inUse}
        startDecoration={
          totalMem ? (
            <>
              {hMem(inUse).size}
              <i>{hMem(inUse).unit}</i>
            </>
          ) : null
        }
        endDecoration={
          totalMem ? (
            <>
              {hMem(freeMem).size}
              <i>{hMem(freeMem).unit}</i>
            </>
          ) : null
        }
      />
    </div>
  );
}
