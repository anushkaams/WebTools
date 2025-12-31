// app/privacy/page.tsx
import Layout from "@/components/Layout";

export default function PrivacyPage() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-gray-500 mb-6">Last updated: 2025</p>

      <p className="mb-4">
        At FreeOnlineTools, your privacy is important to us. We do not collect
        personal information unless voluntarily provided.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Google AdSense</h2>
      <p className="mb-4">
        We use Google AdSense to display ads. Google may use cookies to serve
        ads based on your visits to this and other websites. You can opt-out via
        Google Ads Settings.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Cookies</h2>
      <p className="mb-4">
        Cookies help improve user experience and analyze site traffic.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Consent</h2>
      <p className="mb-4">
        By using our website, you consent to this Privacy Policy.
      </p>
    </Layout>
  );
}
