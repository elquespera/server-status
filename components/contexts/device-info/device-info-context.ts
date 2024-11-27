import { createContext, useContext } from "react";

type TDeviceInfoContext = {
  cpus: CPUData[];
  totalMem: number;
  freeMem: number;
  uptime: number;
  platform: string;
  arch: string;
  battery?: TermuxBattery;
};

const defaultDeviceInfoContext: TDeviceInfoContext = {
  cpus: [],
  totalMem: 0,
  freeMem: 0,
  uptime: 0,
  platform: "",
  arch: "",
};

export const DeviceInfoContext = createContext(defaultDeviceInfoContext);

export const useDeviceInfo = () => useContext(DeviceInfoContext);
