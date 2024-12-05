"use client";
import { PropsWithChildren, useEffect, useState } from "react";
import { AuthContext } from "./auth-context";
import { getAuth } from "@/lib/auth/auth";
import { useWS } from "../ws/ws-context";

export function AuthProvider({ children }: PropsWithChildren) {
  const { sendMessage, state } = useWS();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      setToken((await getAuth()).token);
    })();
  }, []);

  useEffect(() => {
    if (state === "CLOSED") return;
    sendMessage({ type: "auth-token", token });
  }, [token, state, sendMessage]);

  return (
    <AuthContext.Provider value={{ token, setToken, isAuth: !!token }}>
      {children}
    </AuthContext.Provider>
  );
}
