import type { CpuInfo } from "node:os";

export function calcCpuUsage(prev: CpuInfo["times"], curr: CpuInfo["times"]) {
  const getTotal = (times: CpuInfo["times"]) =>
    Object.values(times).reduce((acc, total) => acc + total, 0);

  const total = getTotal(curr) - getTotal(prev);
  const idle = curr.idle - prev.idle;

  const usage = (1 - idle / total) * 100;
  return usage;
}
