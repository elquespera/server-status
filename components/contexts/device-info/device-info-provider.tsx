"use client";

import { calcCpuUsage } from "@/lib/device-info/calc-cpu-usage";
import { getDeviceInfo } from "@/lib/device-info/get-device-info";
import { PropsWithChildren, useEffect, useState } from "react";
import { DeviceInfoContext } from "./device-info-context";
import { getCpuInfo } from "@/lib/device-info/get-cpu-info";

type DeviceInfoProviderProps = {
  updateFrequency?: number;
  cpuUpdateFrequency?: number;
} & PropsWithChildren;

type DeviceStats = Awaited<ReturnType<typeof getDeviceInfo>>;

export function DeviceInfoProvider({
  updateFrequency = 1000,
  cpuUpdateFrequency = 1000,
  children,
}: DeviceInfoProviderProps) {
  const [cpus, setCpus] = useState<CPUData[]>([]);
  const [deviceStats, setDeviceStats] = useState<DeviceStats>();

  //Update CPU usage
  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    (async () => {
      let previousInfo = await getCpuInfo();

      //Set initial usage to 0%
      setCpus(
        previousInfo?.map(({ model, speed }) => ({ model, speed, usage: 0 })) ??
          [],
      );

      timer = setInterval(async () => {
        const info = await getCpuInfo();

        if (!previousInfo || !info) {
          previousInfo = info;
          return;
        }

        setCpus(
          previousInfo?.map(({ times, model, speed }, index) => ({
            model,
            speed,
            usage: calcCpuUsage(times, info[index].times),
          })),
        );

        previousInfo = info;
      }, cpuUpdateFrequency);
    })();

    return () => clearInterval(timer);
  }, [cpuUpdateFrequency]);

  // Update other info
  useEffect(() => {
    const updateInfo = async () => {
      const info = await getDeviceInfo();
      setDeviceStats(info);
    };

    updateInfo();
    const timer = setInterval(() => updateInfo(), updateFrequency);

    return () => clearInterval(timer);
  }, [updateFrequency]);

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
