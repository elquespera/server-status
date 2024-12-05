"use client";
import { routes } from "@/consts/routes";
import { BarChartIcon, DashboardIcon, EnterIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "./contexts/auth/auth-context";
import { Button } from "./ui/button";

export function DashboardButton() {
  const { isAuth } = useAuth();
  const pathname = usePathname();

  return (
    <Button variant="ghost" size="icon" className="rounded-none" asChild>
      <Link
        href={
          isAuth
            ? pathname === routes.home
              ? routes.dashboard
              : routes.home
            : pathname === routes.login
              ? routes.home
              : routes.login
        }
      >
        {isAuth ? (
          pathname === routes.home ? (
            <DashboardIcon />
          ) : (
            <BarChartIcon />
          )
        ) : pathname === routes.login ? (
          <BarChartIcon />
        ) : (
          <EnterIcon />
        )}
      </Link>
    </Button>
  );
}
