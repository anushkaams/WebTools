"use client";

import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 text-black">{children}</main>
  );
}
