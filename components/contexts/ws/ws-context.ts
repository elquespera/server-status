import { WSMessage } from "@/server/src/types";
import { createContext, useContext } from "react";

export type WSState = "CLOSED" | "OPEN";

type TWSContext = {
  state: WSState;
  message: WSMessage | null;
  sendMessage: (message: WSMessage) => void;
};

const defaultWSContext: TWSContext = {
  state: "CLOSED",
  message: null,
  sendMessage: () => {},
};

export const WSContext = createContext(defaultWSContext);

export const useWS = () => useContext(WSContext);
