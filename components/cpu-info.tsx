import { CPUData, getCPUStats } from "@/lib/get-cpu-stats";

export async function CPUInfo() {
  const info = await getCPUStats();

  return info ? (
    <ul>
      {info.cpus.map((cpu, index) => (
        <CPU key={index} info={cpu} />
      ))}
    </ul>
  ) : null;
}

type CPUProps = { info: CPUData };

function CPU({ info: { model, usage } }: CPUProps) {
  return <li>{usage.toFixed(2)}%</li>;
}
