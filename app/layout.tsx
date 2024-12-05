import { AuthProvider } from "@/components/contexts/auth/auth-provider";
import { WSProvider } from "@/components/contexts/ws/ws-provider";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { BottomMenu } from "@/components/bottom-menu";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Server Status",
  description: "Real-time status of the server",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <WSProvider>
            <AuthProvider>
              <main className="mb-16 flex flex-col items-center p-4 sm:p-8">
                {children}
                <BottomMenu className="fixed bottom-8 self-center" />
              </main>
            </AuthProvider>
          </WSProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
