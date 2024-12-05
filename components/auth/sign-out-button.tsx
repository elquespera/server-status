"use client";

import { signOut } from "@/lib/auth/actions";
import { Button } from "../ui/button";
import { useAuth } from "../contexts/auth/auth-context";

export function SignOutButton() {
  const { setToken } = useAuth();

  return (
    <Button
      onClick={async () => {
        await signOut();
        setToken(null);
      }}
    >
      Sign out
    </Button>
  );
}
