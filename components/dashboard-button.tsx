"use client";
import { DashboardIcon, EnterIcon } from "@radix-ui/react-icons";
import { useAuth } from "./contexts/auth/auth-context";
import { Button } from "./ui/button";
import Link from "next/link";
import { routes } from "@/consts/routes";

export function DashboardButton() {
  const { isAuth } = useAuth();

  return (
    <Button variant="ghost" size="icon" className="rounded-none" asChild>
      <Link href={routes.dashboard}>
        {isAuth ? <DashboardIcon /> : <EnterIcon />}
      </Link>
    </Button>
  );
}
