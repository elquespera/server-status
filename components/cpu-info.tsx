import { getCPUStats } from "@/lib/get-cpu-stats";

export function CPUInfo() {
  const info = getCPUStats();

  return <div>{JSON.stringify(info, null, 2)}</div>;
}
