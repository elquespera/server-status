"use client";

import { calcCpuUsage } from "@/lib/device-info/calc-cpu-usage";
import { PropsWithChildren, useEffect, useState } from "react";
import { DeviceInfoContext } from "./device-info-context";
import { getDeviceInfo } from "@/lib/device-info/get-device-info";

type DeviceInfoProviderProps = {
  updateFrequency?: number;
} & PropsWithChildren;

type DeviceStats = Awaited<ReturnType<typeof getDeviceInfo>>;

export function DeviceInfoProvider({
  updateFrequency = 2000,
  children,
}: DeviceInfoProviderProps) {
  const [cpus, setCpus] = useState<CPUData[]>([]);
  const [deviceStats, setDeviceStats] = useState<DeviceStats>();
  const [uptime, setUptime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    (async () => {
      let previousInfo = await getDeviceInfo();
      setDeviceStats(previousInfo);

      //Set initial uptime
      setUptime((current) => previousInfo?.uptime ?? current);

      //Set initial usage to 0%
      setCpus(
        previousInfo?.cpus.map(({ model, speed }) => ({
          model,
          speed,
          usage: 0,
        })) ?? [],
      );

      timer = setInterval(async () => {
        const info = await getDeviceInfo();

        if (!previousInfo || !info) {
          previousInfo = info;
          return;
        }

        setCpus(
          previousInfo?.cpus.map(({ times, model, speed }, index) => ({
            model,
            speed,
            usage: calcCpuUsage(times, info.cpus[index].times),
          })),
        );

        setDeviceStats(info);

        previousInfo = info;
      }, updateFrequency);
    })();

    return () => clearInterval(timer);
  }, [updateFrequency]);

  useEffect(() => {
    const start = Date.now();
    const timer = setInterval(() => {
      setElapsedTime((Date.now() - start) / 1000);
    }, 500);

    return () => clearInterval(timer);
  }, [uptime]);

  return (
    <DeviceInfoContext.Provider
      value={{
        cpus,
        totalMem: deviceStats?.totalMem ?? 0,
        freeMem: deviceStats?.freeMem ?? 0,
        uptime: Math.floor(uptime + elapsedTime),
      }}
    >
      {children}
    </DeviceInfoContext.Provider>
  );
}
