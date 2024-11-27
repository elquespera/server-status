import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4";
} & ComponentProps<"h3">;

export function Heading({
  as = "h3",
  className,
  children,
  ...props
}: HeadingProps) {
  const Comp = as;

  return (
    <Comp
      className={cn(
        "text-base font-bold tracking-tighter md:text-lg",
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
