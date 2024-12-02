import { exec as execSync } from "child_process";
import util from "node:util";
import { mockBattery, parseBatteryInfo } from "./battery-info";
import { TermuxBattery, TermuxWifiInfo } from "./types";
import { mockWifiInfo, parseWifiInfo } from "./wifi-info";
import { mockCpuTemp, parseCpuTemp } from "./cpu-temp-info";
const exec = util.promisify(execSync);

const isTermux = process.env.IS_TERMUX === "true";

export async function fetchTermuxInfo() {
  const thermalPath = "/sys/class/thermal/thermal_zone";
  let battery: TermuxBattery | undefined;
  let wifi: TermuxWifiInfo | undefined;
  let cpuTemp: number[] | undefined;

  if (isTermux) {
    try {
      const [
        { stdout: wifiRaw },
        { stdout: batteryRaw },
        { stdout: cpuTempRaw },
      ] = await Promise.all([
        exec("dumpsys wifi"),
        exec("dumpsys battery"),
        exec(`cat ${thermalPath}{28..33}/temp ${thermalPath}{36..39}/temp`, {
          shell: "/data/data/com.termux/files/usr/bin/bash",
        }),
      ]);

      wifi = parseWifiInfo(wifiRaw);
      battery = parseBatteryInfo(batteryRaw);
      cpuTemp = parseCpuTemp(cpuTempRaw);
    } catch (error) {
      console.error(error);
    }
  } else {
    wifi = mockWifiInfo();
    battery = mockBattery();
    cpuTemp = mockCpuTemp();
  }

  return { wifi, battery, cpuTemp };
}
