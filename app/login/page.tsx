import { LoginForm } from "@/components/auth/login-form";
import { routes } from "@/consts/routes";
import { getAuth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const { isAuth } = await getAuth();
  if (isAuth) redirect(routes.dashboard);

  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center p-4 sm:p-8">
      <LoginForm />
    </main>
  );
}
