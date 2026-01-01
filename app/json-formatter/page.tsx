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
          JSON formatter. Perfect for developers who want to clean up JSON data,
          validate syntax, or convert minified JSON into a readable format - all
          directly in the browser with no uploads required.
        </p>

        {/* SEO Feature List */}
        <ul className="text-gray-600 mb-10 list-disc list-none space-y-1">
          <li>✔ Format JSON with proper indentation</li>
          <li>✔ Minify JSON to reduce file size</li>
          <li>✔ Validate JSON and detect syntax errors</li>
          <li>✔ Upload and format JSON files</li>
          <li>✔ Copy formatted JSON with one click</li>
        </ul>

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
