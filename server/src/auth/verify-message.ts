import { jwtSecret } from "../consts";
import { WSMessage } from "../types";
import jwt from "jsonwebtoken";

export function verifyMessage(message: WSMessage) {
  return message.type === "auth-token" &&
    message.token &&
    jwt.verify(message.token, jwtSecret)
    ? message.token
    : null;
}
