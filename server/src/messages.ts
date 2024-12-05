import { verifyToken } from "./auth/verify-token";
import { User, WSMessage, WSRoom } from "./types";
import { addUserToRoom, authUser, removeUserFromRoom, users } from "./users";
import WebSocket from "ws";
import { logger } from "./utils/logger";

export function broadcast(message: WSMessage, room?: WSRoom) {
  users.forEach(({ ws, rooms }) => {
    if (!room || rooms.has(room)) {
      ws.send(JSON.stringify(message));
    }
  });
}

export function parseMessage(data: WebSocket.RawData, user: User) {
  try {
    const message = JSON.parse(data.toString()) as WSMessage;

    switch (message.type) {
      case "enter-room":
        addUserToRoom(user.id, message.room);
        logger(`entered room ${message.room}`, user.id);
        break;

      case "leave-room":
        removeUserFromRoom(user.id, message.room);
        logger(`left room ${message.room}`, user.id);
        break;

      case "auth-token":
        const token = verifyToken(message.token);
        authUser(user.id, token);
        logger(`${token ? "logged in" : "logged out"}.`, user.id);
        break;
    }
  } catch (e) {
    console.error("Error parsing Websocket message.");
    console.error(e);
  }
}
