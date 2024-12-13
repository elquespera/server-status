import os from "node:os";
import {
  cpuTempInterval,
  liveInfoInterval,
  platformInfoInterval,
} from "./consts";
import { broadcast } from "./messages";
import { DeviceInfo } from "./types";
import { getUsersByRoom } from "./users";
import { getCpuTemp } from "./utils/cpu-temp-info";
import { getPlatformInfo } from "./utils/platform-info";
import { calcCpuUsage } from "./utils/calc-cpu-usage";

export function updateDeviceInfo() {
  let timeStamp = Date.now();
  let info: DeviceInfo | undefined;
  let cpus = os.cpus();

  const loop = async () => {
    if (getUsersByRoom("device-info").length) {
      const ticks = Math.floor((Date.now() - timeStamp) / 1000);

      let newInfo: Partial<DeviceInfo> | undefined;

      if (ticks % liveInfoInterval === 0) {
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

      if (ticks % cpuTempInterval === 0) {
        const cpuTemp = await getCpuTemp();
        newInfo = { ...info, ...newInfo, cpuTemp };
      }

      if (ticks % platformInfoInterval === 0) {
        const termuxInfo = await getPlatformInfo();
        newInfo = { ...info, ...newInfo, ...termuxInfo };
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
