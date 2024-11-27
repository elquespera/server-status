"use server";

import { freemem, totalmem, uptime } from "node:os";

export async function getDeviceInfo() {
  return {
    totalMem: totalmem(),
    freeMem: freemem(),
    uptime: uptime(),
  };
}
