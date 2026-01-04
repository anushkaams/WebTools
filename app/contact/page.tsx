"use client";

import Layout from "@/components/Layout";
import Link from "next/link";

export default function ContactPage() {
  return (
    <Layout>
      <div className="space-y-8 max-w-3xl">
        {/* Page Title */}
        <div>
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg mb-2">
            If you have any questions, feedback, suggestions, or notice an issue
            with our tools, please feel free to contact us.
          </p>
          <p className="mb-4">
            Email us at :{" "}
            <a
              href="mailto:webtoolsspace@gmail.com"
              className="text-blue-600 hover:underline"
            >
              webtoolsspace@gmail.com
            </a>
          </p>
          <p className="text-gray-600">
            For information about how we handle user data, please review our{" "}
            <Link href="/privacy" className="text-blue-600 underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        {/* Follow Us Section */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold mb-2">Follow Us</h2>
          <p>
            Follow us on social media to stay updated with new tools and
            improvements.
          </p>

          {/* Only include REAL links. Remove this section if you don't have them yet */}
          <div className="flex space-x-4 mt-2">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Twitter
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}
