// app/layout.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BuyMeACoffee from "@/components/BuyMeACoffee";
import "./globals.css";
import Script from "next/script";
import {GoogleAnalytics} from "@next/third-parties/google";

export const metadata = {
    title: "WebTools",
    description: "Your all-in-one online tools hub",
    icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {/* Don’t put <title> here; metadata already handles it */}
        </head>
        <body className="min-h-screen flex flex-col bg-gray-50">
        {/* Google tag (gtag.js) */}
        <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-RX3HB8JKLW"
            strategy="afterInteractive"
        />
        <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RX3HB8JKLW');
            `,
            }}
        />

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
        <GoogleAnalytics gaId="G-C79348L1H7" />
        </html>
    );
}
