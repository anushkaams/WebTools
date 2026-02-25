export const metadata = {
    title: "How to Optimize Images for Web",
    description:
        "Learn how to reduce image file size, improve website speed, and maintain quality with effective image optimization techniques.",
};

export default function Page() {
    return (
        <article className="mx-auto max-w-4xl px-6 py-16 space-y-8">
            {/* Title */}
            <header className="text-left space-y-3">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                    How to Optimize Images for Web
                </h1>
                <p className="text-lg text-gray-600">
                    Reduce image size, improve website speed, and maintain visual quality.
                </p>
            </header>

            {/* Content */}
            <div className="space-y-6 text-gray-800 leading-relaxed">
                <section className="space-y-3">
                    <h2 className="text-2xl font-semibold text-gray-900">
                        Why Image Optimization Matters
                    </h2>
                    <p>
                        Large images can slow down your website, negatively impact SEO, and increase bandwidth usage. Optimizing images ensures your site loads faster while keeping visuals sharp and professional.
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Faster website loading improves user experience.</li>
                        <li>Optimized images help your website rank higher on search engines.</li>
                        <li>Reduces bandwidth usage and hosting costs.</li>
                        <li>Maintains high-quality visuals without slowing down your site.</li>
                    </ul>
                </section>

                <section className="space-y-3">
                    <h2 className="text-2xl font-semibold text-gray-900">
                        Choosing the Right File Format
                    </h2>
                    <p>
                        The right file format makes a big difference in image size and quality:
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                        <li><strong>JPEG / JPG:</strong> Best for photographs; good compression with minimal quality loss.</li>
                        <li><strong>PNG:</strong> Ideal for images requiring transparency or crisp lines, like logos.</li>
                        <li><strong>WebP:</strong> Modern format with smaller file sizes than JPEG/PNG while maintaining quality.</li>
                        <li><strong>SVG:</strong> Perfect for vector graphics and icons; scalable and lightweight.</li>
                    </ul>
                </section>

                <section className="space-y-3">
                    <h2 className="text-2xl font-semibold text-gray-900">
                        Resize Images Before Upload
                    </h2>
                    <p>
                        Large dimensions increase file size even if compressed. Resize images to the maximum display size required on your site. Tools like WebToolsSpace's Image Compressor allow you to resize and compress images directly in your browser.
                    </p>
                </section>

                <section className="space-y-3">
                    <h2 className="text-2xl font-semibold text-gray-900">
                        Compress Images Without Losing Quality
                    </h2>
                    <p>
                        Compression reduces file size while preserving visual quality. Use:
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                        <li><strong>Lossy compression:</strong> Slight quality loss for smaller file size, ideal for photos.</li>
                        <li><strong>Lossless compression:</strong> Maintains original quality, ideal for graphics and logos.</li>
                    </ul>
                    <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-700">
                        Use our <a href="../tools/image-compressor" className="text-blue-600 hover:underline">Image Compressor</a> to compress images instantly in your browser without uploading to any server.
                    </blockquote>
                </section>

                <section className="space-y-3">
                    <h2 className="text-2xl font-semibold text-gray-900">
                        Lazy Loading for Faster Page Speed
                    </h2>
                    <p>
                        Lazy loading delays image loading until they appear on the user's screen, improving page speed and SEO. Use the <code>loading="lazy"</code> attribute in your <code>&lt;img&gt;</code> tags.
                    </p>
                </section>

                <section className="space-y-3">
                    <h2 className="text-2xl font-semibold text-gray-900">
                        Optimize for Mobile Devices
                    </h2>
                    <p>
                        Serve responsive images to mobile users with smaller file sizes using <code>srcset</code> and <code>sizes</code> attributes. This ensures users download only the most appropriate image for their device.
                    </p>
                </section>

                <section className="space-y-3">
                    <h2 className="text-2xl font-semibold text-gray-900">
                        Test Your Optimized Images
                    </h2>
                    <p>
                        Tools like Google PageSpeed Insights and GTmetrix help you verify website speed and image optimization. Ensure that file sizes are reduced without noticeable quality loss.
                    </p>
                </section>
            </div>

            {/* CTA */}
            <div className="mt-12 rounded-xl border border-blue-100 bg-blue-50 p-8 text-center space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900">
                    Compress Your Images Instantly
                </h3>
                <p className="text-gray-700">
                    Reduce image file size directly in your browser - fast, free, and privacy-friendly.
                </p>
                <a
                    href="../../tools/media/image-compressor"
                    className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-lg font-medium text-white hover:bg-blue-700 transition"
                >
                    Try Image Compressor →
                </a>
            </div>
        </article>
    );
}