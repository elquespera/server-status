"use client";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { ComponentProps, Fragment } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { useDeviceInfo } from "./contexts/device-info/device-info-context";
import { Heading } from "./heading";

type CPUInfoProps = {
  barRadius?: number;
} & ComponentProps<"div">;

const chartConfig = {
  cpu: { color: "var(--chart-2)" },
} satisfies ChartConfig;

export function CPUInfo({ barRadius = 3, ...props }: CPUInfoProps) {
  const { cpus } = useDeviceInfo();
  const chartData = cpus.map(({ usage }) => ({
    usage,
    available: 100 - usage,
  }));

  const cpuModel = cpus[0]?.model === "unknown" ? "" : cpus[0]?.model;
  const cpuCount = cpus.length;

  return (
    <div {...props}>
      <div className="grid grid-cols-[auto,1fr] items-baseline gap-2">
        <Heading>CPU</Heading>
        {cpuCount && (
          <p className="break truncate text-end font-mono text-xs md:text-sm">
            {cpuCount}x {cpuModel}
          </p>
        )}
      </div>
      <div className="relative w-full overflow-hidden pl-4">
        <ChartContainer config={chartConfig} className="w-full">
          <BarChart data={chartData} layout="vertical" barSize={50}>
            <Bar
              stackId={0}
              dataKey="usage"
              fill="hsl(var(--color-cpu))"
              radius={[barRadius, 0, 0, barRadius]}
            />
            <Bar
              stackId={0}
              dataKey="available"
              fill="hsl(var(--color-cpu)/0.3)"
              radius={[0, barRadius, barRadius, 0]}
            />

            <YAxis dataKey="usage" type="category" hide />
            <XAxis dataKey="usage" type="number" domain={[0, 100]} hide />
          </BarChart>
        </ChartContainer>
        <div
          className="absolute inset-0 grid grid-cols-[2.5em,1fr,auto] items-center py-1 pr-4 font-mono text-xs mix-blend-difference invert md:text-sm"
          style={{ color: `hsl(${chartConfig.cpu.color})` }}
        >
          {cpus.map(({ usage, speed }, index) => (
            <Fragment key={index}>
              <span>{index + 1}</span>
              <span>{usage.toFixed(1)}</span>
              <span>{(speed / 1000).toFixed(2)}GHz</span>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
