"use client";

import { calcCpuUsage } from "@/lib/device-info/cpu-usage";
import { getDeviceStats } from "@/lib/device-info/device-stats";
import { PropsWithChildren, useEffect, useState } from "react";
import { DeviceInfoContext } from "./device-info-context";

type DeviceInfoProviderProps = {
  interval?: number;
} & PropsWithChildren;

export function DeviceInfoProvider({
  interval = 1000,
  children,
}: DeviceInfoProviderProps) {
  const [cpus, setCpus] = useState<CPUData[]>([]);

  useEffect(() => {
    let previousInfo: Awaited<ReturnType<typeof getDeviceStats>>;

    const timer = setInterval(async () => {
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

      previousInfo = info;
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return (
    <DeviceInfoContext.Provider value={{ cpus }}>
      {children}
    </DeviceInfoContext.Provider>
  );
}
