import { exec as execSync } from "child_process";
import util from "node:util";

const exec = util.promisify(execSync);
const defaultShell = process.env.SHELL;

export const runBashCommand = async (
  command: string,
  shell = defaultShell,
  maxBuffer = 10 * 1024 * 1024,
) =>
  exec(command, {
    shell,
    maxBuffer,
  });
