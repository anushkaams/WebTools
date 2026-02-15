export const metadata = {
  title: "Online Tools That Improve Security and Productivity",
  description:
    "Learn how online tools improve digital security and productivity in daily workflows.",
};

export default function Page() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-16 space-y-8">
      {/* Title */}
      <header className="text-left space-y-3">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Online Tools That Improve Security and Productivity
        </h1>
      </header>

      {/* Content */}
      <div className="space-y-6 text-gray-800 leading-relaxed">
        <section className="space-y-3">
          <p>
            Online tools have become essential for improving productivity and
            maintaining digital security. From password generators to formatters
            and converters, these tools help users complete tasks quickly.
          </p>
        </section>

        <section className="space-y-3">
          <p>
            Security-focused tools protect sensitive data, while productivity
            tools reduce errors and save time across workflows.
          </p>
        </section>

        <section className="space-y-3">
          <p>
            WebToolsSpace provides fast, privacy-focused tools that run entirely
            in the browser, offering convenience without compromising security.
          </p>
        </section>
      </div>
      {/* CTA */}
      <div className="mt-12 rounded-xl border border-blue-100 bg-blue-50 p-8 text-center space-y-4">
        <h3 className="text-2xl font-semibold text-gray-900">
          Generate a Secure Password Instantly
        </h3>
        <p className="text-gray-700">
          Create strong, random passwords with one click – no signup required.
        </p>
        <a
          href="../../tools/security/password-generator"
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-lg font-medium text-white hover:bg-blue-700 transition"
        >
          Try Password Generator →
        </a>
      </div>
    </article>
  );
}
