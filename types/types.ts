type CPUData = { model: string; speed: number; usage: number };

type OSInfo = {
  totalMem: number;
  freeMem: number;
  uptime: number;
  platform: string;
  arch: string;
  osType: string;
  battery?: TermuxBattery;
};

type TermuxBattery = {
  health: "GOOD" | "POOR";
  percentage: number;
  plugged: "UNPLUGGED" | "PLUGGED_AC";
  status: "FULL" | "CHARGING" | "DISCHARGING";
  temperature: number;
  current: number;
};
