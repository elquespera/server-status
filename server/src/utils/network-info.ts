import { mockNetwork } from "../consts";
import { NetworkInfo } from "../types";
import { runBashCommand } from "./bash-command";

export async function getNetworkInfo(): Promise<NetworkInfo | undefined> {
  try {
    let rawInfo = mockInfo;
    if (!mockNetwork) {
      const { stdout } = await runBashCommand("speedtest --secure");
      rawInfo = stdout;
    }

    const host = rawInfo.match(/(?<=Hosted by ).+(?=\[)/)?.[0];
    const distance = rawInfo.match(/\d+\.*\d*(?= km)/)?.[0];
    const ping = rawInfo.match(/\d+\.*\d*(?= ms)/)?.[0];
    const downloadSpeed = rawInfo.match(/(?<=Download: )\d+\.*\d*.*/)?.[0];
    const uploadSpeed = rawInfo.match(/(?<=Upload: )\d+\.*\d*.*/)?.[0];

    if (ping && distance && host && downloadSpeed && uploadSpeed) {
      const result: NetworkInfo = {
        host,
        distance: parseFloat(distance),
        ping: parseFloat(ping),
        downloadSpeed,
        uploadSpeed,
      };

      console.log(result);
      return result;
    }
  } catch (error) {
    console.error(error);
  }
}

const mockInfo = `Retrieving speedtest.net configuration...
Testing from StarNet (178.255.168.18)...
Retrieving speedtest.net server list...
Selecting best server based on ping...
Hosted by dewDrive - Cloud Backup (Falkenstein) [145.05 km]: 41.211 ms
Testing download speed................................................................................
Download: 311.69 Mbit/s
Testing upload speed......................................................................................................
Upload: 196.09 Mbit/s`;
