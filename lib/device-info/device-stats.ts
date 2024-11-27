"use server";

import util from "node:util";
import { exec as execSync } from "child_process";
import { CpuInfo, freemem, totalmem } from "node:os";

const exec = util.promisify(execSync);

const sudo = process.env.CPU_SUDO === "true";

export async function getDeviceStats() {
  let cpus: CpuInfo[] | undefined;
  const { stdout } = await exec(
    `${sudo ? "sudo " : ""}node -e "console.log(JSON.stringify(os.cpus()))"`
  );
  try {
    cpus = JSON.parse(stdout) as CpuInfo[];
  } catch (error) {
    console.error(error);
  }

  if (cpus)
    return {
      cpus,
      totalMem: totalmem(),
      freeMem: freemem(),
    };
}
