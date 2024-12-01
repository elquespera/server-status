import {
  cpus,
  freemem,
  type as osType,
  platform,
  totalmem,
  uptime,
} from "node:os";
import { arch } from "os";

export function fetchDeviceInfo() {
  return {
    cpus: cpus(),
    totalMem: totalmem(),
    freeMem: freemem(),
    uptime: uptime(),
    platform: platform(),
    arch: arch(),
    osType: osType(),
  };
}
