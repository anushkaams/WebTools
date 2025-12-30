"use client";

import { useState } from "react";
import { RefreshCcw, Copy, Check } from "lucide-react";

export default function PasswordGeneratorPage() {
  const [length, setLength] = useState(16);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const nums = "0123456789";
    const syms = "!@#$%^&*()_+{}[]<>?";

    let chars = "";
    if (uppercase) chars += upper;
    if (lowercase) chars += lower;
    if (numbers) chars += nums;
    if (symbols) chars += syms;

    if (!chars) return setPassword("");

    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setPassword(result);
    setCopied(false);
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* SEO Heading */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Online Password Generator – Create Strong & Secure Passwords
        </h1>

        {/* SEO Description */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          Generate strong, secure, and random passwords instantly with this free
          online password generator. Customize length, include uppercase,
          lowercase, numbers, and symbols to create passwords suitable for all
          accounts, apps, and websites. Keep your data safe and secure!
        </p>

        {/* Feature List */}
        <ul className="text-gray-600 mb-10 space-y-2 list-none">
          <li className="flex items-start gap-2">
            <span className="text-green-500">✔</span>
            <span>Generate strong passwords up to 32 characters</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✔</span>
            <span>Include uppercase, lowercase, numbers, and symbols</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✔</span>
            <span>Copy passwords instantly with one click</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✔</span>
            <span>Fully client-side for privacy and security</span>
          </li>
        </ul>

        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
          {/* Password Output */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              readOnly
              value={password}
              placeholder="Your secure password will appear here"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 font-mono"
              aria-label="Generated password output"
            />
            <button
              onClick={copyToClipboard}
              disabled={!password}
              className="p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition disabled:opacity-50"
              aria-label="Copy password to clipboard"
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
            </button>
          </div>

          {/* Password Length */}
          <div>
            <label
              className="flex justify-between text-sm font-medium text-gray-700 mb-2"
              htmlFor="password-length"
            >
              Length
              <span className="text-blue-600">{length}</span>
            </label>
            <input
              type="range"
              id="password-length"
              min={6}
              max={32}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full"
              aria-valuemin={6}
              aria-valuemax={32}
              aria-valuenow={length}
            />
          </div>

          {/* Options */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            {[
              { label: "Uppercase (A-Z)", state: uppercase, set: setUppercase },
              { label: "Lowercase (a-z)", state: lowercase, set: setLowercase },
              { label: "Numbers (0-9)", state: numbers, set: setNumbers },
              { label: "Symbols (!@#$)", state: symbols, set: setSymbols },
            ].map((opt) => (
              <label
                key={opt.label}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={opt.state}
                  onChange={(e) => opt.set(e.target.checked)}
                  className="accent-blue-600"
                />
                {opt.label}
              </label>
            ))}
          </div>

          {/* Generate Button */}
          <button
            onClick={generatePassword}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            aria-label="Generate secure password"
          >
            <RefreshCcw size={18} />
            Generate Password
          </button>
        </div>
      </div>
    </main>
  );
}
