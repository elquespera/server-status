import { cpus, freemem, uptime } from "node:os";
import {
  cpuTempInterval,
  liveInfoInterval,
  platformInfoInterval,
} from "./consts";
import { DeviceInfo } from "./types";
import { getCpuTemp } from "./utils/cpu-temp-info";
import { getPlatformInfo } from "./utils/platform-info";
import { broadcast, wss } from "./server";

export function updateDeviceInfo() {
  let timeStamp = Date.now();
  let info: DeviceInfo | undefined;

  const loop = async () => {
    if (wss.clients.size) {
      const ticks = Math.floor((Date.now() - timeStamp) / 1000);

      let newInfo: Partial<DeviceInfo> | undefined;

      if (ticks % liveInfoInterval === 0) {
        newInfo = {
          ...info,
          cpus: cpus(),
          freeMem: freemem(),
          uptime: uptime(),
        };
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
        broadcast({ type: "device-info", info });
      }
    }
  };

  setInterval(loop, 1000);
  loop();
}
