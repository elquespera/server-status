"use client";
import { useDeviceInfo } from "./contexts/device-info/device-info-context";

export function CPUInfo() {
  const { cpus } = useDeviceInfo();

  return (
    <ul>
      {cpus.map((cpu, index) => (
        <CPU key={index} info={cpu} />
      ))}
    </ul>
  );
}

type CPUProps = { info: CPUData };

function CPU({ info: { usage } }: CPUProps) {
  return <li>{usage.toFixed(2)}%</li>;
}
