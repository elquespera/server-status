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
  console.log(parsed);

  const info = {
    level: parseFloat(parsed["level"]),
    powered: [
      "AC powered",
      "USB powered",
      "Wireless powered",
      "Dock powered",
    ].some((key) => parsed[key] === "true"),
    temperature: (parseFloat(parsed["temperature"]) ?? 0) / 10,
    status: parsed["status"] === "5" ? "FULL" : parsed["status"],
  };

  console.log(info);

  return info;
};

export const batteryDump = `Current Battery Service state:
  AC powered: true
  USB powered: false
  Wireless powered: false
  Dock powered: false
  Max charging current: 2000000
  Max charging voltage: 5000000
  Charge counter: 5124003
  status: 5
  health: 2
  present: true
  level: 100
  scale: 100
  voltage: 4471
  temperature: 251
  technology: Li-ion
  AdaptiveCharging: config package:com.motorola.actions, mUpperLimit:-1, mLowerLimit:-1, mChargingDisabled:false, mLastLimitsUpdateTime:24885 (9236828 ms ago), mLastChargingStatusChangedTime:NOT SET, HAL service:motorola.hardware.health@2.0::IMotHealth@Proxy
  vbus state: false
  lpd state: false
  cid state: 0
  Full capacity: 5142000
  Full design capacity: 5142000
  charge watt: 0
  last charge watt: 0`;
