import { exec as execSync } from "child_process";
import util from "node:util";
import { mockBattery } from "./mock-battery";
import { mockWifiInfo } from "./mock-wifi-info";
import { TermuxBattery, TermuxWifiInfo } from "./types";
const exec = util.promisify(execSync);

const isTermux = process.env.IS_TERMUX === "true";

export async function fetchTermuxInfo() {
  let battery: TermuxBattery | undefined;
  let wifi: TermuxWifiInfo | undefined;

  if (isTermux) {
    try {
      const { stdout: wifiRaw } = await exec("termux-wifi-connectioninfo");
      const { stdout: batteryRaw } = await exec("termux-battery-status");

      wifi = JSON.parse(wifiRaw);
      battery = JSON.parse(batteryRaw);
    } catch (error) {
      console.error(error);
    }
  } else {
    wifi = mockWifiInfo();
    battery = mockBattery();
  }

  return {
    wifi: wifi
      ? {
          frequency_mhz: wifi.frequency_mhz,
          link_speed_mbps: wifi.link_speed_mbps,
        }
      : undefined,
    battery,
  };
}
