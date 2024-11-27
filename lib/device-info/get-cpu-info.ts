"use server";

import util from "node:util";
import { exec as execSync } from "child_process";
import { CpuInfo } from "node:os";

const exec = util.promisify(execSync);

const sudo = process.env.CPU_SUDO === "true";

export async function getCpuInfo() {
  const { stdout } = await exec(
    `${sudo ? "sudo " : ""}node -e "console.log(JSON.stringify(os.cpus()))"`,
  );
  try {
    return JSON.parse(stdout) as CpuInfo[];
  } catch (error) {
    console.error(error);
  }
}
