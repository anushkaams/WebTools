"use client";

import { useState } from "react";
import { Copy, Check, RefreshCcw } from "lucide-react";
import QRCode from "qrcode";

export default function QRCodeGeneratorPage() {
  const [text, setText] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [size, setSize] = useState(300);
  const [error, setError] = useState("");

  const generateQRCode = async () => {
    if (!text.trim()) {
      setError("Please enter some text or URL to generate QR code.");
      setQrCodeUrl("");
      return;
    }

    try {
      const url = await QRCode.toDataURL(text, { width: size });
      setQrCodeUrl(url);
      setCopied(false);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to generate QR code. Please try again.");
    }
  };

  const copyToClipboard = async () => {
    if (!qrCodeUrl) return;
    try {
      const res = await fetch(qrCodeUrl);
      const blob = await res.blob();
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob,
        }),
      ]);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy QR code", err);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Online QR Code Generator – Create Custom QR Codes Instantly
        </h1>

        <p className="text-gray-600 mb-6 leading-relaxed">
          Generate QR codes quickly and easily with this free online QR code
          generator. Enter text, URLs, or any information to create QR codes for
          websites, business cards, payments, and more.
        </p>

        <div className="bg-white max-w-3xl rounded-2xl shadow-lg p-6 space-y-6">
          {/* Input */}
          <div>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text or URL to generate QR code"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 text-gray-900"
              aria-label="Text input for QR code"
            />
          </div>

          {/* Validation Error */}
          {error && <p className="text-red-500 text-sm font-medium">{error}</p>}

          {/* QR Code Size Slider */}
          <div>
            <label
              htmlFor="qr-size"
              className="flex justify-between text-sm font-medium text-gray-700 mb-2"
            >
              QR Code Size
              <span className="text-blue-600">{size}px</span>
            </label>
            <input
              type="range"
              id="qr-size"
              min={100}
              max={500}
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="w-full"
              aria-valuemin={100}
              aria-valuemax={500}
              aria-valuenow={size}
            />
          </div>

          {/* QR Code Output */}
          {qrCodeUrl && (
            <div className="flex flex-col items-center gap-4">
              <img
                src={qrCodeUrl}
                alt="Generated QR Code"
                className="bg-white p-2 rounded-xl shadow"
                style={{ width: size, height: size }}
              />
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                aria-label="Copy QR code to clipboard"
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
                {copied ? "Copied!" : "Copy QR Code"}
              </button>
            </div>
          )}

          {/* Generate Button */}
          <button
            onClick={generateQRCode}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            aria-label="Generate QR code"
          >
            <RefreshCcw size={18} />
            Generate QR Code
          </button>
        </div>
      </div>
    </main>
  );
}
