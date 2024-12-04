import WebSocket from "ws";
import { wsPort as port } from "./consts";
import { WSMessage } from "./types";
import { updateDeviceInfo } from "./update-device-info";
import { addUser, removeUser } from "./users";

export const wss = new WebSocket.Server({ port });

wss.on("connection", (ws: WebSocket) => {
  const user = addUser();

  const log = (connect = true) =>
    console.log(
      `Client ${user.id} ${connect ? "" : "dis"}connected.\tOpen connections: ${wss.clients.size}`,
    );

  log();

  ws.on("message", (data) => {
    console.log(data.toString());
  });

  ws.on("close", () => {
    log(false);
    removeUser(user.id);
  });
});

updateDeviceInfo();

export const broadcast = (message: WSMessage) =>
  wss.clients.forEach((client) => {
    client.send(JSON.stringify(message));
  });
