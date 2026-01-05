export const metadata = {
  title: "How to Create Strong Passwords Online",
  description:
    "Learn how to create strong passwords and protect your online accounts using secure password generators.",
};

export default function Page() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-16 space-y-8">
      {/* Title */}
      <header className="text-left space-y-3">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          How to Create Strong Passwords Online
        </h1>
        <p className="text-lg text-gray-600">
          Simple rules and tools to keep your online accounts secure.
        </p>
      </header>

      {/* Content */}
      <div className="space-y-6 text-gray-800 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-gray-900">
            Why Strong Passwords Matter
          </h2>
          <p>
            Creating strong passwords is one of the most important steps in
            protecting your online accounts. Weak or reused passwords are a
            leading cause of data breaches and account takeovers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-gray-900">
            What Makes a Password Strong?
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              At least <strong>12–16 characters</strong> long
            </li>
            <li>Mix of uppercase and lowercase letters</li>
            <li>Includes numbers and symbols</li>
            <li>No personal or predictable information</li>
          </ul>
          <p>
            Many users rely on personal details or simple patterns, which are
            easy for attackers to guess. Reusing the same password across
            multiple websites significantly increases risk.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-gray-900">
            Why Use an Online Password Generator?
          </h2>
          <p>
            Online password generators eliminate these risks by creating truly
            random combinations that don’t follow predictable patterns.
          </p>
          <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700">
            WebToolsSpace’s Password Generator runs entirely in your browser,
            ensuring your passwords are never stored or transmitted.
          </blockquote>
          <p>
            Using a reliable password generator helps protect your personal
            data, digital identity, and online privacy.
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
          href="/password-generator"
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-lg font-medium text-white hover:bg-blue-700 transition"
        >
          Try Password Generator →
        </a>
      </div>
    </article>
  );
}
