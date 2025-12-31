"use client";

import Layout from "@/components/Layout";

export default function ContactPage() {
  return (
    <Layout>
      <div className="space-y-8">
        {/* Page Title */}
        <div>
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg mb-2">
            If you have feedback, suggestions, or issues, feel free to reach out
            via email:
          </p>
          <p>
            <a
              href="mailto:support@freeonlinetools.xyz"
              className="text-blue-600 hover:underline"
            >
              support@freeonlinetools.xyz
            </a>
          </p>
        </div>

        {/* Follow Us Section */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold mb-2">Follow Us</h2>
          <p>
            Stay updated with our latest tools and features on social media.
          </p>
          <div className="flex space-x-4 mt-2">
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 transition"
              aria-label="Facebook"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-600 transition"
              aria-label="Twitter"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-pink-500 hover:text-pink-700 transition"
              aria-label="Instagram"
            >
              Instagram
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}
