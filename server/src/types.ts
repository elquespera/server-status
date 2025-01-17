import WebSocket from "ws";

export type CPUData = { model: string; speed: number; usage: number };

export type StorageInfo = {
  label: string;
  mount: string;
  total: number;
  used: number;
  available: number;
};

export type NetworkInfo = {
  host: string;
  distance: number;
  ping: number;
  downloadSpeed: string;
  uploadSpeed: string;
};

export type DeviceInfo = {
  totalMem: number;
  cpus: CPUData[];
  freeMem: number;
  uptime: number;
  platform: string;
  arch: string;
  osType: string;
  storage: StorageInfo[];
  network?: NetworkInfo;

  battery?: TermuxBattery;
  wifi?: TermuxWifiInfo;
  cpuTemp?: number[];
};

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
