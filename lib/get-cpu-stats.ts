import os from "os";

export function getCPUStats() {
  return os.cpus();
}
