"use server";
import { jwtCookie, jwtSecret } from "@/consts/consts";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function getAuth() {
  const cookie = (await cookies()).get(jwtCookie);
  if (cookie?.value) {
    const verified = jwt.verify(cookie.value, jwtSecret);
    if (verified) {
      return {
        isAuth: true,
        token: cookie.value,
      } as const;
    }
  }

  return {
    isAuth: false,
    token: null,
  } as const;
}
