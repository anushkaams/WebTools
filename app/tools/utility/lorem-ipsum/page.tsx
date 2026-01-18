"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

const LOREM_WORDS = [
  "lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipiscing",
  "elit",
  "sed",
  "do",
  "eiusmod",
  "tempor",
  "incididunt",
  "ut",
  "labore",
  "et",
  "dolore",
  "magna",
  "aliqua",
  "ut",
  "enim",
  "ad",
  "minim",
  "veniam",
  "quis",
  "nostrud",
  "exercitation",
  "ullamco",
  "laboris",
  "nisi",
  "ut",
  "aliquip",
  "ex",
  "ea",
  "commodo",
  "consequat",
  "duis",
  "aute",
  "irure",
  "dolor",
  "in",
  "reprehenderit",
  "in",
  "voluptate",
  "velit",
  "esse",
  "cillum",
  "dolore",
  "eu",
  "fugiat",
  "nulla",
  "pariatur",
  "excepteur",
  "sint",
  "occaecat",
  "cupidatat",
  "non",
  "proident",
];

function randomWords(count: number) {
  return Array.from(
    { length: count },
    () => LOREM_WORDS[Math.floor(Math.random() * LOREM_WORDS.length)]
  ).join(" ");
}

export default function LoremIpsumPage() {
  const [type, setType] = useState<"paragraphs" | "sentences" | "words">(
    "paragraphs"
  );
  const [count, setCount] = useState(3);
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const generateLorem = () => {
    let result = "";

    if (type === "words") {
      result = randomWords(count);
    }

    if (type === "sentences") {
      result = Array.from(
        { length: count },
        () =>
          randomWords(8 + Math.floor(Math.random() * 8)).replace(/^./, (c) =>
            c.toUpperCase()
          ) + "."
      ).join(" ");
    }

    if (type === "paragraphs") {
      result = Array.from({ length: count }, () =>
        Array.from(
          { length: 4 + Math.floor(Math.random() * 3) },
          () =>
            randomWords(8 + Math.floor(Math.random() * 8)).replace(/^./, (c) =>
              c.toUpperCase()
            ) + "."
        ).join(" ")
      ).join("\n\n");
    }

    setOutput(result);
    setCopied(false);
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
          Free Online Lorem Ipsum Generator
        </h1>

        {/* SEO Description */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          Generate Lorem Ipsum placeholder text instantly for your designs,
          layouts, and development projects. Create paragraphs, sentences, or
          words with full control - directly in your browser with one click.
        </p>

        {/* SEO Feature List */}
        <ul className="text-gray-600 mb-10 list-none space-y-1">
          <li>✔ Generate Lorem Ipsum paragraphs, sentences, or words</li>
          <li>✔ Custom length control</li>
          <li>✔ Copy generated text instantly</li>
          <li>✔ No sign-up, no tracking, fully client-side</li>
        </ul>

        <section className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
          {/* Controls */}
          <div className="flex flex-wrap gap-4 items-center">
            <select
              value={type}
              onChange={(e) =>
                setType(e.target.value as "paragraphs" | "sentences" | "words")
              }
              className="border rounded-xl px-4 py-2.5 bg-white"
            >
              <option value="paragraphs">Paragraphs</option>
              <option value="sentences">Sentences</option>
              <option value="words">Words</option>
            </select>

            <input
              type="number"
              min={1}
              max={100}
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
              className="border rounded-xl px-4 py-2.5 w-28"
              aria-label="Count"
            />

            <button
              onClick={generateLorem}
              className="bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 transition"
            >
              Generate
            </button>

            {output && (
              <button
                onClick={copyToClipboard}
                className="border px-5 py-2.5 rounded-xl flex items-center gap-2 hover:bg-gray-100 transition"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? "Copied" : "Copy Text"}
              </button>
            )}
          </div>

          {/* Output */}
          {output && (
            <pre className="bg-gray-100 text-gray-900 rounded-xl p-4 text-sm whitespace-pre-wrap leading-relaxed max-h-96 overflow-auto">
              {output}
            </pre>
          )}
        </section>
      </div>
    </main>
  );
}
