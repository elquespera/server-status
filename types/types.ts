// export type CPUData = { model: string; speed: number; usage: number };

// export type OSInfo = {
//   totalMem: number;
//   freeMem: number;
//   uptime: number;
//   platform: string;
//   arch: string;
//   osType: string;
//   battery?: TermuxBattery;
//   wifi?: TermuxWifiInfo;
// };

// export type TermuxBattery = {
//   health: "GOOD" | "POOR";
//   percentage: number;
//   plugged: "UNPLUGGED" | "PLUGGED_AC";
//   status: "FULL" | "CHARGING" | "DISCHARGING";
//   temperature: number;
//   current: number;
// };

// export type TermuxWifiInfo = {
//   frequency_mhz: number;
//   link_speed_mbps: number;
// };

export type PropsWithClassName = {
  className?: string;
};
