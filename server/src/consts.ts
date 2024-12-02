export const wsPort = Number(process.env.WS_PORT);

export const isTermux = process.env.IS_TERMUX === "true";

export const liveInfoInterval = Number(process.env.LIVE_INFO_INTERVAL) ?? 2;

export const cpuTempInterval = Number(process.env.CPU_TEMP_INTERVAL) ?? 10;

export const platformInfoInterval =
  Number(process.env.PLATFORM_INFO_INTERVAL) ?? 20;

export const batteryStatuses: Record<string, string> = {
  "2": "CHARGING",
  "3": "DISCHARGING",
  "5": "FULL",
};
