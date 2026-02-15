export const metadata = {
    title: "Base64 Encoding Made Easy: Free Online Tools for Developers",
    description:
        "Step-by-step guide to encode and decode text with Base64 using WebToolsSpace tools for secure web development.",
};

export default function Page() {
    return (
        <article className="mx-auto max-w-4xl px-6 py-16 space-y-8">
            <header className="text-left space-y-3">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                    Base64 Encoding Made Easy: Free Online Tools for Developers
                </h1>
                <p className="text-lg text-gray-600">
                    Learn how to encode and decode text quickly and safely online.
                </p>
            </header>

            <div className="space-y-6 text-gray-800 leading-relaxed">
                <section className="space-y-3">
                    <h2 className="text-2xl font-semibold text-gray-900">What is Base64 Encoding?</h2>
                    <p>
                        Base64 encoding converts data into a text representation, making it safe to store or transmit in web applications and emails.
                    </p>
                </section>

                <section className="space-y-3">
                    <h2 className="text-2xl font-semibold text-gray-900">How to Encode and Decode Using WebToolsSpace</h2>
                    <p>
                        Go to the{" "}
                        <a href="../../tools/developer/base64" className="text-blue-600 underline font-semibold">
                            Base64 Encoder/Decoder
                        </a>
                        , input your text, and click encode or decode. The result appears instantly.
                    </p>
                </section>

                <section className="space-y-3">
                    <h2 className="text-2xl font-semibold text-gray-900">Practical Use Cases</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Encoding email addresses to avoid spam</li>
                        <li>Transmitting data safely in web APIs</li>
                        <li>Embedding images or files in text formats</li>
                    </ul>
                </section>
            </div>

            <div className="mt-12 rounded-xl border border-blue-100 bg-blue-50 p-8 text-center space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">Encode or Decode Text Instantly</h3>
                <p className="text-gray-700">
                    Use WebToolsSpace’s Base64 tool for secure and fast text encoding.
                </p>
                <a
                    href="../../tools/developer/base64"
                    className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-lg font-medium text-white hover:bg-blue-700 transition"
                >
                    Try Base64 Encoder →
                </a>
            </div>
        </article>
    );
}
