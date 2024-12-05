import { nanoid } from "nanoid";
import WebSocket from "ws";
import { User, WSRoom } from "./types";

export const users: User[] = [];

export function getUserbyId(id: string) {
  return users.find((user) => user.id === id);
}

export function addUser(ws: WebSocket) {
  const user: User = { id: nanoid(12), ws, rooms: new Set<WSRoom>() };
  users.push(user);
  return user;
}

export function removeUser(id: string) {
  const index = users.findIndex((user) => user.id === id);
  if (index >= 0) {
    return users.splice(index, 1)[0];
  }
}

export function addUserToRoom(id: string, room: WSRoom) {
  const user = getUserbyId(id);
  user?.rooms.add(room);
  return user;
}

export function removeUserFromRoom(id: string, room: WSRoom) {
  const user = getUserbyId(id);
  user?.rooms.delete(room);
  return user;
}

export function isUserInRoom(id: string, room: WSRoom) {
  const user = getUserbyId(id);
  return user?.rooms.has(room);
}

export function getUsersByRoom(room: WSRoom) {
  return users.filter((user) => user.rooms.has(room));
}

export function isUserAuth(id: string) {
  return !!getUserbyId(id)?.authToken;
}

export function authUser(id: string, authToken: string | null) {
  const user = getUserbyId(id);
  if (user) user.authToken = authToken;
}
