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
  frequency_mhz: number;
  link_speed_mbps: number;
};

export type PropsWithClassName = {
  className?: string;
};
