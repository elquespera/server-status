type CPUData = { model: string; speed: number; usage: number };

type TermuxBattery = {
  health: "GOOD" | "POOR";
  percentage: number;
  plugged: "UNPLUGGED" | "PLUGGED_AC";
  status: "FULL" | "CHARGING" | "DISCHARGING";
  temperature: number;
  current: number;
};
