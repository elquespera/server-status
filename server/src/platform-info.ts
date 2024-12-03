import { arch, type as osType, platform, totalmem } from "node:os";
import { runBashCommand } from "./bash-command";
import { batteryStatuses, isTermux } from "./consts";
import { parseDump } from "./parse-dump";
import { TermuxBattery, TermuxStorage, TermuxWifiInfo } from "./types";

export async function getPlatformInfo() {
  let battery: TermuxBattery | undefined;
  let wifi: TermuxWifiInfo | undefined;
  let storage: TermuxStorage | undefined;

  if (isTermux) {
    try {
      const [
        { stdout: wifiRaw },
        { stdout: batteryRaw },
        { stdout: storageRaw },
      ] = await Promise.all([
        runBashCommand("dumpsys wifi"),
        runBashCommand("dumpsys battery"),
        runBashCommand("dympsys diskstats"),
      ]);

      wifi = parseWifiInfo(wifiRaw);
      battery = parseBattery(batteryRaw);
      storage = parseStorage(storageRaw);
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
    storage: storage || mockStorage(),
  };
}

const mockWifiInfo = (): TermuxWifiInfo => ({
  ssid: "Network SSID",
  frequency: 5180,
  speed: random(200, 500),
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
  level: random(),
  powered: true,
  status: "CHARGING",
  temperature: random(10, 20),
});

const parseBattery = (dump: string): TermuxBattery => {
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

const mockStorage = (): TermuxStorage => ({
  free: random(100000, 300000),
  total: 300000,
  writeSpeed: random(10512, 50048),
});

const parseStorage = (dump: string): TermuxStorage => {
  const parsed = parseDump(dump);

  const writeSpeedKey = Object.keys(parsed).find((key) =>
    key.startsWith("Recent Disk Write Speed"),
  );

  const dataValue = parsed["Data-Free"];
  const [free, total] = dataValue?.split(" / ").map((x) => parseInt(x.trim()));
  console.log(free, total);

  return {
    free: 1000 * (free ?? 0),
    total: 1000 * (total ?? 1),
    writeSpeed: Number(writeSpeedKey?.split(" = ")[1]) ?? 0,
  };
};

const random = (min = 0, max = 100) => Math.random() * (max - min) + min;
