"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const footerLinks = [
  { name: "About", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "Privacy", href: "/privacy" },
  { name: "Terms", href: "/terms" },
];

export default function Footer() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <motion.footer
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="mt-10 w-full"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative rounded-2xl bg-white/70 backdrop-blur-xl shadow-lg border border-white/40">
          <div className="flex flex-col md:flex-row items-center justify-between px-6 py-4">
            <span className="text-sm font-semibold mb-2 md:mb-0">
              © 2025 WebToolsSpace. All rights reserved.
            </span>

            {/* Desktop Links */}
            <nav className="hidden md:flex items-center gap-4">
              {footerLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3 py-2 rounded-full text-sm transition
                      ${
                        active
                          ? "bg-blue-600 text-white"
                          : "text-gray-700 hover:text-black hover:bg-black/5"
                      }
                    `}
                  >
                    {active && (
                      <motion.span
                        layoutId="active-footer-pill"
                        className="absolute inset-0 rounded-full bg-blue-600/90"
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden rounded-xl p-2 hover:bg-black/5"
            >
              {open ? "Close" : "Menu"}
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
                    show: { transition: { staggerChildren: 0.06 } },
                  }}
                  className="flex flex-col gap-2 px-6 pb-4"
                >
                  {footerLinks.map((link) => {
                    const active = pathname === link.href;
                    return (
                      <motion.div
                        key={link.href}
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          show: { opacity: 1, y: 0 },
                        }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className={`flex items-center px-4 py-3 rounded-xl text-sm
                            ${
                              active
                                ? "bg-black text-white"
                                : "hover:bg-black/5"
                            }
                          `}
                        >
                          {link.name}
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
    </motion.footer>
  );
}
