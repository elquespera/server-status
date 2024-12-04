import { useEffect, useState } from "react";

const wsURL = process.env.NEXT_PUBLIC_WS_URL!;

export function useWebsocket(pollInterval = 2000) {
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let ws: WebSocket | null = null;

    const connect = () => {
      if (ws) return;

      try {
        ws = new WebSocket(wsURL);

        ws.onopen = () => {
          setOpen(true);
        };

        ws.onclose = () => {
          ws = null;
          setOpen(false);
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
  }, [pollInterval]);

  return { message, open };
}
