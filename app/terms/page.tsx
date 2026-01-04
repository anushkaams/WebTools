// app/terms/page.tsx
import Layout from "@/components/Layout";
import Link from "next/link";

export default function TermsPage() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>

      <p className="mb-4">
        By accessing and using <strong>WebToolsSpace</strong>, you agree to
        these Terms and Conditions. If you do not agree with any part of these
        terms, please do not use the website.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Use of Tools</h2>
      <p className="mb-4">
        All tools provided on WebToolsSpace are for general informational,
        educational, and personal use only. You agree to use the tools
        responsibly and not for any unlawful purpose. Tools are provided{" "}
        <strong>"as is"</strong> without warranties of any kind.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Intellectual Property
      </h2>
      <p className="mb-4">
        All content, code, and design elements on WebToolsSpace are the property
        of the site or its licensors. You may use the tools for personal or
        commercial purposes but may not copy, redistribute, or resell them
        without explicit permission.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Limitation of Liability
      </h2>
      <p className="mb-4">
        WebToolsSpace and its owners shall not be liable for any direct,
        indirect, incidental, or consequential damages resulting from the use of
        this website or its tools, including any loss of data or revenue.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Third-Party Ads</h2>
      <p className="mb-4">
        Our website may display advertisements from third-party networks such as{" "}
        <strong>Google AdSense</strong>. We are not responsible for the content
        or policies of third-party advertisers. For information on how we handle
        data and cookies used in ads, please see our{" "}
        <Link href="/privacy" className="text-blue-600 underline">
          Privacy Policy
        </Link>
        .
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Changes to Terms</h2>
      <p className="mb-4">
        WebToolsSpace reserves the right to update or modify these Terms and
        Conditions at any time. Changes take effect immediately upon posting on
        this page. We encourage you to review this page periodically to stay
        informed.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Governing Law</h2>
      <p className="mb-4">
        These terms shall be governed by and construed in accordance with the
        laws of your jurisdiction. Use of this website constitutes acceptance of
        these terms.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about these Terms and Conditions, you can
        contact us via our{" "}
        <Link href="/contact" className="text-blue-600 underline">
          Contact Page
        </Link>
        .
      </p>
    </Layout>
  );
}
