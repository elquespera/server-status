import jwt from "jsonwebtoken";
import { jwtSecret } from "../consts";

export function verifyToken(token: string | null) {
  return token && jwt.verify(token, jwtSecret) ? token : null;
}
