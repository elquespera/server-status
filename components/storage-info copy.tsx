"use client";
import { hMem } from "@/lib/device-info/human-mem";
import { ComponentProps } from "react";
import { useDeviceInfo } from "./contexts/device-info/device-info-context";
import { FilledBar } from "./filled-bar";
import { Heading } from "./heading";

export function StorageInfo({ ...props }: ComponentProps<"div">) {
  const { storage } = useDeviceInfo();
  const total = storage?.total ?? 1000000;
  const free = storage?.free ?? 0;
  const inUse = total - free;
  const writeSpeed = storage?.writeSpeed ?? 0;

  return (
    <div {...props}>
      <div className="mb-2 grid grid-cols-2 items-baseline gap-2">
        <Heading>Storage</Heading>
        <span className="text-end font-mono text-xs md:text-sm">
          <span className="font-bold italic">Write speed:</span>{" "}
          {(writeSpeed / 1000).toFixed(1)} <i>MB/s</i>
        </span>
      </div>
      <FilledBar
        color="var(--storage)"
        total={total}
        filled={inUse}
        endDecoration={
          <>
            {hMem(total, false).size}
            <i>{hMem(total, false).unit}</i>
          </>
        }
      />
    </div>
  );
}
