"use client";

import Layout from "@/components/Layout";

export default function AboutPage() {
  return (
    <Layout>
      <div className="space-y-12">
        {/* Page Title */}
        <div>
          <h1 className="text-4xl font-bold mb-6">About FreeOnlineTools</h1>
          <p className="text-lg">
            FreeOnlineTools provides fast, free, and privacy-friendly online
            utilities for developers and everyday users.
          </p>
        </div>

        {/* Why Choose Us */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> 100% browser-based
              tools
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> No data storage
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Fast and free
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Clean, modern UI
            </li>
          </ul>
        </section>

        {/* Our Mission */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p>
            Our mission is to empower users and developers with simple, fast,
            and reliable online tools that respect privacy and save time.
          </p>
        </section>

        {/* Connect With Us */}
        <section className="space-y-2">
          <h2 className="text-2xl font-semibold mb-2">Connect With Us</h2>
          <p>
            We love feedback and contributions! Reach out to us on social media
            or via email to share your thoughts.
          </p>
        </section>
      </div>
    </Layout>
  );
}
