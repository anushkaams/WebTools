import ToolCard from "@/components/ToolCard";
import { KeyRound, Code2, FileText, Binary, Link2, QrCode } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-blue-50 via-white to-gray-100" />
        <div className="relative max-w-4xl mx-auto px-6 py-16 text-center">
          {" "}
          {/* was py-32 */}
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
            WebToolsSpace
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Fast, reliable, and privacy-friendly tools for developers and
            creators.
          </p>
        </div>
      </section>

      {/* TOOLS */}
      <section className="bg-gray-100 py-16">
        {" "}
        {/* was py-28 */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {" "}
            {/* was gap-12 */}
            <ToolCard
              title="Password Generator"
              description="Create strong, secure passwords instantly."
              icon={KeyRound}
              href="/password-generator"
            />
            <ToolCard
              title="JSON Formatter"
              description="Format and validate JSON effortlessly."
              icon={Code2}
              href="/json-formatter"
            />
            <ToolCard
              title="Lorem Ipsum Generator"
              description="Generate placeholder text for designs."
              icon={FileText}
              href="/lorem-ipsum"
            />
            <ToolCard
              title="Base64 Encoder"
              description="Encode text into Base64 format."
              icon={Binary}
              href="/base64"
            />
            <ToolCard
              title="URL Encoder / Decoder"
              description="Encode or decode URLs instantly."
              icon={Link2}
              href="/url-encoder"
            />
            <ToolCard
              title="QR Code Generator"
              description="Generate QR codes for text or URLs."
              icon={QrCode}
              href="/qrcode"
            />
          </div>
        </div>
      </section>
    </>
  );
}
