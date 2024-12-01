import { WebSocketServer } from "ws";

const refreshInterval = 2000;

import { fetchDeviceInfo } from "./fetch-device-info";
import { DeviceInfo } from "./types";

export function refreshDeviceInfo(wss: WebSocketServer) {
  let timeStamp = 0;
  let info: DeviceInfo | undefined;

  const refreshInfo = async () => {
    info = await fetchDeviceInfo(info, Date.now() - timeStamp);
    wss.clients.forEach((client) => {
      client.send(JSON.stringify(info));
    });
  };

  const loop = () => {
    if (Date.now() - timeStamp > refreshInterval && wss.clients.size) {
      timeStamp = Date.now();
      refreshInfo();
    }
  };

  setInterval(loop, 100);
  loop();
}
