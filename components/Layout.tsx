"use client";

import { ReactNode } from "react";
import ScrollToTop from "@/components/ScrollToTop"; // adjust path

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
      <ScrollToTop>
          <main className="max-w-4xl mx-auto px-4 py-16 text-black scroll-mt-24">
              {children}
          </main>
      </ScrollToTop>
  );
}