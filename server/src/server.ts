import { cpus, freemem, uptime } from "node:os";
import WebSocket from "ws";
import {
  cpuTempInterval,
  liveInfoInterval,
  platformInfoInterval,
  wsPort as port,
} from "./consts";
import { getCpuTemp } from "./utils/cpu-temp-info";
import { getPlatformInfo } from "./utils/platform-info";
import { DeviceInfo, WSMessage } from "./types";

const wss = new WebSocket.Server({ port });

let timeStamp = Date.now();
let info: DeviceInfo | undefined;

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
      broadcast({ type: "device-info", info });
    }
  }
};

setInterval(loop, 1000);
loop();

wss.on("connection", (ws: WebSocket) => {
  console.log(`Client connected. Connections: ${wss.clients.size}`);

  ws.on("message", (data) => {
    console.log(data.toString());
  });

  ws.on("close", () => {
    console.log(`Client disconnected. Connections: ${wss.clients.size}`);
  });
});

const broadcast = (message: WSMessage) =>
  wss.clients.forEach((client) => {
    client.send(JSON.stringify(message));
  });
