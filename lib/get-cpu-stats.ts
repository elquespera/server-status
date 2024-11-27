import util from "node:util";
import { exec as execSync } from "child_process";
import { CpuInfo } from "node:os";

const exec = util.promisify(execSync);

const sudo = process.env.CPU_SUDO === "true";

export async function getCPUStats() {
  const { stdout } = await exec(
    `${sudo ? "sudo " : ""}node -e "console.log(JSON.stringify(os.cpus()))"`
  );
  try {
    const parsedInfo = JSON.parse(stdout) as CpuInfo;
    return parsedInfo;
  } catch (error) {
    console.error(error);
  }
}
