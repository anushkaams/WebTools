"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, Variants } from "framer-motion";
import {
    BookOpen,
    Code2,
    KeyRound,
    Menu,
    QrCode,
    Wrench,
    X,
} from "lucide-react";
import { toolCategories, tools } from "../data/tools";

/* =======================
   NAV CONFIG (FIXED)
======================= */
const navCategories = toolCategories.map((category) => ({
    id: category.id, // ✅ IMPORTANT
    name: category.title,
    icon:
        category.id === "security"
            ? KeyRound
            : category.id === "developer"
                ? Code2
                : category.id === "utility"
                    ? QrCode
                    : BookOpen,
    tools: tools
        .filter((tool) => tool.category === category.id)
        .map((tool) => ({
            name: tool.title,
            href: tool.href,
            icon: tool.icon,
        })),
}));

/* =======================
   ANIMATIONS
======================= */
const dropdownVariants: Variants = {
    hidden: { opacity: 0, y: 10, scale: 0.96, pointerEvents: "none" },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        pointerEvents: "auto",
        transition: {
            duration: 0.25,
            ease: [0.16, 1, 0.3, 1],
            staggerChildren: 0.06,
        },
    },
    exit: {
        opacity: 0,
        y: 8,
        scale: 0.96,
        pointerEvents: "none",
        transition: { duration: 0.15 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 6 },
    visible: { opacity: 1, y: 0 },
};

/* =======================
   NAVBAR COMPONENT
======================= */
export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <motion.header
            id="main-navbar"
            initial={{ y: -24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-x-0 top-4 z-50"
        >
            <div className="mx-auto max-w-7xl px-4">
                <div className="relative rounded-2xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.25)]">
                    <div className="flex items-center justify-between px-6 py-3">

                        {/* ================= LOGO ================= */}
                        <Link href="/" className="flex items-center gap-3 font-semibold">
              <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg">
                <Wrench size={16} />
              </span>
                            <span className="tracking-tight">WebToolsSpace</span>
                        </Link>

                        {/* ================= DESKTOP NAV ================= */}
                        <nav className="hidden md:flex items-center gap-2 relative">
                            {navCategories.map((category) => {
                                const active = pathname.startsWith(`/tools/${category.id}`);
                                const Icon = category.icon;

                                return (
                                    <div
                                        key={category.id}
                                        className="relative"
                                        onMouseEnter={() => setHovered(category.id)}
                                        onMouseLeave={() => setHovered(null)}
                                    >
                                        <button
                                            className={`relative px-4 py-2 flex items-center gap-2 text-sm font-medium transition
                      ${active ? "text-blue-600" : "text-gray-700 hover:text-black"}`}
                                        >
                                            <Icon size={16} />
                                            {category.name}

                                            {active && (
                                                <motion.span
                                                    layoutId="nav-underline"
                                                    className="absolute -bottom-1 left-3 right-3 h-[2px] rounded-full bg-blue-600"
                                                />
                                            )}
                                        </button>

                                        <div className="absolute left-0 top-full h-4 w-full" />

                                        <AnimatePresence>
                                            {hovered === category.id && (
                                                <motion.div
                                                    variants={dropdownVariants}
                                                    initial="hidden"
                                                    animate="visible"
                                                    exit="exit"
                                                    className="absolute left-0 top-full mt-2 w-72 rounded-2xl bg-white shadow-xl border p-2"
                                                >
                                                    {category.tools.map((tool) => {
                                                        const ToolIcon = tool.icon;
                                                        const isActive = pathname === tool.href;

                                                        return (
                                                            <motion.div key={tool.href} variants={itemVariants}>
                                                                <Link
                                                                    href={tool.href}
                                                                    className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition
                                  ${isActive
                                                                        ? "bg-blue-600 text-white"
                                                                        : "hover:bg-blue-50 text-gray-700 hover:text-blue-700"}`}
                                                                >
                                                                    <ToolIcon size={16} />
                                                                    {tool.name}
                                                                </Link>
                                                            </motion.div>
                                                        );
                                                    })}

                                                    {/* ===== View All Link ===== */}
                                                    <div className="border-t my-2" />
                                                    <motion.div variants={itemVariants}>
                                                        <Link
                                                            href={`/tools/${category.id}`}
                                                            className="flex items-center justify-center rounded-xl px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 transition"
                                                        >
                                                            View All {category.name} Tools →
                                                        </Link>
                                                    </motion.div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}

                            {/* Support Button */}
                            <a
                                href="https://www.buymeacoffee.com/anushkaams"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-3 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition shadow-sm"
                            >
                                ☕ Support
                            </a>
                        </nav>

                        {/* ================= MOBILE TOGGLE ================= */}
                        <button
                            onClick={() => setOpen(!open)}
                            className="md:hidden rounded-xl p-2 hover:bg-black/5"
                        >
                            {open ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>

                    {/* ================= MOBILE MENU ================= */}
                    <AnimatePresence>
                        {open && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="md:hidden overflow-hidden"
                            >
                                <div className="px-6 pb-6 space-y-6">
                                    {navCategories.map((category) => (
                                        <div key={category.id}>
                                            <p className="mb-2 text-xs font-semibold text-gray-500">
                                                {category.name}
                                            </p>

                                            {category.tools.map((tool) => {
                                                const Icon = tool.icon;
                                                const isActive = pathname === tool.href;

                                                return (
                                                    <Link
                                                        key={tool.href}
                                                        href={tool.href}
                                                        onClick={() => setOpen(false)}
                                                        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition
                            ${isActive
                                                            ? "bg-blue-600 text-white"
                                                            : "hover:bg-blue-50 text-gray-700 hover:text-blue-700"}`}
                                                    >
                                                        <Icon size={18} />
                                                        {tool.name}
                                                    </Link>
                                                );
                                            })}

                                            {/* View All Mobile */}
                                            <Link
                                                href={`/tools/${category.id}`}
                                                onClick={() => setOpen(false)}
                                                className="block mt-2 px-4 py-2 text-sm font-medium text-blue-600 hover:underline"
                                            >
                                                View All {category.name} Tools →
                                            </Link>
                                        </div>
                                    ))}

                                    <a
                                        href="https://www.buymeacoffee.com/anushkaams"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-amber-200/80 text-gray-900 font-medium text-sm hover:bg-amber-300/90 transition"
                                    >
                                        ☕ Support
                                    </a>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.header>
    );
}