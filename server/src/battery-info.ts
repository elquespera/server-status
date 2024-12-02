import { parseDump } from "./parseDump";
import { TermuxBattery } from "./types";

export const mockBattery = (): TermuxBattery => ({
  level: Math.random() * 100,
  powered: true,
  status: "CHARGING",
  temperature: 20 + Math.random() * 10,
});

export const parseBatteryInfo = (dump: string): TermuxBattery => {
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

const batteryStatuses: Record<string, string> = {
  "2": "CHARGING",
  "3": "DISCHARGING",
  "5": "FULL",
};
