"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { routes } from "@/consts/routes";
import { signIn } from "@/lib/auth/actions";
import Link from "next/link";
import { useRef, useState } from "react";
import { useAuth } from "../contexts/auth/auth-context";

export function LoginForm() {
  const { setToken } = useAuth();
  const usernameRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");

  const handleSubmit = async (data: FormData) => {
    const username = data.get("username");
    const password = data.get("password");
    if (!username || !password) return;
    setError("");
    const result = await signIn(username as string, password as string);

    if (result) {
      setToken(result);
    } else {
      setToken(null);
      setError("Wrong username or password.");
      usernameRef.current?.focus();
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>Enter your username or email below.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4" action={handleSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="email">Email or username</Label>
            <Input
              ref={usernameRef}
              name="username"
              id="username"
              required
              autoFocus
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input name="password" id="password" type="password" required />
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          <Button type="submit" className="w-full">
            Login
          </Button>
          <Link href={routes.home} className="text-sm underline">
            &larr; Back to device info
          </Link>
        </form>
      </CardContent>
    </Card>
  );
}
