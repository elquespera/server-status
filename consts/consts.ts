export const cpuCores = Number(process.env.NEXT_PUBLIC_CPU_CORES) || 8;
export const cpuModel = process.env.NEXT_PUBLIC_CPU_MODEL || "";

export const jwtCookie = "server_status_jwt_token_slwersdf";
export const jwtSecret = process.env.JWT_SECRET || "";
