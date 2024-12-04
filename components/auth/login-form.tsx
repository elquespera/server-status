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
import { signIn } from "@/lib/auth/auth";
import Link from "next/link";

export function LoginForm() {
  const handleSubmit = async (data: FormData) => {
    const username = data.get("username");
    const password = data.get("password");
    if (!username || !password) return;

    const result = await signIn(username as string, password as string);
    console.log(result);
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
            <Input name="username" id="username" required autoFocus />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input name="password" id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
          <Link href={routes.home} className="underline">
            Back to device info
          </Link>
        </form>
      </CardContent>
    </Card>
  );
}
