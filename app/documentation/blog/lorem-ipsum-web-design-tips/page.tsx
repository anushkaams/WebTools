export const metadata = {
    title: "5 Ways Lorem Ipsum Can Improve Your Web Design Projects",
    description:
        "Discover how WebToolsSpace’s Lorem Ipsum generator helps web designers create better layouts and prototypes.",
};

export default function Page() {
    return (
        <article className="mx-auto max-w-4xl px-6 py-16 space-y-8">
            <header className="text-left space-y-3">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                    5 Ways Lorem Ipsum Can Improve Your Web Design Projects
                </h1>
                <p className="text-lg text-gray-600">
                    Tips to create better mockups and designs using placeholder text.
                </p>
            </header>

            <div className="space-y-6 text-gray-800 leading-relaxed">
                <section className="space-y-3">
                    <h2 className="text-2xl font-semibold text-gray-900">Why Designers Use Lorem Ipsum</h2>
                    <p>
                        Lorem Ipsum is dummy text that helps designers focus on layout, typography, and overall design without being distracted by real content.
                    </p>
                </section>

                <section className="space-y-3">
                    <h2 className="text-2xl font-semibold text-gray-900">Using WebToolsSpace Lorem Ipsum Generator</h2>
                    <p>
                        Visit the{" "}
                        <a href="../../tools/utility/lorem-ipsum" className="text-blue-600 underline font-semibold">
                            Lorem Ipsum Generator
                        </a>
                        , choose the number of paragraphs or words, and generate placeholder text instantly.
                    </p>
                </section>

                <section className="space-y-3">
                    <h2 className="text-2xl font-semibold text-gray-900">Tips for Effective Mockups</h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Use Lorem Ipsum to test typography and spacing</li>
                        <li>Mix paragraph lengths for a realistic layout</li>
                        <li>Replace with real content before final publication</li>
                    </ul>
                </section>
            </div>

            <div className="mt-12 rounded-xl border border-blue-100 bg-blue-50 p-8 text-center space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">Generate Lorem Ipsum Instantly</h3>
                <p className="text-gray-700">
                    Create realistic placeholder text for your designs with WebToolsSpace.
                </p>
                <a
                    href="../../tools/utility/lorem-ipsum"
                    className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-lg font-medium text-white hover:bg-blue-700 transition"
                >
                    Try Lorem Ipsum Generator →
                </a>
            </div>
        </article>
    );
}
