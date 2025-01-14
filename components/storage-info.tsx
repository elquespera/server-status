"use client";
import { hMem } from "@/lib/human-mem";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { useDeviceInfo } from "./contexts/device-info/device-info-context";
import { FilledBar } from "./filled-bar";
import { Heading } from "./heading";

export function StorageInfo({ ...props }: ComponentProps<"div">) {
  const { drives } = useDeviceInfo();

  return (
    <div {...props}>
      <div className="mb-2 grid grid-cols-2 items-baseline gap-2">
        <Heading>Storage</Heading>
      </div>
      {drives?.map(({ label, used, available, total }) => (
        <div key={label} className="mb-4 flex flex-col gap-2">
          <div className="flex items-center gap-[1ch] self-end font-mono text-xs md:text-sm">
            <span>
              <span className="font-bold">{label}</span>:{" "}
              {hMem(total, false).size}
              <i className="italic">{hMem(total, false).unit}</i>
            </span>
          </div>

          <FilledBar
            color="var(--storage)"
            total={total}
            filled={used}
            className={cn(!total && "animate-pulse")}
            startDecoration={
              <>
                {hMem(used, false).size}
                <i>{hMem(used, false).unit}</i>
              </>
            }
            endDecoration={
              <>
                {hMem(available, false).size}
                <i>{hMem(available, false).unit}</i>
              </>
            }
          />
        </div>
      ))}
    </div>
  );
}
