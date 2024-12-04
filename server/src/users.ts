import { nanoid } from "nanoid";
import { User } from "./types";

export const users: User[] = [];

export function addUser() {
  const user = { id: nanoid(12) };
  users.push(user);
  return user;
}

export function removeUser(id: string) {
  const index = users.findIndex((user) => user.id === id);
  if (index >= 0) {
    return users.splice(index, 1)[0];
  }
}
