import { parseDump } from "./parse-dump";
import { TermuxWifiInfo } from "./types";

export const mockWifiInfo = (): TermuxWifiInfo => ({
  ssid: "",
  frequency: 5180,
  speed: Math.random() * 300 + 200,
});

export const parseWifiInfo = (dump: string): TermuxWifiInfo => {
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
