"use client";

import { useState } from "react";
import { Copy, Check, FileUp, ArrowLeftRight } from "lucide-react";

export default function Base64EncoderPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [decodeMode, setDecodeMode] = useState(false);

  const processBase64 = () => {
    try {
      const result = decodeMode
        ? atob(input)
        : btoa(unescape(encodeURIComponent(input)));

      setOutput(result);
      setError("");
    } catch {
      setError(
        decodeMode
          ? "Invalid Base64 string. Unable to decode."
          : "Unable to encode the provided text."
      );
      setOutput("");
    }
  };

  const uploadFile = async (file: File) => {
    setInput(await file.text());
    setOutput("");
    setError("");
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* SEO Heading */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Online Base64 Encoder & Decoder
        </h1>

        {/* SEO Description */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          Encode text to Base64 or decode Base64 strings instantly using this
          free online Base64 encoder and decoder. Ideal for developers working
          with APIs, authentication headers, binary data, or data transmission.
          Everything runs securely in your browser.
        </p>

        {/* SEO Feature List */}
        <ul className="text-gray-600 mb-10 space-y-2 list-none">
          <li className="flex items-start gap-2">
            <span className="text-green-500">✔</span>
            <span>Encode plain text to Base64</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✔</span>
            <span>Decode Base64 back to readable text</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✔</span>
            <span>Upload files and convert content</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✔</span>
            <span>Copy encoded or decoded output instantly</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500">✔</span>
            <span>Runs fully client-side for privacy</span>
          </li>
        </ul>

        <section
          aria-labelledby="base64-tool"
          className="bg-white rounded-2xl shadow-lg p-6 space-y-6"
        >
          <h2 id="base64-tool" className="sr-only">
            Base64 Encoding Tool
          </h2>

          {/* Input */}
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            aria-label="Base64 input"
            className="w-full h-40 rounded-xl border p-4 font-mono text-sm text-gray-900 bg-white border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder={
              decodeMode
                ? "Paste your Base64 string here..."
                : "Enter text to encode into Base64..."
            }
          />

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={processBase64}
              className="bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 transition"
            >
              {decodeMode ? "Decode Base64" : "Encode Base64"}
            </button>

            <button
              onClick={() => setDecodeMode(!decodeMode)}
              className="border px-5 py-2.5 rounded-xl hover:bg-gray-100 transition flex items-center gap-2"
            >
              <ArrowLeftRight size={16} />
              Toggle Encode / Decode
            </button>

            <label className="cursor-pointer flex items-center gap-2 border px-5 py-2.5 rounded-xl hover:bg-gray-100 transition">
              <FileUp size={16} />
              Upload File
              <input
                type="file"
                hidden
                onChange={(e) =>
                  e.target.files && uploadFile(e.target.files[0])
                }
              />
            </label>

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
              aria-label="Base64 output"
            >
              {output}
            </pre>
          )}
        </section>
      </div>
    </main>
  );
}
