"use server";

import { exec as execSync } from "child_process";
import {
  CpuInfo,
  freemem,
  platform,
  totalmem,
  uptime,
  cpus as cpuInfo,
  type as osType,
} from "node:os";
import util from "node:util";
import { arch } from "os";
import { mockBattery } from "./mock-battery";
import { mockWifiInfo } from "./mock-wifi-info";
const exec = util.promisify(execSync);

const sudo = process.env.CPU_SUDO === "true";
const isTermux = process.env.IS_TERMUX === "true";

export async function getDeviceInfo(): Promise<
  (OSInfo & { cpus: CpuInfo[] }) | undefined
> {
  let cpus: CpuInfo[] | undefined;
  let battery: TermuxBattery | undefined;
  let wifi: TermuxWifiInfo | undefined;

  try {
    if (sudo) {
      const { stdout: cpuRaw } = await exec(
        `sudo node -e "console.log(JSON.stringify(os.cpus()))"`,
      );
      cpus = JSON.parse(cpuRaw);
    } else {
      cpus = cpuInfo();
    }
  } catch (error) {
    console.error(error);
  }

  if (isTermux) {
    try {
      const { stdout: batteryRaw } = await exec("termux-battery-status");
      battery = JSON.parse(batteryRaw);
    } catch (error) {
      console.error(error);
    }
  } else {
    battery = mockBattery;
  }

  if (isTermux) {
    try {
      const { stdout: wifiRaw } = await exec("termux-wifi-connectioninfo");
      wifi = JSON.parse(wifiRaw);
    } catch (error) {
      console.error(error);
    }
  } else {
    wifi = mockWifiInfo;
  }

  if (cpus)
    return {
      cpus,
      totalMem: totalmem(),
      freeMem: freemem(),
      uptime: uptime(),
      platform: platform(),
      arch: arch(),
      osType: osType(),
      battery,
      wifi: wifi
        ? {
            frequency_mhz: wifi.frequency_mhz,
            link_speed_mbps: wifi.link_speed_mbps,
          }
        : undefined,
    };
}
