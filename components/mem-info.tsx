"use client";
import { humanFileSize } from "@/lib/device-info/human-file-size";
import { ComponentProps } from "react";
import { useDeviceInfo } from "./contexts/device-info/device-info-context";
import { FilledBar } from "./filled-bar";
import { Heading } from "./heading";

export function MemInfo({ ...props }: ComponentProps<"div">) {
  const { totalMem, freeMem } = useDeviceInfo();
  const inUse = totalMem - freeMem;

  return (
    <div {...props}>
      <div className="mb-2 grid grid-cols-2 items-baseline gap-2">
        <Heading>Memory</Heading>
        <span className="text-end font-mono text-xs md:text-sm">
          <span className="font-bold italic">Total:</span>{" "}
          {humanFileSize(totalMem, false, 2)}
        </span>
      </div>
      <FilledBar
        color="var(--chart-2)"
        total={totalMem}
        filled={inUse}
        startDecoration={humanFileSize(inUse, false, 2)}
        endDecoration={humanFileSize(totalMem, false, 2)}
      />
    </div>
  );
}
