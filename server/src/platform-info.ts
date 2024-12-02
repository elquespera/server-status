import { arch, type as osType, platform, totalmem } from "node:os";
import { runBashCommand } from "./bash-command";
import { batteryStatuses, isTermux } from "./consts";
import { parseDump } from "./parse-dump";
import { TermuxBattery, TermuxWifiInfo } from "./types";

export async function getPlatformInfo() {
  let battery: TermuxBattery | undefined;
  let wifi: TermuxWifiInfo | undefined;

  if (isTermux) {
    try {
      const [{ stdout: wifiRaw }, { stdout: batteryRaw }] = await Promise.all([
        runBashCommand("dumpsys wifi"),
        runBashCommand("dumpsys battery"),
      ]);

      wifi = parseWifiInfo(wifiRaw);
      battery = parseBatteryInfo(batteryRaw);
    } catch (error) {
      console.error(error);
    }
  }

  return {
    totalMem: totalmem(),
    platform: platform(),
    arch: arch(),
    osType: osType(),
    wifi: wifi || mockWifiInfo(),
    battery: battery || mockBattery(),
  };
}

const mockWifiInfo = (): TermuxWifiInfo => ({
  ssid: "Network SSID",
  frequency: 5180,
  speed: Math.random() * 300 + 200,
});

const parseWifiInfo = (dump: string): TermuxWifiInfo => {
  const match = dump.match(/mConnectionEvents:\n(.*)/m);

  if (match) {
    const connection = parseDump(match[1].trim(), ", ", "=");
    return {
      ssid: connection["SSID"]?.replace(/"/g, ""),
      speed: parseFloat(connection["mMaxSupportedTxLinkSpeedMbps"]),
      frequency: parseFloat(connection["mChannelInfo"]),
    };
  }

  return {
    ssid: "",
    frequency: 0,
    speed: 0,
  };
};

const mockBattery = (): TermuxBattery => ({
  level: Math.random() * 100,
  powered: true,
  status: "CHARGING",
  temperature: 20 + Math.random() * 10,
});

const parseBatteryInfo = (dump: string): TermuxBattery => {
  const parsed = parseDump(dump);

  return {
    level: parseFloat(parsed["level"]),
    powered: [
      "AC powered",
      "USB powered",
      "Wireless powered",
      "Dock powered",
    ].some((key) => parsed[key] === "true"),
    temperature: (parseFloat(parsed["temperature"]) ?? 0) / 10,
    status: batteryStatuses[parsed["status"]] ?? parsed["status"],
  };
};
