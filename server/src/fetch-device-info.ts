import { exec as execSync } from "child_process";
import {
  CpuInfo,
  cpus as cpuInfo,
  freemem,
  type as osType,
  platform,
  totalmem,
  uptime,
} from "node:os";
import util from "node:util";
import { arch } from "os";
import { mockBattery } from "./mock-battery";
import { mockWifiInfo } from "./mock-wifi-info";
import { DeviceInfo, OSInfo, TermuxBattery, TermuxWifiInfo } from "./types";
const exec = util.promisify(execSync);

const sudo = process.env.CPU_SUDO === "true";
const isTermux = process.env.IS_TERMUX === "true";

export async function fetchDeviceInfo(
  previousInfo: DeviceInfo | undefined,
  elapsed: number,
): Promise<DeviceInfo | undefined> {
  let cpus: CpuInfo[] | undefined = previousInfo?.cpus;
  let battery: TermuxBattery | undefined = previousInfo?.battery;
  let wifi: TermuxWifiInfo | undefined = previousInfo?.wifi;

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
      const { stdout: wifiRaw } = await exec("termux-wifi-connectioninfo");
      wifi = JSON.parse(wifiRaw);
      const { stdout: batteryRaw } = await exec("termux-battery-status");
      battery = JSON.parse(batteryRaw);
    } catch (error) {
      console.error(error);
    }
  } else {
    wifi = mockWifiInfo;
    battery = mockBattery;
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
