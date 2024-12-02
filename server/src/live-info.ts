import { cpus, freemem, uptime } from "node:os";
import { runBashCommand } from "./bash-command";
import { isTermux } from "./consts";

export async function getLiveInfo() {
  let cpuTemp: number[] | undefined;

  if (isTermux) {
    try {
      const { stdout: cpuTempRaw } = await runBashCommand(
        `cat ${thermalPath}{28..33}/temp ${thermalPath}{36..39}/temp`,
      );

      cpuTemp = parseCpuTemp(cpuTempRaw);
    } catch (error) {
      console.error(error);
    }
  }

  return {
    cpus: cpus(),
    freeMem: freemem(),
    uptime: uptime(),
    cpuTemp: cpuTemp || mockCpuTemp(),
  };
}

const thermalPath = "/sys/class/thermal/thermal_zone";

export const mockCpuTemp = () =>
  Array.from({ length: 20 })
    .fill("")
    .map(() => Math.random() * 15 + 20);

export const parseCpuTemp = (dump: string) => {
  const rawTemps = dump.split(/\n/).map(Number);

  return [
    ...rawTemps.slice(0, 6),
    (rawTemps[6] + rawTemps[7]) / 2,
    (rawTemps[8] + rawTemps[9]) / 2,
  ].map((n) => n / 1000);
};
