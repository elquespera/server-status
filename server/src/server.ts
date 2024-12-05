import WebSocket from "ws";
import { wsPort as port } from "./consts";
import { parseMessage } from "./messages";
import { updateDeviceInfo } from "./update-device-info";
import { addUser, removeUser } from "./users";
import { logger } from "./utils/logger";

export const wss = new WebSocket.Server({ port });

wss.on("connection", (ws: WebSocket) => {
  const user = addUser(ws);
  logger(`connected.\tOpen connections: ${wss.clients.size}`, user.id);

  ws.on("message", (data) => parseMessage(data, user));

  ws.on("close", () => {
    logger(`disconnected.\tOpen connections: ${wss.clients.size}`, user.id);
    removeUser(user.id);
  });
});

updateDeviceInfo();
