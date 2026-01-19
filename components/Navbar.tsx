"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  KeyRound,
  Code2,
  FileText,
  Binary,
  Link2,
  QrCode,
  Menu,
  X,
  Wrench,
  BookOpen,
} from "lucide-react";

/* =======================
   NAV CONFIG
======================= */

const navCategories = [
  {
    name: "Security",
    icon: KeyRound,
    tools: [
      {
        name: "Password Generator",
        href: "/tools/security/password-generator",
        icon: KeyRound,
      },
    ],
  },
  {
    name: "Developer",
    icon: Code2,
    tools: [
      {
        name: "JSON Formatter",
        href: "/tools/developer/json-formatter",
        icon: Code2,
      },
      {
        name: "Base64 Encoder",
        href: "/tools/developer/base64",
        icon: Binary,
      },
      {
        name: "URL Encoder",
        href: "/tools/developer/url-encoder",
        icon: Link2,
      },
    ],
  },
  {
    name: "Utility",
    icon: QrCode,
    tools: [
      {
        name: "QR Code Generator",
        href: "/tools/utility/qrcode",
        icon: QrCode,
      },
      {
        name: "Lorem Ipsum",
        href: "/tools/utility/lorem-ipsum",
        icon: FileText,
      },
    ],
  },
];

const staticLinks = [{ name: "Blog", href: "/blog", icon: BookOpen }];

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
    transition: { duration: 0.15, ease: [0.4, 0, 1, 1] },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.15, ease: [0.16, 1, 0.3, 1] },
  },
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
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-4 z-50"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative rounded-2xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.25)]">
          <div className="flex items-center justify-between px-6 py-3">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 font-semibold">
              <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg">
                <Wrench size={16} />
                <span className="absolute inset-0 rounded-xl bg-white/20 blur-md" />
              </span>
              <span className="tracking-tight">WebToolsSpace</span>
            </Link>

            {/* ================= DESKTOP NAV ================= */}
            <nav className="hidden md:flex items-center gap-2 relative">
              {navCategories.map((category) => {
                const active = pathname.startsWith(
                  `/tools/${category.name.toLowerCase()}`
                );
                const Icon = category.icon;

                return (
                  <div
                    key={category.name}
                    className="relative"
                    onMouseEnter={() => setHovered(category.name)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <button
                      className={`relative px-4 py-2 flex items-center gap-2 text-sm font-medium transition
                        ${
                          active
                            ? "text-blue-600"
                            : "text-gray-700 hover:text-black"
                        }
                      `}
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
                      {hovered === category.name && (
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
                              <motion.div
                                key={tool.href}
                                variants={itemVariants}
                              >
                                <Link
                                  href={tool.href}
                                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition
                                    ${
                                      isActive
                                        ? "bg-blue-600 text-white"
                                        : "hover:bg-blue-50 text-gray-700 hover:text-blue-700"
                                    }
                                  `}
                                >
                                  <ToolIcon size={16} />
                                  {tool.name}
                                </Link>
                              </motion.div>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              {staticLinks.map(({ name, href, icon: Icon }) => {
                const active = pathname.startsWith(href);

                return (
                  <Link
                    key={href}
                    href={href}
                    className={`relative px-4 py-2 flex items-center gap-2 text-sm font-medium
                      ${
                        active
                          ? "text-blue-600"
                          : "text-gray-700 hover:text-black"
                      }
                    `}
                  >
                    <Icon size={16} />
                    {name}

                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-3 right-3 h-[2px] rounded-full bg-blue-600"
                      />
                    )}
                  </Link>
                );
              })}

              {/* ================= BUY ME A COFFEE BUTTON ================= */}
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
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="md:hidden overflow-hidden"
              >
                <div className="px-6 pb-6 space-y-6">
                  {navCategories.map((category) => (
                    <div key={category.name}>
                      <p className="mb-2 text-xs font-semibold text-gray-500">
                        {category.name}
                      </p>

                      {category.tools.map((tool) => {
                        const Icon = tool.icon;
                        const active = pathname === tool.href;

                        return (
                          <Link
                            key={tool.href}
                            href={tool.href}
                            onClick={() => setOpen(false)}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition
                              ${
                                active
                                  ? "bg-blue-600 text-white"
                                  : "hover:bg-blue-50 text-gray-700 hover:text-blue-700"
                              }
                            `}
                          >
                            <Icon size={18} />
                            {tool.name}
                          </Link>
                        );
                      })}
                    </div>
                  ))}

                  <Link
                    href="/blog"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm hover:bg-black/5"
                  >
                    <BookOpen size={18} />
                    Blog
                  </Link>

                  {/* ================= BUY ME A COFFEE BUTTON MOBILE ================= */}
                  <a
                    href="https://www.buymeacoffee.com/anushkaams"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
    flex items-center gap-1 px-3 py-1.5
    rounded-full
    bg-amber-200/80
    text-gray-900 font-medium text-sm
    hover:bg-amber-300/90
    hover:scale-105
    transition duration-200 ease-out
    shadow-sm
  "
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
