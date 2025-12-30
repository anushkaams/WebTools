"use client";

import { useState } from "react";
import { Copy, Check, ArrowLeftRight } from "lucide-react";

export default function UrlEncoderPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [decodeMode, setDecodeMode] = useState(false);

  const processUrl = () => {
    try {
      const result = decodeMode
        ? decodeURIComponent(input)
        : encodeURIComponent(input);

      setOutput(result);
      setError("");
    } catch {
      setError(
        decodeMode
          ? "Invalid encoded URL. Unable to decode."
          : "Unable to encode the provided text."
      );
      setOutput("");
    }
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* SEO Heading */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Online URL Encoder & Decoder
        </h1>

        {/* SEO Description */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          Encode or decode URLs instantly using this free online URL encoder and
          decoder. Convert special characters into URL-safe format or decode
          encoded URLs back into readable text. Perfect for query strings, APIs,
          redirects, and web development.
        </p>

        {/* SEO Feature List */}
        <ul className="text-gray-600 mb-10 space-y-2 list-none">
          <li className="flex items-start gap-2">
            <span className="text-green-500">✔</span>
            <span>Encode text into URL-safe format</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✔</span>
            <span>Decode encoded URLs back to plain text</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✔</span>
            <span>Ideal for query parameters and API requests</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✔</span>
            <span>Copy results instantly with one click</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✔</span>
            <span>Runs fully in the browser for privacy</span>
          </li>
        </ul>

        <section
          aria-labelledby="url-tool"
          className="bg-white rounded-2xl shadow-lg p-6 space-y-6"
        >
          <h2 id="url-tool" className="sr-only">
            URL Encoding Tool
          </h2>

          {/* Input */}
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            aria-label="URL input"
            className="w-full h-40 rounded-xl border p-4 font-mono text-sm text-gray-900 bg-white border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder={
              decodeMode
                ? "Paste your encoded URL here..."
                : "Enter text or URL to encode..."
            }
          />

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={processUrl}
              className="bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 transition"
            >
              {decodeMode ? "Decode URL" : "Encode URL"}
            </button>

            <button
              onClick={() => setDecodeMode(!decodeMode)}
              className="border px-5 py-2.5 rounded-xl hover:bg-gray-100 transition flex items-center gap-2"
            >
              <ArrowLeftRight size={16} />
              Toggle Encode / Decode
            </button>

            {output && (
              <button
                onClick={copyToClipboard}
                className="border px-5 py-2.5 rounded-xl flex items-center gap-2 hover:bg-gray-100 transition"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? "Copied" : "Copy Output"}
              </button>
            )}
          </div>

          {/* Error */}
          {error && (
            <div className="text-red-600 text-sm" role="alert">
              {error}
            </div>
          )}

          {/* Output */}
          {output && (
            <pre
              className="bg-gray-100 text-gray-900 rounded-xl p-4 text-sm overflow-auto max-h-96 font-mono"
              aria-label="URL encoded output"
            >
              {output}
            </pre>
          )}
        </section>
      </div>
    </main>
  );
}
