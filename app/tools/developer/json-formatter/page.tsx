"use client";

import { useState } from "react";
import { Copy, Check, FileUp } from "lucide-react";

export default function JsonFormatterPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [minified, setMinified] = useState(false);

  const formatJSON = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(
          minified ? JSON.stringify(parsed) : JSON.stringify(parsed, null, 2)
      );
      setError("");
    } catch {
      setError("Invalid JSON. Please check your syntax.");
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
            Online JSON Formatter, Validator & Minifier
          </h1>

          {/* SEO Description */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            Format, validate, and minify JSON instantly using this free online
            JSON tool. Perfect for developers, data analysts, or anyone working
            with APIs or configuration files. No uploads required — everything
            runs securely in your browser.
          </p>

          {/* Instructions */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              How to Use This JSON Tool
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>
                Paste your JSON data into the input box above. You can also upload a <strong>.json</strong> file.
              </li>
              <li>
                Click <strong>Format JSON</strong> to make it human-readable with proper indentation.
              </li>
              <li>
                Toggle <strong>Minify</strong> mode to compress JSON into a compact, single-line format for faster transmission.
              </li>
              <li>
                The tool automatically validates your JSON and displays an error if your syntax is incorrect.
              </li>
              <li>
                Copy the formatted or minified JSON using the <strong>Copy JSON</strong> button.
              </li>
            </ol>
          </section>

          {/* Features / SEO content */}
          <ul className="text-gray-600 mb-10 space-y-2 list-none">
            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Format JSON with indentation for readability</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Minify JSON to save space and bandwidth</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Validate JSON syntax to avoid errors</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Upload JSON files directly from your computer</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>Copy formatted JSON instantly</span>
            </li>
          </ul>

          {/* Educational content */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              What is JSON?
            </h2>
            <p className="text-gray-700 mb-3">
              JSON (JavaScript Object Notation) is a lightweight data-interchange format
              widely used for APIs, configuration files, and data storage. Its simple
              structure allows humans to read and write it easily, and machines to parse it
              efficiently.
            </p>
            <p className="text-gray-700">
              Using a formatter or minifier helps ensure your JSON is structured correctly,
              making debugging, sharing, and transmitting data much easier. This tool
              makes that process simple, fast, and secure.
            </p>
          </section>

          <section
              aria-labelledby="json-tool"
              className="bg-white rounded-2xl shadow-lg p-6 space-y-6"
          >
            <h2 id="json-tool" className="sr-only">
              JSON Formatting Tool
            </h2>

            {/* Input */}
            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                aria-label="JSON input"
                className="w-full h-44 rounded-xl border p-4 font-mono text-sm text-gray-900 bg-white border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder='Paste your JSON here, e.g. { "name": "John", "age": 30 }'
            />

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              <button
                  onClick={formatJSON}
                  className="bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 transition"
              >
                {minified ? "Minify JSON" : "Format JSON"}
              </button>

              <button
                  onClick={() => setMinified(!minified)}
                  className="border px-5 py-2.5 rounded-xl hover:bg-gray-100 transition"
              >
                Toggle Minify
              </button>

              <label className="cursor-pointer flex items-center gap-2 border px-5 py-2.5 rounded-xl hover:bg-gray-100 transition">
                <FileUp size={16} />
                Upload JSON File
                <input
                    type="file"
                    hidden
                    accept=".json"
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
                    {copied ? "Copied" : "Copy JSON"}
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
                    aria-label="Formatted JSON output"
                    dangerouslySetInnerHTML={{ __html: highlightJSON(output) }}
                />
            )}
          </section>
        </div>
      </main>
  );
}

/* Syntax Highlight */
function highlightJSON(json: string) {
  return json.replace(
      /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|\b-?\d+(\.\d*)?\b)/g,
      (m) => {
        if (/^"/.test(m)) return `<span style="color:#10b981">${m}</span>`;
        if (/true|false/.test(m))
          return `<span style="color:#f59e0b">${m}</span>`;
        if (/null/.test(m)) return `<span style="color:#ef4444">${m}</span>`;
        return `<span style="color:#06b6d4">${m}</span>`;
      }
  );
}