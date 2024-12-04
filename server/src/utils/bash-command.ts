import { exec as execSync } from "child_process";
import util from "node:util";

const exec = util.promisify(execSync);

export const runBashCommand = async (command: string) =>
  exec(command, { shell: "/data/data/com.termux/files/usr/bin/bash" });
