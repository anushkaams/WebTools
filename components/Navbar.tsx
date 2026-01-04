"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import {
  KeyRound,
  Code2,
  FileText,
  Binary,
  Link2,
  QrCode,
  Menu,
  X,
} from "lucide-react";

const tools = [
  { name: "Password", href: "/password-generator", icon: KeyRound },
  { name: "JSON", href: "/json-formatter", icon: Code2 },
  { name: "Base64", href: "/base64", icon: Binary },
  { name: "URL", href: "/url-encoder", icon: Link2 },
  { name: "QR", href: "/qrcode", icon: QrCode },
  { name: "Lorem Ipsum", href: "/lorem-ipsum", icon: QrCode },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-4 inset-x-0 z-50"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative rounded-2xl bg-white/70 backdrop-blur-xl shadow-lg border border-white/40">
          <div className="flex items-center justify-between px-6 py-3">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <span className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white grid place-items-center">
                {}
              </span>
              WebToolsSpace
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex relative items-center gap-1">
              {tools.map((tool) => {
                const active = pathname === tool.href;
                const Icon = tool.icon;

                return (
                  <Link key={tool.href} href={tool.href} className="relative">
                    {active && (
                      <motion.span
                        layoutId="active-pill"
                        className="absolute inset-0 rounded-full bg-blue-600/90"
                      />
                    )}

                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative z-10 flex items-center gap-2 px-4 py-2 rounded-full text-sm transition
                        ${
                          active
                            ? "text-white"
                            : "text-gray-700 hover:text-black"
                        }
                      `}
                    >
                      <Icon size={16} />
                      {tool.name}
                    </motion.div>
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden rounded-xl p-2 hover:bg-black/5"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="md:hidden overflow-hidden"
              >
                <motion.div
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: {},
                    show: {
                      transition: { staggerChildren: 0.06 },
                    },
                  }}
                  className="flex flex-col gap-2 px-6 pb-4"
                >
                  {tools.map((tool) => {
                    const Icon = tool.icon;
                    const active = pathname === tool.href;

                    return (
                      <motion.div
                        key={tool.href}
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          show: { opacity: 1, y: 0 },
                        }}
                      >
                        <Link
                          href={tool.href}
                          onClick={() => setOpen(false)}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm
                            ${
                              active
                                ? "bg-black text-white"
                                : "hover:bg-black/5"
                            }
                          `}
                        >
                          <Icon size={18} />
                          {tool.name}
                        </Link>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
}
