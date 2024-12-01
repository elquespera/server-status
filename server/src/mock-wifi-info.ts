import { TermuxWifiInfo } from "./types";

export const mockWifiInfo = (): TermuxWifiInfo => ({
  frequency_mhz: 5180,
  link_speed_mbps: Math.random() * 300 + 200,
});
