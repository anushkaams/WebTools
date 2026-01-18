import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "WebTools",
  description: "Your all-in-one online tools hub",
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "A9JzXDaah5gKJwBURGbXZlZ5ufO5ZFQ8qLnZS8a0Z4K8", // optional Google verification
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main className="flex-1 pt-24">{children}</main>

        {/* Footer */}
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
