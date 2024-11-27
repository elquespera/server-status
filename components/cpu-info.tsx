"use client";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { useDeviceInfo } from "./contexts/device-info/device-info-context";

type CPUInfoProps = {
  barRadius?: number;
};

const chartConfig = {
  cpu: { color: "49 155 145" },
} satisfies ChartConfig;

export function CPUInfo({ barRadius = 3 }: CPUInfoProps) {
  const { cpus } = useDeviceInfo();
  const chartData = cpus.map(({ usage }) => ({
    usage,
    available: 100 - usage,
  }));

  return (
    <div className="relative overflow-hidden pl-4">
      <ChartContainer config={chartConfig} className="w-full max-w-screen-sm">
        <BarChart
          className="relative"
          accessibilityLayer
          data={chartData}
          layout="vertical"
          barSize={50}
        >
          <Bar
            layout="vertical"
            stackId={0}
            dataKey="usage"
            fill="rgb(var(--color-cpu))"
            radius={[barRadius, 0, 0, barRadius]}
          />
          <Bar
            layout="vertical"
            stackId={0}
            dataKey="available"
            fill="rgb(var(--color-cpu)/0.3)"
            radius={[0, barRadius, barRadius, 0]}
          />

          <YAxis dataKey="usage" type="category" hide />
          <XAxis type="number" dataKey="usage" domain={[0, 100]} hide />
        </BarChart>
      </ChartContainer>
      <div className="absolute inset-0 grid items-center py-1 pl-8 font-mono text-xs text-[rgb(206_100_110)] mix-blend-difference md:text-sm">
        {cpus.map(({ usage }, index) => (
          <span key={index}>{Math.round(usage * 10) / 10}</span>
        ))}
      </div>
      <div className="absolute inset-0 grid w-8 items-center justify-end px-4 py-1 font-mono text-xs text-muted-foreground md:text-sm">
        {cpus.map((_, index) => (
          <span key={index} className="text-end">
            {index + 1}
          </span>
        ))}
      </div>
    </div>
  );
}
