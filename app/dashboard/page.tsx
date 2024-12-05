import { SignOutButton } from "@/components/auth/sign-out-button";
import { routes } from "@/consts/routes";
import { getAuth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { isAuth } = await getAuth();
  if (!isAuth) redirect(routes.login);

  return (
    <div>
      Dashboard
      <SignOutButton />
    </div>
  );
}
