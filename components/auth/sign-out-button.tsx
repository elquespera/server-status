"use client";

import { signOut } from "@/lib/auth/actions";
import { Button } from "../ui/button";
import { useAuth } from "../contexts/auth/auth-context";
import { ExitIcon } from "@radix-ui/react-icons";
import { ComponentProps } from "react";

export function SignOutButton({ ...props }: ComponentProps<typeof Button>) {
  const { setToken } = useAuth();

  return (
    <Button
      {...props}
      variant="ghost"
      size="icon"
      onClick={async () => {
        await signOut();
        setToken(null);
      }}
    >
      <ExitIcon />
    </Button>
  );
}
