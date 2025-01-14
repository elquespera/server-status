import os from "node:os";
import {
  cpuTempInterval,
  liveInfoInterval,
  networkInfoInterval,
  platformInfoInterval,
  storageInfoInterval,
} from "./consts";
import { broadcast } from "./messages";
import { DeviceInfo } from "./types";
import { getUsersByRoom } from "./users";
import { getCpuTemp } from "./utils/cpu-temp-info";
import { getPlatformInfo } from "./utils/platform-info";
import { calcCpuUsage } from "./utils/calc-cpu-usage";
import { getStorageInfo } from "./utils/storage-info";
import { getNetworkInfo } from "./utils/network-info";

export function updateDeviceInfo() {
  let timeStamp = Date.now();
  let info: DeviceInfo | undefined;
  let cpus = os.cpus();

  const loop = async () => {
    if (getUsersByRoom("device-info").length) {
      const ticks = Math.floor((Date.now() - timeStamp) / 1000);

      let newInfo: Partial<DeviceInfo> | undefined;

      if (ticks % liveInfoInterval === 0 || !info) {
        const newCpus = os.cpus();
        newInfo = {
          ...info,
          cpus: cpus.map(({ times, ...rest }, index) => ({
            usage: calcCpuUsage(times, newCpus[index].times),
            ...rest,
          })),
          freeMem: os.freemem(),
          uptime: os.uptime(),
        };
        cpus = newCpus;
      }

      if (ticks % storageInfoInterval === 0 || !info) {
        const storage = await getStorageInfo();
        newInfo = { ...info, ...newInfo, storage };
      }

      if (ticks % cpuTempInterval === 0 || !info) {
        const cpuTemp = await getCpuTemp();
        newInfo = { ...info, ...newInfo, cpuTemp };
      }

      if (ticks % platformInfoInterval === 0 || !info) {
        const termuxInfo = await getPlatformInfo();
        newInfo = { ...info, ...newInfo, ...termuxInfo };
      }

      if (ticks % networkInfoInterval === 1) {
        const network = await getNetworkInfo();
        newInfo = { ...info, ...newInfo, network };
      }

      if (newInfo) {
        info = newInfo as DeviceInfo;
        broadcast({ type: "device-info", info }, "device-info");
      }
    }
  };

  setInterval(loop, 1000);
  loop();
}
