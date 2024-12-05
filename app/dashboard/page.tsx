import { SignOutButton } from "@/components/auth/sign-out-button";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { routes } from "@/consts/routes";
import { getAuth } from "@/lib/auth/auth";
import { BarChartIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { isAuth } = await getAuth();
  if (!isAuth) redirect(routes.login);

  return (
    <div className="flex w-full max-w-screen-sm flex-col gap-4">
      <div className="flex items-center justify-between gap-2">
        <Heading>Dashboard</Heading>
        <div className="flex items-center gap-1 overflow-hidden rounded-md border bg-background shadow-sm transition-shadow hover:shadow-md">
          <Button variant="ghost" size="icon" className="rounded-none" asChild>
            <Link href={routes.home}>
              <BarChartIcon />
            </Link>
          </Button>
          <Separator orientation="vertical" className="h-7" />
          <SignOutButton className="rounded-none" />
        </div>
      </div>
    </div>
  );
}
