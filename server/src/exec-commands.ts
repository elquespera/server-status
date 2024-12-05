import { ChildProcessWithoutNullStreams, spawn } from "node:child_process";

let proc: ChildProcessWithoutNullStreams | null = null;

export function spawnProcess(command: string, args: string[] = []) {
  if (proc) return;

  proc = spawn(command, args);

  proc.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
  });

  proc.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });

  proc.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
    proc = null;
  });
}
