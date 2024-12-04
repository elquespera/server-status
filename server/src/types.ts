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
  storage?: TermuxStorage;
  cpuTemp?: number[];
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

export type TermuxStorage = {
  free: number;
  total: number;
  writeSpeed: number;
};

export type PropsWithClassName = {
  className?: string;
};

export type WSMessage =
  | {
      type: "device-info";
      info: DeviceInfo;
    }
  | { type: "auth-token"; token: string };

export type User = { id: string; authToken?: string };
