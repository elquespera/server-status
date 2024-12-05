import WebSocket from "ws";
import { wsPort as port } from "./consts";
import { WSMessage } from "./types";
import { updateDeviceInfo } from "./update-device-info";
import { addUser, removeUser, upgradeUser } from "./users";
import { verifyMessage } from "./auth/verify-message";

export const wss = new WebSocket.Server({ port });

wss.on("connection", (ws: WebSocket) => {
  const user = addUser();

  const log = (connect = true) =>
    console.log(
      `User ${user.id} ${connect ? "" : "dis"}connected.\tOpen connections: ${wss.clients.size}`,
    );

  log();

  ws.on("message", (data) => {
    try {
      const parsedMessage = JSON.parse(data.toString()) as WSMessage;

      const token = verifyMessage(parsedMessage);
      upgradeUser(user.id, token);
      console.log(`User ${user.id} ${token ? "logged in" : "logged out"}.`);
    } catch (e) {
      console.error("Error parsing Websocket message.");
      console.error(e);
    }
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
