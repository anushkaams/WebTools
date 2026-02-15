export const metadata = {
    title: "The Ultimate Guide to Formatting JSON Online",
    description:
        "Learn how to format JSON easily with WebToolsSpace’s online JSON formatter for better readability and debugging.",
};

export default function Page() {
    return (
        <article className="mx-auto max-w-4xl px-6 py-16 space-y-8">
            <header className="text-left space-y-3">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                    The Ultimate Guide to Formatting JSON Online
                </h1>
                <p className="text-lg text-gray-600">
                    Step-by-step tutorial to make your JSON readable and easy to debug.
                </p>
            </header>

            <div className="space-y-6 text-gray-800 leading-relaxed">
                <section className="space-y-3">
                    <h2 className="text-2xl font-semibold text-gray-900">Why Formatting JSON Matters</h2>
                    <p>
                        Properly formatted JSON is easier to read, debug, and maintain. Unformatted JSON can lead to errors in APIs and web applications.
                    </p>
                </section>

                <section className="space-y-3">
                    <h2 className="text-2xl font-semibold text-gray-900">How to Format JSON Using WebToolsSpace</h2>
                    <p>
                        Visit the{" "}
                        <a href="../../tools/developer/json-formatter" className="text-blue-600 underline font-semibold">
                            JSON Formatter
                        </a>
                        , paste your JSON code, and click “Format.” Your code is instantly readable.
                    </p>
                </section>

                <section className="space-y-3">
                    <h2 className="text-2xl font-semibold text-gray-900">Tips for Debugging JSON</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Always validate JSON after editing</li>
                        <li>Use indentation to improve readability</li>
                        <li>Check for missing commas or braces</li>
                    </ul>
                </section>
            </div>

            <div className="mt-12 rounded-xl border border-blue-100 bg-blue-50 p-8 text-center space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">Format Your JSON Instantly</h3>
                <p className="text-gray-700">
                    Make your JSON readable and error-free in seconds with WebToolsSpace.
                </p>
                <a
                    href="../../tools/developer/json-formatter"
                    className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-lg font-medium text-white hover:bg-blue-700 transition"
                >
                    Try JSON Formatter →
                </a>
            </div>
        </article>
    );
}
