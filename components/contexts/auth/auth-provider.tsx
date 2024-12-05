"use client";
import { PropsWithChildren, useEffect, useState } from "react";
import { AuthContext } from "./auth-context";
import { getAuth } from "@/lib/auth/auth";

export function AuthProvider({ children }: PropsWithChildren) {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      setToken((await getAuth()).token);
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken, isAuth: !!token }}>
      {children}
    </AuthContext.Provider>
  );
}
