import { TermuxBattery } from "./types";

export const mockBattery = (): TermuxBattery => ({
  health: "GOOD",
  percentage: Math.random() * 100,
  plugged: "PLUGGED_AC",
  status: "CHARGING",
  temperature: 20 + Math.random() * 10,
  current: 0,
});
