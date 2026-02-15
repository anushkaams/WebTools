import Link from "next/link";

export const metadata = {
  title: "Blog - WebToolsSpace",
  description:
    "Security tips, password guides, and productivity articles from WebToolsSpace.",
};

export default function BlogPage() {
  const posts = [
    {
      title: "How to Create Strong Passwords Online",
      description:
        "Learn simple rules and tools to create strong passwords and keep your accounts secure.",
      href: "/documentation/blog/how-to-create-strong-passwords",
    },
    {
      title: "Why Random Password Generators Are Safer",
      description:
        "Discover why random password generators are more secure than manually created passwords.",
      href: "/documentation/blog/why-random-password-generators-are-safer",
    },
    {
      title: "Online Tools That Improve Security and Productivity",
      description:
        "Explore online tools that enhance security and boost productivity in daily workflows.",
      href: "/documentation/blog/online-tools-for-security-and-productivity",
    },
    {
      title: "How to Generate QR Codes for Your Business Cards Online",
      description:
        "Learn how to create QR codes for your business cards online for free using WebToolsSpace's QR code generator.",
      href: "/documentation/blog/generate-qr-codes-for-business-cards",
    },
    {
      title: "Base64 Encoding Made Easy: Free Online Tools for Developers",
      description:
          "Step-by-step guide to encode and decode text with Base64 using WebToolsSpace tools for secure web development.",
      href: "/documentation/blog/base64-encoding-online-tools",
    },
    {
      title: "The Ultimate Guide to Formatting JSON Online",
      description:
          "Learn how to format JSON easily with WebToolsSpace’s online JSON formatter for better readability and debugging.",
      href: "/documentation/blog/format-json-online-guide",
    },
    {
      title: "How to Encode URLs to Avoid Broken Links",
      description:
          "Prevent broken URLs by using WebToolsSpace's URL encoder and decoder tools with this step-by-step tutorial.",
      href: "/documentation/blog/url-encoding-online-guide",
    },
    {
      title: "5 Ways Lorem Ipsum Can Improve Your Web Design Projects",
      description:
          "Discover how WebToolsSpace’s Lorem Ipsum generator helps web designers create better layouts and prototypes.",
      href: "/documentation/blog/lorem-ipsum-web-design-tips",
    }

  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-16 space-y-12">
      {/* Page Header */}
      <header className="text-left space-y-3">
        <h1 className="text-4xl font-bold text-gray-900">Blog</h1>
        <p className="text-lg text-gray-600">
          Guides and articles to help you stay secure and productive online.
        </p>
      </header>

      {/* Blog List */}
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.href}>
            <Link
              href={post.href}
              className="
                group relative rounded-2xl
                bg-white/80 backdrop-blur
                p-6 md:p-8
                shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                hover:shadow-[0_20px_50px_rgba(59,130,246,0.25)]
                transition-all duration-300
                hover:-translate-y-1
                block
              "
            >
              <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                {post.title}
              </h2>
              <p className="mt-2 text-gray-600 leading-relaxed">
                {post.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
