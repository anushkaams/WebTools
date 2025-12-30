export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-8 text-center text-sm text-gray-500">
        <div className="mb-3 space-x-6">
          <a href="/about" className="hover:text-blue-600">
            About
          </a>
          <a href="/contact" className="hover:text-blue-600">
            Contact
          </a>
          <a href="/privacy-policy" className="hover:text-blue-600">
            Privacy
          </a>
          <a href="/terms" className="hover:text-blue-600">
            Terms
          </a>
        </div>
        © 2025 WebTools. All rights reserved.
      </div>
    </footer>
  );
}
