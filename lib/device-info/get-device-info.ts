"use server";

import util from "node:util";
import { exec as execSync } from "child_process";
import { CpuInfo } from "node:os";
import { freemem, totalmem, uptime } from "node:os";
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
    };
}
