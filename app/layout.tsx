import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import Script from "next/script";
import Head from "next/head";
import AnalyticsTracker from "./AnalyticsTracker";
import BuyMeACoffee from "@/components/BuyMeACoffee";

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
      <body className="min-h-screen flex flex-col bg-gray-50">
        <AnalyticsTracker />
        <Navbar />

        <main className="flex-1 mt-20">{children}</main>
        <BuyMeACoffee />
        <Footer />

        {/* Google Adsense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8839810575741990"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
