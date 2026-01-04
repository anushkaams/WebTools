"use client";

import Layout from "@/components/Layout";
import Link from "next/link";

export default function AboutPage() {
  return (
    <Layout>
      <div className="space-y-12 max-w-3xl">
        {/* Page Title */}
        <div>
          <h1 className="text-4xl font-bold mb-6">About WebToolsSpace</h1>
          <p className="text-lg mb-4">
            WebToolsSpace provides fast, free, and privacy-friendly online
            utilities for developers and everyday users. All tools are
            browser-based and require no data storage.
          </p>
          <p className="text-lg">
            Our goal is to help people save time and work efficiently with
            simple, easy-to-use tools that respect privacy.
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
            and reliable online tools that respect privacy and save time. We aim
            to be a trusted resource for anyone looking for practical online
            utilities without the hassle of registration or data collection.
          </p>
        </section>

        {/* Connect With Us */}
        <section className="space-y-2">
          <p className="text-gray-600">
            For information on privacy and how we handle data, see our{" "}
            <Link href="/privacy" className="text-blue-600 underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms" className="text-blue-600 underline">
              Terms & Conditions
            </Link>
            .
          </p>
        </section>
      </div>
    </Layout>
  );
}
