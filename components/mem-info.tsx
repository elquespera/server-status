"use client";
import { humanFileSize } from "@/lib/device-info/human-file-size";
import { useDeviceInfo } from "./contexts/device-info/device-info-context";
import { ChartConfig, ChartContainer } from "./ui/chart";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

type MemInfoProps = {
  barRadius?: number;
};

const chartConfig = {
  memory: { color: "var(--chart-5)" },
} satisfies ChartConfig;

export function MemInfo({ barRadius = 3 }: MemInfoProps) {
  const { totalMem, freeMem } = useDeviceInfo();

  const chartData = [
    {
      free: freeMem,
      inUse: totalMem - freeMem,
    },
  ];

  return (
    <div className="relative w-full overflow-hidden pl-4">
      <ChartContainer config={chartConfig} className="h-12 w-full">
        <BarChart data={chartData} layout="vertical" barSize={30}>
          <Bar
            stackId={0}
            dataKey="inUse"
            fill="hsl(var(--color-memory))"
            radius={[barRadius, 0, 0, barRadius]}
          />
          <Bar
            stackId={0}
            dataKey="free"
            fill="hsl(var(--color-memory)/0.3)"
            radius={[0, barRadius, barRadius, 0]}
          />

          <YAxis dataKey="free" type="category" hide />
          <XAxis dataKey="free" type="number" hide />
        </BarChart>
      </ChartContainer>
      <div
        className="absolute inset-0 grid grid-cols-2 items-center py-1 pl-8 pr-4 font-mono text-xs mix-blend-difference invert md:text-sm"
        style={{ color: `hsl(${chartConfig.memory.color})` }}
      >
        <span>{humanFileSize(chartData[0].inUse, false, 2)}</span>
        <span className="text-end">{humanFileSize(totalMem, false, 2)}</span>
      </div>
    </div>
  );
}
