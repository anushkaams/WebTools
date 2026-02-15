export const metadata = {
  title: "How to Generate QR Codes for Your Business Cards Online",
  description:
    "Learn how to create QR codes for your business cards online for free using WebToolsSpace's QR code generator.",
};

export default function Page() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-16 space-y-8">
      {/* Title */}
      <header className="text-left space-y-3">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          How to Generate QR Codes for Your Business Cards Online
        </h1>
        <p className="text-lg text-gray-600">
          Step-by-step guide to create professional QR codes instantly.
        </p>
      </header>

      {/* Content */}
      <div className="space-y-6 text-gray-800 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-gray-900">
            Why QR Codes Are Useful
          </h2>
          <p>
            QR codes allow instant sharing of your contact information. Instead
            of manually typing details, anyone can scan your code to save your
            contact in seconds. They are perfect for networking events, digital
            resumes, and business cards.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-gray-900">
            Step 1: Open the QR Code Generator
          </h2>
          <p>
            Go to the{" "}
            <a
              href="../../tools/qr-code-generator"
              className="text-blue-600 underline"
            >
              WebToolsSpace QR Code Generator
            </a>
            . You’ll see a simple interface asking for your business details.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-gray-900">
            Step 2: Enter Your Business Information
          </h2>
          <p>
            Fill in the details you want the QR code to contain: name, job
            title, company, email, phone number, and website URL.
          </p>
          <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700">
            Tip: Make sure all information is accurate. A QR code is only useful
            if it contains correct data.
          </blockquote>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-gray-900">
            Step 3: Customize Your QR Code
          </h2>
          <p>
            Choose colors to match your branding, optionally add a logo or icon,
            and set the size and resolution depending on whether you’ll print or
            share digitally.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-gray-900">
            Step 4: Generate and Download
          </h2>
          <p>
            Click “Generate QR Code.” Preview your code and download it as PNG
            or SVG for print or online use.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-gray-900">
            Step 5: Test Your QR Code
          </h2>
          <p>
            Scan your QR code with your phone to verify that all information is
            correct before sharing.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-gray-900">
            Step 6: Share Your QR Code
          </h2>
          <p>
            Print it on business cards, add it to your email signature, or
            include it in presentations or LinkedIn profiles.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-gray-900">
            Why Use WebToolsSpace QR Code Generator?
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Free and online - no software installation required</li>
            <li>Simple and easy-to-use interface</li>
            <li>Customizable sizes</li>
            <li>Instant download</li>
          </ul>
        </section>
      </div>

      {/* CTA */}
      <div className="mt-12 rounded-xl border border-blue-100 bg-blue-50 p-8 text-center space-y-4">
        <h3 className="text-2xl font-semibold text-gray-900">
          Generate Your QR Code Instantly
        </h3>
        <p className="text-gray-700">
          Create professional QR codes for your business cards in seconds –
          completely free.
        </p>
        <a
          href="../../tools/utility/qrcode"
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-lg font-medium text-white hover:bg-blue-700 transition"
        >
          Try QR Code Generator →
        </a>
      </div>
    </article>
  );
}
