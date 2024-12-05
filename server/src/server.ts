import WebSocket from "ws";
import { wsPort as port } from "./consts";
import { parseMessage } from "./messages";
import { updateDeviceInfo } from "./update-device-info";
import { addUser, removeUser } from "./users";
import { logger } from "./utils/logger";
import chalk from "chalk";

export const wss = new WebSocket.Server({ port });

wss.on("connection", (ws: WebSocket) => {
  const logConnections = () =>
    logger(`Connections: ${chalk.bold(wss.clients.size)}`);

  const user = addUser(ws);
  logger(chalk.cyan("connected."), user.id);
  logConnections();

  ws.on("message", (data) => parseMessage(data, user));

  ws.on("close", () => {
    logger(chalk.redBright("disconnected."), user.id);
    logConnections();
    removeUser(user.id);
  });
});

updateDeviceInfo();
