"use client";
import { useDeviceInfo } from "./contexts/device-info/device-info-context";

export function OsInfo() {
  const { uptime, platform, arch, osType } = useDeviceInfo();

  if (!uptime) return null;

  const formatTime = (t: number) => String(Math.floor(t)).padStart(2, "0");

  const seconds = formatTime(uptime % 60);
  const minutes = formatTime((uptime / 60) % 60);
  const hours = formatTime((uptime / 3600) % 24);
  const days = Math.floor((uptime / 86400) % 3600);

  return (
    <div className="grid grid-cols-2 items-baseline gap-2">
      <span>
        <span className="font-semibold capitalize">{platform}</span>{" "}
        <i className="text-sm italic">{arch} </i>
        {osType.toLowerCase() !== platform.toLowerCase() && (
          <i className="text-sm italic">{osType} </i>
        )}
      </span>
      <pre className="text-end font-mono text-xs md:text-sm">
        <span className="relative inline-flex items-center gap-1.5 font-bold italic before:size-2 before:rounded-full before:bg-green-500">
          {" "}
          LIVE:{" "}
        </span>
        {days > 0 && (
          <span>
            {days} {days === 1 ? "day" : "days"},{" "}
          </span>
        )}
        {hours}:{minutes}:{seconds}
      </pre>
    </div>
  );
}
