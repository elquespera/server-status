import { useEffect, useState } from "react";

const wsURL = process.env.NEXT_PUBLIC_WS_URL!;

export function useWebsocket() {
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let ws: WebSocket | null = null;

    const connect = () => {
      if (ws) return;

      try {
        console.log(`Reconnecting to server...`);
        ws = new WebSocket(wsURL);

        ws.onopen = () => {
          console.log("Connection opened!");
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

    const timer = setInterval(connect, 1000);
    connect();

    return () => {
      clearInterval(timer);
      ws?.close();
    };
  }, []);

  return { message, open };
}
