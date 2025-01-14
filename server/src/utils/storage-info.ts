import { driveMounts } from "../consts";
import { StorageInfo } from "../types";
import { runBashCommand } from "./bash-command";

export async function getStorageInfo(): Promise<StorageInfo[]> {
  try {
    const { stdout: dfRaw } = await runBashCommand("df");
    const lines = dfRaw.split("\n").map((line) => line.split(/\s+/));

    const result: StorageInfo[] = driveMounts
      .map(({ label, mount }) => {
        const line = lines.find((item) => item[5] === mount);
        if (line)
          return {
            label,
            mount,
            total: parseFloat(line[1]) * 1024,
            used: parseFloat(line[2]) * 1024,
            available: parseFloat(line[3]) * 1024,
          };
      })
      .filter((x) => !!x);

    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }

  return [];
}
