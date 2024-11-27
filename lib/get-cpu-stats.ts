import util from "node:util";
import { exec as execSync } from "child_process";
import { CpuInfo } from "node:os";

const exec = util.promisify(execSync);

const sudo = process.env.CPU_SUDO === "true";

export type CPUData = { model: string; speed: number; usage: number };

type CPUStats = {
  count: number;
  cpus: CPUData[];
};

export async function getCPUStats(): Promise<CPUStats | undefined> {
  const { stdout } = await exec(
    `${sudo ? "sudo " : ""}node -e "console.log(JSON.stringify(os.cpus()))"`
  );
  try {
    const parsedInfo = JSON.parse(stdout) as CpuInfo[];

    const cpus = parsedInfo.map(({ times, model, speed }) => {
      const total = Object.values(times).reduce((acc, total) => acc + total, 0);
      const usage = 100 - (100 * times.idle) / total;
      return { model, speed, usage };
    });

    return { count: cpus.length, cpus };
  } catch (error) {
    console.error(error);
  }
}
