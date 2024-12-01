import { CPUData, OSInfo } from "@/server/src/types";
import { createContext, useContext } from "react";

type TDeviceInfoContext = { cpus: CPUData[] } & OSInfo;

const defaultDeviceInfoContext: TDeviceInfoContext = {
  cpus: [],
  totalMem: 0,
  freeMem: 0,
  uptime: 0,
  platform: "",
  arch: "",
  osType: "",
};

export const DeviceInfoContext = createContext(defaultDeviceInfoContext);

export const useDeviceInfo = () => useContext(DeviceInfoContext);
