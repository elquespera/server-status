"use client";
import { cn } from "@/lib/utils";
import { ArrowDownIcon, ArrowUpIcon } from "@radix-ui/react-icons";
import { useDeviceInfo } from "./contexts/device-info/device-info-context";
import WifiIcon from "./icons/wifi-icon";
import { Skeleton } from "./ui/skeleton";

export function OsInfo() {
  const { live, uptime, platform, arch, osType, network } = useDeviceInfo();

  const formatTime = (t: number) => String(Math.floor(t)).padStart(2, "0");

  const seconds = formatTime(uptime % 60);
  const minutes = formatTime((uptime / 60) % 60);
  const hours = formatTime((uptime / 3600) % 24);
  const days = Math.floor((uptime / 86400) % 3600);

  return (
    <div className="grid grid-cols-2 items-baseline gap-x-2">
      {platform ? (
        <span>
          <span className="font-semibold capitalize">{platform}</span>{" "}
          <i className="text-sm italic">{arch} </i>
          {osType.toLowerCase() !== platform.toLowerCase() && (
            <i className="text-sm italic">{osType} </i>
          )}
        </span>
      ) : (
        <Skeleton className="mb-2 h-[1em] w-20" />
      )}
      <pre className="flex items-center gap-2 justify-self-end font-mono text-xs md:text-sm">
        {live && uptime ? (
          <span>
            {days > 0 && (
              <span>
                {days} {days === 1 ? "day" : "days"},{" "}
              </span>
            )}
            {hours}:{minutes}:{seconds}
          </span>
        ) : (
          <Skeleton className="h-[1em] w-16" />
        )}
        <span
          className={cn(
            "size-2 shrink-0 rounded-full bg-red-500",
            live && "bg-green-500",
          )}
        />
      </pre>
      <div className="flex items-center gap-2 text-xs md:text-sm">
        <WifiIcon className="shrink-0" />
        {network ? (
          <>
            <span className="inline-flex items-center gap-1">
              {network.ping.toFixed(0)} <i>ms, </i>
            </span>
            <span className="inline-flex items-center gap-1">
              <ArrowDownIcon />
              {network.downloadSpeed.split(" ")[0]}{" "}
              <i>{network.downloadSpeed.split(" ")[1]}, </i>
            </span>
            <span className="inline-flex items-center gap-1">
              <ArrowUpIcon />
              {network.uploadSpeed.split(" ")[0]}{" "}
              <i>{network.uploadSpeed.split(" ")[1]}</i>
            </span>
          </>
        ) : (
          <Skeleton className="mb-1 h-[1em] w-24" />
        )}
      </div>
    </div>
  );
}
