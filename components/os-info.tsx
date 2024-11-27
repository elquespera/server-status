"use client";
import { useDeviceInfo } from "./contexts/device-info/device-info-context";

export function OsInfo() {
  const { uptime } = useDeviceInfo();

  if (!uptime) return null;

  const formatTime = (t: number) => String(Math.floor(t)).padStart(2, "0");

  const seconds = formatTime(uptime % 60);
  const minutes = formatTime((uptime / 60) % 60);
  const hours = formatTime((uptime / 3600) % 24);
  const days = formatTime((uptime / 86400) % 3600);

  return (
    <div className="grid grid-cols-2">
      <span>Uptime:</span>
      <pre>
        {days}
        <span className="text-sm">d</span> {hours}
        <span className="text-sm">h</span> {minutes}
        <span className="text-sm">m</span> {seconds}
        <span className="text-sm">s</span>
      </pre>
    </div>
  );
}
