"use client";
import { cn } from "@/lib/utils";
import { useDeviceInfo } from "./contexts/device-info/device-info-context";
import WifiIcon from "./icons/wifi-icon";

export function OsInfo() {
  const { live, uptime, platform, arch, osType, wifi } = useDeviceInfo();

  if (!uptime) return null;

  const formatTime = (t: number) => String(Math.floor(t)).padStart(2, "0");

  const seconds = formatTime(uptime % 60);
  const minutes = formatTime((uptime / 60) % 60);
  const hours = formatTime((uptime / 3600) % 24);
  const days = Math.floor((uptime / 86400) % 3600);

  return (
    <div className="grid grid-cols-2 items-baseline gap-x-2">
      <span>
        <span className="font-semibold capitalize">{platform}</span>{" "}
        <i className="text-sm italic">{arch} </i>
        {osType.toLowerCase() !== platform.toLowerCase() && (
          <i className="text-sm italic">{osType} </i>
        )}
      </span>
      <pre className="text-end font-mono text-xs md:text-sm">
        <span
          className={cn(
            "relative inline-flex items-center gap-1.5 font-bold italic before:size-2 before:rounded-full before:bg-red-500",
            live && "before:bg-green-500",
          )}
        >
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
      {wifi && (
        <div className="flex items-center gap-1 text-xs md:text-sm">
          <WifiIcon />
          <span className="font-mono text-muted-foreground">
            {wifi.ssid}, {(wifi.frequency / 1000).toFixed(0)}
            <i>GHz</i>, {wifi.speed.toFixed(0)} <i>Mb/s</i>
          </span>
        </div>
      )}
    </div>
  );
}
