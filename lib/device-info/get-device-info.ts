"use server";

import { exec as execSync } from "child_process";
import { CpuInfo, freemem, platform, totalmem, uptime } from "node:os";
import util from "node:util";
import { arch } from "os";
const exec = util.promisify(execSync);

const sudo = process.env.CPU_SUDO === "true";

export async function getDeviceInfo() {
  const { stdout } = await exec(
    `${sudo ? "sudo " : ""}node -e "console.log(JSON.stringify(os.cpus()))"`,
  );

  let cpus: CpuInfo[] | undefined;
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
      uptime: uptime(),
      platform: platform(),
      arch: arch(),
    };
}
