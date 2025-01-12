import { exec as execSync } from "child_process";
import util from "node:util";

const exec = util.promisify(execSync);
const maxBuffer = 10 * 1024 * 1024;

export const runBashCommand = async (command: string) =>
  exec(command, {
    shell: "/data/data/com.termux/files/usr/bin/bash",
    maxBuffer,
  });
