import { cn } from "@/lib/utils";
import { ComponentProps, ReactNode } from "react";

type FilledBarProps = {
  color?: string;
  filled?: number;
  total?: number;
  index?: number;
  startDecoration?: ReactNode;
  endDecoration?: ReactNode;
} & ComponentProps<"div">;

export function FilledBar({
  className,
  color = "var(--cpu)",
  filled = 50,
  total = 100,
  index,
  startDecoration,
  endDecoration,
  ...props
}: FilledBarProps) {
  const filledPercentage = Math.max(
    0,
    Math.min(100, (filled / total) * 100 || 0),
  );

  return (
    <div
      className="grid grid-cols-[2ch,1fr] gap-2 font-mono text-xs md:text-sm"
      style={{ color: `hsl(${color})` }}
    >
      <div className="flex w-4 items-center justify-end">
        {typeof index === "number" ? index : null}
      </div>
      <div
        className={cn(
          "relative h-6 w-full overflow-hidden rounded-[3px] transition-all md:h-8 md:rounded-sm",
          className,
        )}
        style={{
          backgroundColor: `hsl(${color}/0.2)`,
        }}
        {...props}
      >
        <div
          className="absolute inset-0 transition-transform duration-1000"
          style={{
            backgroundColor: `hsl(${color})`,
            transform: `translateX(-${100 - filledPercentage}%)`,
          }}
        />
        <div className="absolute inset-0 flex items-center justify-between gap-2 px-2 mix-blend-difference md:px-3">
          <span>
            {startDecoration ? (
              startDecoration
            ) : (
              <>
                {filledPercentage.toFixed(1)}
                <span className="text-[0.875em]">%</span>
              </>
            )}
          </span>
          {endDecoration && <span>{endDecoration}</span>}
        </div>
      </div>
    </div>
  );
}
