"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScrollToTop({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    useEffect(() => {
        const navbar = document.getElementById("main-navbar");
        const offset = navbar?.offsetHeight || 0;

        console.log();

        // Scroll to top minus navbar height
        window.scrollTo({ top: 0 - offset, behavior: "auto" });
    }, [pathname]);

    return <>{children}</>;
}