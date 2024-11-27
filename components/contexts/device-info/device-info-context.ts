import { createContext, useContext } from "react";

type TDeviceInfoContext = {
  cpus: CPUData[];
  totalMem: number;
  freeMem: number;
  uptime: number;
};

const defaultDeviceInfoContext: TDeviceInfoContext = {
  cpus: [],
  totalMem: 0,
  freeMem: 0,
  uptime: 0,
};

export const DeviceInfoContext = createContext(defaultDeviceInfoContext);

export const useDeviceInfo = () => useContext(DeviceInfoContext);
