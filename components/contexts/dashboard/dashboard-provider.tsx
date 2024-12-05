"use client";

import { PropsWithChildren, useEffect } from "react";
import { useWS } from "../ws/ws-context";
import { DashboardContext } from "./dashboard-context";

export function DashboardProvider({ children }: PropsWithChildren) {
  const { state, sendMessage } = useWS();

  useEffect(() => {
    if (state === "OPEN") {
      sendMessage({ type: "enter-room", room: "dashboard" });
      return () => sendMessage({ type: "leave-room", room: "dashboard" });
    }
  }, [sendMessage, state]);

  return (
    <DashboardContext.Provider value={{ live: state === "OPEN" }}>
      {children}
    </DashboardContext.Provider>
  );
}
