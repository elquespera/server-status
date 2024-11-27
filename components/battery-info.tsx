"use client";
import { LucideBatteryCharging } from "lucide-react";
import { ComponentProps } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { useDeviceInfo } from "./contexts/device-info/device-info-context";
import { Heading } from "./heading";
import { ChartConfig, ChartContainer } from "./ui/chart";

type BatteryInfoProps = {
  barRadius?: number;
} & ComponentProps<"div">;

const chartConfig = {
  battery: { color: "var(--chart-4)" },
} satisfies ChartConfig;

export function BatteryInfo({ barRadius = 3, ...props }: BatteryInfoProps) {
  const { battery } = useDeviceInfo();

  if (!battery) return null;

  const chartData = [
    {
      charged: battery.percentage,
      notCharged: 100 - battery.percentage,
    },
  ];

  return (
    <div {...props}>
      <div className="grid grid-cols-2 items-baseline gap-2">
        <div className="flex items-baseline gap-[1ch]">
          <Heading>Battery</Heading>
          <span className="text-xs italic md:text-sm">{battery.status}</span>
        </div>
        <span className="text-end font-mono text-xs md:text-sm">
          {battery.temperature.toFixed(1)}&deg;
        </span>
      </div>
      <div className="relative w-full overflow-hidden pl-4">
        <ChartContainer config={chartConfig} className="h-12 w-full">
          <BarChart data={chartData} layout="vertical" barSize={30}>
            <Bar
              stackId={0}
              dataKey="charged"
              fill="hsl(var(--color-battery))"
              radius={[barRadius, 0, 0, barRadius]}
            />
            <Bar
              stackId={0}
              dataKey="notCharged"
              fill="hsl(var(--color-battery)/0.3)"
              radius={[0, barRadius, barRadius, 0]}
            />

            <YAxis type="category" hide />
            <XAxis type="number" hide domain={[0, 100]} />
          </BarChart>
        </ChartContainer>
        <div
          className="absolute inset-0 grid grid-cols-2 items-center py-1 pl-8 pr-4 font-mono text-xs mix-blend-difference invert md:text-sm"
          style={{ color: `hsl(${chartConfig.battery.color})` }}
        >
          <span>{battery.percentage.toFixed(0)}%</span>
          <span className="justify-self-end">
            {battery.plugged === "PLUGGED_AC" ? (
              <LucideBatteryCharging />
            ) : null}
          </span>
        </div>
      </div>
    </div>
  );
}
