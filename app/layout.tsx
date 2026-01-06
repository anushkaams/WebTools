import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>WebTools</title>
        <link rel="icon" href="/favicon.ico" /> {/* Your exported logo here */}
        <meta name="google-adsense-account" content="ca-pub-8839810575741990" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8839810575741990"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        ></Script>
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />

        {/* Main grows to push footer down */}
        <main className="flex-1 pt-24">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
