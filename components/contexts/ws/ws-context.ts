import { createContext, useContext } from "react";

export type WSState = "CLOSED" | "OPEN";

type TWSContext = {
  state: WSState;
  message: string | null;
};

const defaultWSContext: TWSContext = {
  state: "CLOSED",
  message: null,
};

export const WSContext = createContext(defaultWSContext);

export const useWS = () => useContext(WSContext);
