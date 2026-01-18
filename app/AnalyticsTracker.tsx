"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("config", "G-RX3HB8JKLW", { page_path: pathname });
    }
  }, [pathname]);

  return null;
}
