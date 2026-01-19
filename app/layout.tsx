import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import Script from "next/script";
import Head from "next/head";
import AnalyticsTracker from "./AnalyticsTracker";

export const metadata = {
  title: "WebTools",
  description: "Your all-in-one online tools hub",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="9JzXDaah5gKJwBURGbXZlZ5ufO5ZFQ8qLnZS8a0Z4K8"
        />
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-RX3HB8JKLW`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-RX3HB8JKLW', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </Head>
      <body className="min-h-screen flex flex-col">
        <AnalyticsTracker />
        <Navbar />

        <main className="flex-1 pt-24">{children}</main>

        <Footer />

        {/* Google Adsense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8839810575741990"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* Buy Me a Coffee */}
        <Script
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          strategy="afterInteractive"
          data-name="BMC-Widget"
          data-id="anushkaams"
          data-description="Support WebToolsSpace ☕"
          data-message="If you like these tools, you can support the project!"
          data-color="#2563eb"
          data-position="Right"
          data-x_margin="18"
          data-y_margin="18"
        />
      </body>
    </html>
  );
}
