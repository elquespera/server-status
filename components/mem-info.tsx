"use client";
import { hMem } from "@/lib/device-info/human-mem";
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
          <span className="font-bold italic">Total:</span> {hMem(totalMem).size}
          <i>{hMem(totalMem).unit}</i>
        </span>
      </div>
      <FilledBar
        color="var(--memory)"
        total={totalMem}
        filled={inUse}
        startDecoration={
          <>
            {hMem(inUse).size}
            <i>{hMem(inUse).unit}</i>
          </>
        }
        endDecoration={
          <>
            {hMem(freeMem).size}
            <i>{hMem(freeMem).unit}</i>
          </>
        }
      />
    </div>
  );
}
