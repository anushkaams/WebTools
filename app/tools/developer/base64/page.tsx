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
        <div className="max-w-4xl mx-auto px-6 py-16">
          {/* SEO Heading */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Online Base64 Encoder & Decoder Tool
          </h1>

          {/* SEO Description */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            Easily convert text to Base64 or decode Base64 strings online. This free tool runs entirely in your browser, ensuring privacy and fast processing. Perfect for developers, programmers, or anyone working with APIs, authentication headers, or binary data.
          </p>

          {/* Instructions / Tutorial */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              How to Use This Base64 Encoder & Decoder
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>
                <strong>Enter your text</strong> in the input box above if you want to encode it.
              </li>
              <li>
                <strong>Toggle to decode</strong> mode to convert Base64 strings back to readable text.
              </li>
              <li>
                You can <strong>upload a file</strong> and automatically encode or decode its content.
              </li>
              <li>
                Click <strong>Encode</strong> or <strong>Decode</strong> to process your data instantly.
              </li>
              <li>
                Copy the result to your clipboard with the <strong>Copy Output</strong> button.
              </li>
            </ol>
          </section>

          {/* SEO Feature List */}
          <ul className="text-gray-600 mb-10 space-y-2 list-none">
            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Convert text to Base64 and vice versa</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Upload files for instant encoding/decoding</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Copy encoded/decoded output with one click</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Runs entirely in your browser, secure and private</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>No login or installation required</span>
            </li>
          </ul>

          {/* Extra SEO & Educational Content */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              What is Base64 Encoding?
            </h2>
            <p className="text-gray-700 mb-3">
              Base64 encoding is a method to convert binary data into an ASCII string format. This is commonly used to transmit data over media that are designed to handle textual data, such as embedding images in HTML or sending API data safely.
            </p>
            <p className="text-gray-700">
              Decoding Base64 converts it back into its original text or binary form. Our tool simplifies this process for developers and non-technical users alike, ensuring your data can be encoded or decoded quickly and securely.
            </p>
          </section>

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