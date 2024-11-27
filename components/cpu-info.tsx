import { getCPUStats } from "@/lib/get-cpu-stats";

export async function CPUInfo() {
  const info = await getCPUStats();

  return <div>{JSON.stringify(info, null, 2)}</div>;
}
