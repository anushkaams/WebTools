// app/privacy/page.tsx
import Layout from "@/components/Layout";

export default function PrivacyPage() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-gray-500 mb-6">Last updated: 2026 January</p>

      <p className="mb-4">
        At <strong>WebToolsSpace</strong>, accessible from this website, the
        privacy of our visitors is important to us. This Privacy Policy document
        outlines the types of information that are collected and recorded and
        how we use it.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Information We Collect
      </h2>
      <p className="mb-4">
        WebToolsSpace does not require users to create an account and does not
        intentionally collect personally identifiable information unless it is
        voluntarily provided (for example, via a contact form).
      </p>
      <p className="mb-4">
        We may collect non-personal information such as browser type, device
        information, pages visited, and time spent on the site. This information
        is used solely to improve website performance and user experience.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Cookies</h2>
      <p className="mb-4">
        WebToolsSpace uses cookies to store information about visitors’
        preferences, optimize user experience, analyze site traffic, and serve
        relevant advertisements. Users can choose to disable cookies through
        their individual browser options.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Google AdSense</h2>
      <p className="mb-4">
        We use Google AdSense, a third-party advertising service. Google uses
        cookies, including the DoubleClick cookie, to serve ads to users based
        on their visits to this and other websites.
      </p>
      <p className="mb-4">
        The DoubleClick cookie enables Google and its partners to display ads
        that are relevant to users’ interests. Users may opt out of personalized
        advertising by visiting{" "}
        <a
          href="https://adssettings.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Google Ads Settings
        </a>
        .
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Third-Party Privacy Policies
      </h2>
      <p className="mb-4">
        WebToolsSpace’s Privacy Policy does not apply to other advertisers or
        websites. We advise you to consult the respective Privacy Policies of
        third-party ad servers or websites for more detailed information about
        their practices and instructions on how to opt out of certain options.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        Children’s Information
      </h2>
      <p className="mb-4">
        WebToolsSpace does not knowingly collect any Personal Identifiable
        Information from children under the age of 13. If you believe that your
        child has provided personal information on this website, please contact
        us and we will promptly remove such information from our records.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Consent</h2>
      <p className="mb-4">
        By using our website, you hereby consent to this Privacy Policy and
        agree to its terms.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy, please contact us
        via our <strong>Contact Us</strong> page.
      </p>
    </Layout>
  );
}
