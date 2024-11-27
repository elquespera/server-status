"use client";

import { calcCpuUsage } from "@/lib/device-info/cpu-usage";
import { getDeviceStats } from "@/lib/device-info/device-stats";
import { PropsWithChildren, useEffect, useState } from "react";
import { DeviceInfoContext } from "./device-info-context";

type DeviceInfoProviderProps = {
  interval?: number;
} & PropsWithChildren;

type DeviceStats = Awaited<ReturnType<typeof getDeviceStats>>;

export function DeviceInfoProvider({
  interval = 1000,
  children,
}: DeviceInfoProviderProps) {
  const [cpus, setCpus] = useState<CPUData[]>([]);
  const [deviceStats, setDeviceStats] = useState<DeviceStats>();

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    (async () => {
      let previousInfo = await getDeviceStats();
      setDeviceStats(previousInfo);

      timer = setInterval(async () => {
        const info = await getDeviceStats();

        if (!previousInfo || !info) {
          previousInfo = info;
          return;
        }

        setCpus(
          previousInfo?.cpus.map(({ times, model, speed }, index) => ({
            model,
            speed,
            usage: calcCpuUsage(times, info.cpus[index].times),
          }))
        );

        setDeviceStats(info);

        previousInfo = info;
      }, interval);
    })();

    return () => clearInterval(timer);
  }, [interval]);

  return (
    <DeviceInfoContext.Provider
      value={{
        cpus,
        totalMem: deviceStats?.totalMem ?? 0,
        freeMem: deviceStats?.freeMem ?? 0,
        uptime: deviceStats?.uptime ?? 0,
      }}
    >
      {children}
    </DeviceInfoContext.Provider>
  );
}
