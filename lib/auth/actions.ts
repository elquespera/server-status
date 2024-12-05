"use server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { validateUser } from "@/server/src/auth/validate-user";
import { jwtCookie, jwtSecret } from "@/consts/consts";

export async function signIn(username: string, password: string) {
  if (validateUser(username, password)) {
    const token = jwt.sign({ username }, jwtSecret);
    await setJwtCookie(token);
    return token;
  } else {
    await deleteJwtCookie();
    return null;
  }
}

export async function signOut() {
  await deleteJwtCookie();
}

async function setJwtCookie(token: string) {
  return (await cookies()).set(jwtCookie, token, { httpOnly: true });
}

async function deleteJwtCookie() {
  return (await cookies()).delete(jwtCookie);
}
