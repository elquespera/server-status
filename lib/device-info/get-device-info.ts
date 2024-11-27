"use server";

import { exec as execSync } from "child_process";
import { CpuInfo, freemem, platform, totalmem, uptime } from "node:os";
import util from "node:util";
import { arch } from "os";
const exec = util.promisify(execSync);

const sudo = process.env.CPU_SUDO === "true";
const isTermux = process.env.IS_TERMUX === "true";

export async function getDeviceInfo() {
  let cpus: CpuInfo[] | undefined;
  let battery: TermuxBattery | undefined;

  try {
    const { stdout: cpuRaw } = await exec(
      `${sudo ? "sudo " : ""}node -e "console.log(JSON.stringify(os.cpus()))"`,
    );
    cpus = JSON.parse(cpuRaw);
  } catch (error) {
    console.error(error);
  }

  if (isTermux)
    try {
      const { stdout: batteryRaw } = await exec("termux-battery-status");
      battery = JSON.parse(batteryRaw);
      // battery = mockBattery;
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
      battery,
    };
}

// const mockBattery: TermuxBattery = {
//   health: "GOOD",
//   percentage: 99,
//   plugged: "UNPLUGGED",
//   status: "FULL",
//   temperature: 28,
//   current: 0,
// };
