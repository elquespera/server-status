"use client";
import { PropsWithChildren } from "react";
import { AuthContext } from "./auth-context";

export function AuthProvider({ children }: PropsWithChildren) {
  return (
    <AuthContext.Provider value={{ isAuth: false }}>
      {children}
    </AuthContext.Provider>
  );
}
