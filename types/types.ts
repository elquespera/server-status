type CPUData = { model: string; speed: number; usage: number };

type TermuxBattery = {
  health: "GOOD" | "POOR";
  percentage: number;
  plugged: "PLUGGED_AC";
  status: "FULL" | "EMPTY" | "CHARGING";
  temperature: number;
  current: number;
};
