"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

type PageReloadProps = { interval?: number };

export function PageReload({ interval = 500 }: PageReloadProps) {
  const router = useRouter();
  useEffect(() => {
    const timer = setInterval(() => {
      router.refresh();
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return null;
}
