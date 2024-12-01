import { useEffect, useState } from "react";

const wsURL = process.env.NEXT_PUBLIC_WS_URL!;

export function useWebsocket() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const ws = new WebSocket(wsURL);

    ws.onopen = () => {
      console.log("Opened!");
    };

    ws.onmessage = (event) => {
      setMessage(event.data);
    };

    return () => ws.close();
  }, []);

  return { message };
}
