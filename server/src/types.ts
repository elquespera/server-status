import type { CpuInfo } from "node:os";
import WebSocket from "ws";

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

export type WSRoom = "device-info" | "dashboard";

export type WSMessage =
  | {
      type: "device-info";
      info: DeviceInfo;
    }
  | { type: "auth-token"; token: string | null }
  | { type: "enter-room"; room: WSRoom }
  | { type: "leave-room"; room: WSRoom };

export type User = {
  id: string;
  ws: WebSocket;
  authToken?: string | null;
  rooms: Set<WSRoom>;
};
