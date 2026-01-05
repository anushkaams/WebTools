import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />

        {/* Main grows to push footer down */}
        <main className="flex-1 pt-24">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
