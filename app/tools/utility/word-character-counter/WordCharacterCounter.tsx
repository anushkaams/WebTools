"use client";

import { useState } from "react";
import { Copy, Check, RefreshCcw } from "lucide-react";

export default function WordCharacterCounterPage() {
    const [text, setText] = useState("");
    const [copied, setCopied] = useState(false);

    const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
    const charCount = text.length;
    const charCountNoSpaces = text.replace(/\s/g, "").length;
    const sentenceCount = (text.match(/[\w|\)][.?!](\s|$)/g) || []).length;
    const paragraphCount = text.split(/\n+/).filter((p) => p.trim() !== "").length;
    const readingTime = Math.ceil(wordCount / 200); // avg 200 wpm
    const speakingTime = Math.ceil(wordCount / 130); // avg 130 wpm

    const copyToClipboard = async () => {
        if (!text) return;
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (err) {
            console.error("Failed to copy text", err);
        }
    };

    const resetText = () => setText("");

    return (
        <main className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto px-6 py-16">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Online Word & Character Counter – Count Words, Characters & More
                </h1>

                <p className="text-gray-600 mb-6 leading-relaxed">
                    Easily count words, characters, sentences, and paragraphs with this free online text counter.
                    Analyze your writing, estimate reading and speaking time, and copy results instantly.
                </p>

                <div className="bg-white max-w-3xl rounded-2xl shadow-lg p-6 space-y-6">
                    {/* Input */}
                    <textarea
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Paste or type your text here..."
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900 resize-none h-40"
                        aria-label="Text input for word and character counting"
                    />

                    {/* Statistics */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
                        <div>Words: <strong>{wordCount}</strong></div>
                        <div>Characters: <strong>{charCount}</strong></div>
                        <div>Characters (no spaces): <strong>{charCountNoSpaces}</strong></div>
                        <div>Sentences: <strong>{sentenceCount}</strong></div>
                        <div>Paragraphs: <strong>{paragraphCount}</strong></div>
                        <div>Reading Time: <strong>{readingTime} min</strong></div>
                        <div>Speaking Time: <strong>{speakingTime} min</strong></div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col md:flex-row gap-3 mt-4">
                        <button
                            onClick={copyToClipboard}
                            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                            aria-label="Copy text to clipboard"
                        >
                            {copied ? <Check size={18} /> : <Copy size={18} />}
                            {copied ? "Copied!" : "Copy Text"}
                        </button>

                        <button
                            onClick={resetText}
                            className="flex items-center gap-2 bg-gray-300 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
                            aria-label="Reset text input"
                        >
                            <RefreshCcw size={18} />
                            Reset Text
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
