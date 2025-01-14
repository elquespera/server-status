"use client";

import { DeviceInfo } from "@/server/src/types";
import { PropsWithChildren, useEffect, useState } from "react";
import { useWS } from "../ws/ws-context";
import { DeviceInfoContext } from "./device-info-context";

export function DeviceInfoProvider({ children }: PropsWithChildren) {
  const [deviceStats, setDeviceStats] = useState<DeviceInfo | undefined>();
  const [uptime, setUptime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const { message, state, sendMessage } = useWS();

  useEffect(() => {
    if (message?.type !== "device-info") return;
    const { info } = message;
    setUptime((current) => (current || info.uptime) ?? 0);
    setDeviceStats(info);
  }, [message]);

  useEffect(() => {
    if (!uptime) return;
    const start = Date.now();
    const timer = setInterval(() => {
      setElapsedTime((Date.now() - start) / 1000);
    }, 500);

    return () => clearInterval(timer);
  }, [uptime]);

  useEffect(() => {
    if (state === "OPEN") {
      sendMessage({ type: "enter-room", room: "device-info" });
      return () => sendMessage({ type: "leave-room", room: "device-info" });
    }
  }, [sendMessage, state]);

  return (
    <DeviceInfoContext.Provider
      value={{
        live: state === "OPEN",
        cpus: deviceStats?.cpus ?? [],
        drives: deviceStats?.drives ?? [],
        totalMem: deviceStats?.totalMem ?? 0,
        freeMem: deviceStats?.freeMem ?? 0,
        uptime: Math.floor(uptime + elapsedTime),
        platform: deviceStats?.platform ?? "",
        arch: deviceStats?.arch ?? "",
        osType: deviceStats?.osType ?? "",
        battery: deviceStats?.battery,
        wifi: deviceStats?.wifi,
        storage: deviceStats?.storage,
        cpuTemp: deviceStats?.cpuTemp,
      }}
    >
      {children}
    </DeviceInfoContext.Provider>
  );
}
