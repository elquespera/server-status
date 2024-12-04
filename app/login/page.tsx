import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center p-4 sm:p-8">
      <LoginForm />
    </main>
  );
}
