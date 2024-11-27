"use client";
import { humanFileSize } from "@/lib/device-info/human-file-size";
import { useDeviceInfo } from "./contexts/device-info/device-info-context";
import { ChartConfig, ChartContainer } from "./ui/chart";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { Heading } from "./heading";
import { ComponentProps } from "react";

type MemInfoProps = {
  barRadius?: number;
} & ComponentProps<"div">;

const chartConfig = {
  memory: { color: "var(--chart-5)" },
} satisfies ChartConfig;

export function MemInfo({ barRadius = 3, ...props }: MemInfoProps) {
  const { totalMem, freeMem } = useDeviceInfo();

  const chartData = [
    {
      free: freeMem,
      inUse: totalMem - freeMem,
    },
  ];

  return (
    <div {...props}>
      <div className="grid grid-cols-2 items-baseline gap-2">
        <Heading>Memory</Heading>
        <span className="text-end font-mono text-sm">
          <span className="font-bold italic">Total:</span>{" "}
          {humanFileSize(totalMem, false, 2)}
        </span>
      </div>
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

            <YAxis type="category" hide />
            <XAxis type="number" hide domain={[0, totalMem]} />
          </BarChart>
        </ChartContainer>
        <div
          className="absolute inset-0 grid grid-cols-2 items-center py-1 pl-8 pr-4 font-mono text-xs mix-blend-difference invert md:text-sm"
          style={{ color: `hsl(${chartConfig.memory.color})` }}
        >
          <span>{humanFileSize(chartData[0].inUse, false, 2)}</span>
          <span className="text-end">
            {humanFileSize(chartData[0].free, false, 2)}
          </span>
        </div>
      </div>
    </div>
  );
}
