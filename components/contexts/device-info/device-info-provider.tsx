"use client";

import { calcCpuUsage } from "@/lib/device-info/calc-cpu-usage";
import { useWebsocket } from "@/lib/hooks/use-websocket";
import { CPUData, DeviceInfo } from "@/server/src/types";
import { PropsWithChildren, useEffect, useState } from "react";
import { DeviceInfoContext } from "./device-info-context";

type DeviceInfoProviderProps = {
  updateFrequency?: number;
} & PropsWithChildren;

export function DeviceInfoProvider({ children }: DeviceInfoProviderProps) {
  const [cpus, setCpus] = useState<CPUData[]>([]);

  const [deviceStats, setDeviceStats] = useState<DeviceInfo | undefined>();

  const [uptime, setUptime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);

  const { message, open: live } = useWebsocket();

  useEffect(() => {
    if (!message) return;
    // if (message) return;

    let info: DeviceInfo | undefined;

    try {
      info = JSON.parse(message) as DeviceInfo;
    } catch {
      console.error("Error parsing WS message!");
    }
    if (!info) return;

    setUptime((current) => (current || info.uptime) ?? 0);

    setDeviceStats((current) => {
      setCpus(
        current
          ? current.cpus.map(({ times, model, speed }, index) => ({
              model,
              speed,
              usage: calcCpuUsage(times, info.cpus[index].times),
            }))
          : info.cpus.map(({ model, speed }) => ({ model, speed, usage: 0 })),
      );
      return info;
    });
  }, [message]);

  useEffect(() => {
    if (!uptime) return;

    const start = Date.now();
    const timer = setInterval(() => {
      setElapsedTime((Date.now() - start) / 1000);
    }, 500);

    return () => clearInterval(timer);
  }, [uptime]);

  return (
    <DeviceInfoContext.Provider
      value={{
        live,
        cpus,
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
