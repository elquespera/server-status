"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import { WSContext, WSState } from "./ws-context";

type WSProviderProps = {
  pollInterval?: number;
  wsURL?: string;
} & PropsWithChildren;

export function WSProvider({
  wsURL = process.env.NEXT_PUBLIC_WS_URL!,
  pollInterval = 2000,
  children,
}: WSProviderProps) {
  const [state, setState] = useState<WSState>("CLOSED");
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    let ws: WebSocket | null = null;

    const connect = () => {
      if (ws) return;

      try {
        ws = new WebSocket(wsURL);

        ws.onopen = () => {
          setState("OPEN");
        };

        ws.onclose = () => {
          ws = null;
          setState("CLOSED");
        };

        ws.onmessage = (event) => {
          setMessage(event.data);
        };
      } catch {
        console.log(`Couldn't connect server.`);
      }
    };

    const timer = setInterval(connect, pollInterval);
    connect();

    return () => {
      clearInterval(timer);
      ws?.close();
    };
  }, [wsURL, pollInterval]);

  return (
    <WSContext.Provider value={{ state, message }}>
      {children}
    </WSContext.Provider>
  );
}
