import { DeviceInfo } from "@/server/src/types";
import { createContext, useContext } from "react";

type TDeviceInfoContext = { live: boolean } & DeviceInfo;

const defaultDeviceInfoContext: TDeviceInfoContext = {
  live: false,
  cpus: [],
  drives: [],
  totalMem: 0,
  freeMem: 0,
  uptime: 0,
  platform: "",
  arch: "",
  osType: "",
};

export const DeviceInfoContext = createContext(defaultDeviceInfoContext);

export const useDeviceInfo = () => useContext(DeviceInfoContext);
