"use client";
import { humanFileSize } from "@/lib/device-info/human-file-size";
import { useDeviceInfo } from "./contexts/device-info/device-info-context";

export function MemInfo() {
  const { totalMem, freeMem } = useDeviceInfo();

  return (
    <div className="grid grid-cols-2">
      <span>In use:</span>
      <pre>{humanFileSize(totalMem - freeMem, false, 2)}</pre>
      <span>Total:</span>
      <pre>{humanFileSize(totalMem, false, 2)}</pre>
    </div>
  );
}
