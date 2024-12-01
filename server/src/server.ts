import { randomUUID } from "crypto";
import WebSocket from "ws";
import { refreshDeviceInfo } from "./device-info";

const port = Number(process.env.WS_PORT);

const wss = new WebSocket.Server({ port });

const clients: string[] = [];

wss.on("connection", (ws: WebSocket) => {
  const id = addClient();
  console.log(`Client connected: ${id}`);

  ws.on("message", (message: string) => {
    console.log(`Received message: ${message}`);
    ws.send(`Server received your message: ${message}`);
  });

  ws.on("close", () => {
    console.log(`Client disconnected: ${id}`);
    removeClient(id);
  });
});

refreshDeviceInfo(wss);

const addClient = () => {
  const id = randomUUID();
  clients.push(id);
  return id;
};

const removeClient = (id: string) => {
  const index = clients.indexOf(id);
  if (index >= 0) clients.splice(index, 1);
};
