import type { CpuInfo } from "node:os";

export type CPUData = { model: string; speed: number; usage: number };

export type OSInfo = {
  totalMem: number;
  freeMem: number;
  uptime: number;
  platform: string;
  arch: string;
  osType: string;
  battery?: TermuxBattery;
  wifi?: TermuxWifiInfo;
};

export type DeviceInfo = OSInfo & { cpus: CpuInfo[] };

export type TermuxBattery = {
  level: number;
  temperature: number;
  powered: boolean;
  status: string;
};

export type TermuxWifiInfo = {
  ssid: string;
  frequency: number;
  speed: number;
};

export type PropsWithClassName = {
  className?: string;
};
