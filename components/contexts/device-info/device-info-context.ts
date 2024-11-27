import { createContext, useContext } from "react";

type TDeviceInfoContext = {
  cpus: CPUData[];
};

const defaultDeviceInfoContext: TDeviceInfoContext = {
  cpus: [],
};

export const DeviceInfoContext = createContext(defaultDeviceInfoContext);

export const useDeviceInfo = () => useContext(DeviceInfoContext);
