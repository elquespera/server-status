import { runBashCommand } from "./bash-command";
import { isTermux } from "./consts";

export async function getCpuTemp() {
  if (isTermux) {
    try {
      const { stdout: cpuTempRaw } = await runBashCommand(
        `cat ${thermalPath}{28..33}/temp ${thermalPath}{36..39}/temp`,
      );

      return parseCpuTemp(cpuTempRaw);
    } catch (error) {
      console.error(error);
    }
  }

  return mockCpuTemp();
}

const thermalPath = "/sys/class/thermal/thermal_zone";

const mockCpuTemp = () =>
  Array.from({ length: 20 })
    .fill("")
    .map(() => Math.random() * 15 + 20);

const parseCpuTemp = (dump: string) => {
  const rawTemps = dump.split(/\n/).map(Number);

  return [
    ...rawTemps.slice(0, 6),
    (rawTemps[6] + rawTemps[7]) / 2,
    (rawTemps[8] + rawTemps[9]) / 2,
  ].map((n) => n / 1000);
};
