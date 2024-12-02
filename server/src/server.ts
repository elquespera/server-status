import { cpus, freemem, uptime } from "node:os";
import WebSocket from "ws";
import {
  cpuTempInterval,
  liveInfoInterval,
  platformInfoInterval,
  wsPort as port,
} from "./consts";
import { getCpuTemp } from "./cpu-temp-info";
import { getPlatformInfo } from "./platform-info";
import { DeviceInfo } from "./types";

const wss = new WebSocket.Server({ port });

wss.on("connection", (ws: WebSocket) => {
  console.log(`Client connected. Connections: ${wss.clients.size}`);

  ws.on("close", () => {
    console.log(`Client disconnected. Connections: ${wss.clients.size}`);
  });
});

(() => {
  let timeStamp = Date.now();
  let info: DeviceInfo | undefined;

  const broadcast = () =>
    wss.clients.forEach((client) => {
      client.send(JSON.stringify(info));
    });

  const loop = async () => {
    if (wss.clients.size) {
      const ticks = Math.floor((Date.now() - timeStamp) / 1000);

      let newInfo: Partial<DeviceInfo> | undefined;

      if (ticks % liveInfoInterval === 0) {
        newInfo = {
          ...info,
          cpus: cpus(),
          freeMem: freemem(),
          uptime: uptime(),
        };
      }

      if (ticks % cpuTempInterval === 0) {
        const cpuTemp = await getCpuTemp();
        newInfo = { ...info, ...newInfo, cpuTemp };
      }

      if (ticks % platformInfoInterval === 0) {
        const termuxInfo = await getPlatformInfo();
        newInfo = { ...info, ...newInfo, ...termuxInfo };
      }

      if (newInfo) {
        info = newInfo as DeviceInfo;
        broadcast();
      }
    }
  };

  setInterval(loop, 1000);
  loop();
})();
