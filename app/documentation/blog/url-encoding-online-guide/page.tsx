export const metadata = {
    title: "How to Encode URLs to Avoid Broken Links",
    description:
        "Prevent broken URLs by using WebToolsSpace's URL encoder and decoder tools with this step-by-step tutorial.",
};

export default function Page() {
    return (
        <article className="mx-auto max-w-4xl px-6 py-16 space-y-8">
            <header className="text-left space-y-3">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                    How to Encode URLs to Avoid Broken Links
                </h1>
                <p className="text-lg text-gray-600">
                    Step-by-step guide to keep your links safe and shareable online.
                </p>
            </header>

            <div className="space-y-6 text-gray-800 leading-relaxed">
                <section className="space-y-3">
                    <h2 className="text-2xl font-semibold text-gray-900">What is URL Encoding?</h2>
                    <p>
                        URL encoding converts characters into a format that can be safely transmitted over the internet. Special characters like spaces or symbols can break links if not encoded.
                    </p>
                </section>

                <section className="space-y-3">
                    <h2 className="text-2xl font-semibold text-gray-900">How to Encode URLs Using WebToolsSpace</h2>
                    <p>
                        Go to the{" "}
                        <a href="../../tools/developer/url-encoder" className="text-blue-600 underline font-semibold">
                            URL Encoder/Decoder
                        </a>
                        , paste your URL, and click “Encode” or “Decode” as needed.
                    </p>
                </section>

                <section className="space-y-3">
                    <h2 className="text-2xl font-semibold text-gray-900">Tips for Safe Links</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Always encode URLs when sharing in emails or web apps</li>
                        <li>Test links before sending to ensure they work</li>
                        <li>Use a URL decoder to troubleshoot broken links</li>
                    </ul>
                </section>
            </div>

            <div className="mt-12 rounded-xl border border-blue-100 bg-blue-50 p-8 text-center space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">Encode Your URLs Instantly</h3>
                <p className="text-gray-700">
                    Keep your links safe and shareable with WebToolsSpace’s URL encoder.
                </p>
                <a
                    href="../../tools/developer/url-encoder"
                    className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-lg font-medium text-white hover:bg-blue-700 transition"
                >
                    Try URL Encoder →
                </a>
            </div>
        </article>
    );
}
