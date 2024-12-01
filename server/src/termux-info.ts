import { exec as execSync } from "child_process";
import util from "node:util";
import { mockBattery, parseBatteryInfo } from "./battery-info";
import { TermuxBattery, TermuxWifiInfo } from "./types";
import { mockWifiInfo, parseWifiInfo } from "./wifi-info";
const exec = util.promisify(execSync);

const isTermux = process.env.IS_TERMUX === "true";

export async function fetchTermuxInfo() {
  let battery: TermuxBattery | undefined;
  let wifi: TermuxWifiInfo | undefined;

  if (isTermux) {
    try {
      const { stdout: wifiRaw } = await exec("dumpsys wifi");
      const { stdout: batteryRaw } = await exec("dumpsys battery");

      wifi = parseWifiInfo(wifiRaw);
      battery = parseBatteryInfo(batteryRaw);
    } catch (error) {
      console.error(error);
    }
  } else {
    wifi = mockWifiInfo();
    battery = mockBattery();
  }

  return { wifi, battery };
}
