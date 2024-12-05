import { createContext, useContext } from "react";

type TDashboardContext = {
  live: boolean;
};

const defaultDashboardContext: TDashboardContext = {
  live: false,
};

export const DashboardContext = createContext(defaultDashboardContext);

export const useDashboard = () => useContext(DashboardContext);
