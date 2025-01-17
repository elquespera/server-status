export const wsPort = Number(process.env.WS_PORT);

export const isTermux = process.env.IS_TERMUX === "true";

export const liveInfoInterval = Number(process.env.LIVE_INFO_INTERVAL) ?? 2;

export const storageInfoInterval =
  Number(process.env.STORAGE_INFO_INTERVAL) ?? 10;

export const cpuTempInterval = Number(process.env.CPU_TEMP_INTERVAL) ?? 10;

export const networkInfoInterval =
  Number(process.env.NETWORK_INFO_INTERVAL) ?? 600;

export const mockNetwork = process.env.MOCK_NETWORK === "true";

export const platformInfoInterval =
  Number(process.env.PLATFORM_INFO_INTERVAL) ?? 20;

export const driveMounts = (process.env.DISK_MOUNTS || "")
  .split(",")
  .map((entry, id) => {
    const [label, mount] = entry.split(":");
    return { id, label, mount };
  });

export const batteryStatuses: Record<string, string> = {
  "2": "CHARGING",
  "3": "DISCHARGING",
  "5": "FULL",
};

export const jwtSecret = process.env.JWT_SECRET || "";
