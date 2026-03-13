"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import { Rnd } from "react-rnd";
import Link from "next/link";

export default function ImageResizerPage() {
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [resizedUrl, setResizedUrl] = useState<string | null>(null);
    const [size, setSize] = useState({ width: 0, height: 0 });

    // Load image and set original resolution
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            const src = event.target?.result as string;
            const img = new Image();
            img.src = src;
            img.onload = () => {
                setSize({ width: img.naturalWidth, height: img.naturalHeight }); // original resolution
                setImageSrc(src);
                setResizedUrl(null);
            };
        };
        reader.readAsDataURL(file);
    };

    // Generate resized image
    const handleDownload = () => {
        if (!imageSrc) return;
        const img = new Image();
        img.src = imageSrc;
        img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = size.width;
            canvas.height = size.height;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            ctx.drawImage(img, 0, 0, size.width, size.height);
            canvas.toBlob((blob) => {
                if (!blob) return;
                const url = URL.createObjectURL(blob);
                setResizedUrl(url);
            }, "image/jpeg", 0.9);
        };
    };

    return (
        <main className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto px-6 py-16">
                {/* SEO Heading */}
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Online Image Resizer – Resize Images Interactively in Browser
                </h1>

                {/* SEO Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                    Resize images instantly while maintaining their original resolution and aspect ratio.
                    This free online tool lets you visually adjust image size by dragging corners,
                    with no uploads or registration required. Download your resized images immediately.
                </p>

                {/* Feature List */}
                <ul className="text-gray-600 mb-10 space-y-2 list-none">
                    <li className="flex items-start gap-2">
                        <span className="text-green-500">✔</span>
                        <span>Resize images interactively with your mouse</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-green-500">✔</span>
                        <span>Maintains original resolution and aspect ratio</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-green-500">✔</span>
                        <span>Live width and height preview while resizing</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-green-500">✔</span>
                        <span>Completely in-browser, no image uploads</span>
                    </li>
                </ul>

                {/* Blog Internal Link */}
                <div className="mb-10 max-w-3xl rounded-xl border border-blue-100 bg-blue-50 p-5">
                    <h2 className="text-lg font-semibold text-gray-900 mb-2">
                        Want to optimize images for your website?
                    </h2>
                    <p className="text-gray-700 mb-3">
                        Learn how to resize and compress images to improve page speed, SEO, and overall user experience.
                    </p>
                    <Link
                        href="/documentation/blog/how-to-optimize-images-for-web"
                        className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline"
                    >
                        Read: How to Optimize Images for Web →
                    </Link>
                </div>

                {/* Image Resizer Card */}
                <div className="bg-white max-w-3xl rounded-2xl shadow-lg p-6 space-y-6">
                    {/* File Input */}
                    <div className="flex flex-col gap-4">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="border p-3 rounded-lg w-full text-gray-900"
                        />

                        {/* Live Size Display */}
                        {imageSrc && (
                            <div className="text-gray-700 text-sm">
                                Current Size: <strong>{Math.round(size.width)}px × {Math.round(size.height)}px</strong>
                            </div>
                        )}

                        {/* Resizable Image */}
                        {imageSrc && (
                            <div className="relative w-full max-w-full h-[600px] border rounded-lg bg-gray-100 flex items-center justify-center overflow-auto">
                                <Rnd
                                    size={{ width: size.width, height: size.height }}
                                    position={{ x: 0, y: 0 }}
                                    bounds="parent"
                                    lockAspectRatio={true}
                                    minWidth={50}
                                    minHeight={50}
                                    maxWidth={2000}
                                    maxHeight={2000}
                                    enableResizing={{
                                        top: true,
                                        right: true,
                                        bottom: true,
                                        left: true,
                                        topRight: true,
                                        bottomRight: true,
                                        bottomLeft: true,
                                        topLeft: true,
                                    }}
                                    onResize={(e, dir, ref) => {
                                        setSize({
                                            width: parseInt(ref.style.width),
                                            height: parseInt(ref.style.height),
                                        });
                                    }}
                                    style={{
                                        border: "2px dashed #0070f3",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <img
                                        src={imageSrc}
                                        alt="Resizable preview"
                                        style={{ width: "100%", height: "100%", objectFit: "contain", userSelect: "none" }}
                                    />
                                </Rnd>
                            </div>
                        )}

                        {/* Generate & Download Buttons */}
                        {imageSrc && (
                            <button
                                onClick={handleDownload}
                                className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
                            >
                                <Download size={18} />
                                Generate Resized Image
                            </button>
                        )}

                        {resizedUrl && (
                            <a
                                href={resizedUrl}
                                download="resized-image.jpg"
                                className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition"
                            >
                                <Download size={18} />
                                Download Resized Image
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}