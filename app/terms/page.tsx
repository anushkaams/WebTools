// app/terms/page.tsx
import Layout from "@/components/Layout";

export default function TermsPage() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>

      <p className="mb-4">
        By accessing FreeOnlineTools, you agree to these terms.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Use of Tools</h2>
      <p className="mb-4">
        All tools are provided "as is" without warranties of any kind.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Liability</h2>
      <p className="mb-4">
        We are not responsible for any damages resulting from use of our tools.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Changes</h2>
      <p className="mb-4">
        We may update these terms at any time without notice. Please check this
        page regularly for updates.
      </p>
    </Layout>
  );
}
