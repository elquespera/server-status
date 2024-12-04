"use client";

import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { WSContext, WSState } from "./ws-context";
import { WSMessage } from "@/server/src/types";

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
  const [message, setMessage] = useState<WSMessage | null>(null);
  const wsRef = useRef<WebSocket | null>(null);

  const sendMessage = (message: WSMessage) => {
    wsRef.current?.send(JSON.stringify(message));
  };

  useEffect(() => {
    const connect = () => {
      if (wsRef.current) return;

      try {
        wsRef.current = new WebSocket(wsURL);

        wsRef.current.onopen = () => {
          setState("OPEN");
        };

        wsRef.current.onclose = () => {
          wsRef.current = null;
          setState("CLOSED");
        };

        wsRef.current.onmessage = (event) => {
          try {
            const parsedMessage = JSON.parse(event.data) as WSMessage;
            setMessage(parsedMessage);
          } catch {
            console.error("Error parsing Websocket message.");
          }
        };
      } catch {
        console.log(`Couldn't connect server.`);
      }
    };

    const timer = setInterval(connect, pollInterval);
    connect();

    return () => {
      clearInterval(timer);
      wsRef.current?.close();
    };
  }, [wsURL, pollInterval]);

  return (
    <WSContext.Provider value={{ state, message, sendMessage }}>
      {children}
    </WSContext.Provider>
  );
}
