import { WebSocketServer } from "ws";

const cpuInterval = 2;
const termuxInterval = 6;

import { fetchDeviceInfo } from "./fetch-device-info";
import { DeviceInfo } from "./types";
import { fetchTermuxInfo } from "./termux-info";

export function refreshDeviceInfo(wss: WebSocketServer) {
  let timeStamp = Date.now();
  let info: DeviceInfo | undefined;

  const broadcast = () =>
    wss.clients.forEach((client) => {
      client.send(JSON.stringify(info));
    });

  const loop = async () => {
    if (wss.clients.size) {
      const ticks = Math.floor((Date.now() - timeStamp) / 1000);

      let newInfo: DeviceInfo | undefined;

      if (ticks % cpuInterval === 0) {
        const deviceInfo = fetchDeviceInfo();
        newInfo = { ...info, ...deviceInfo };
      }

      if (ticks % termuxInterval === 0 && info) {
        const termuxInfo = await fetchTermuxInfo();
        newInfo = { ...info, ...termuxInfo };
      }

      if (newInfo) {
        info = newInfo;
        broadcast();
      }
    }
  };

  setInterval(loop, 1000);
  loop();
}
