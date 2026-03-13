"use client";

import { useState, useEffect } from "react";
import { Download } from "lucide-react";
import Link from "next/link";
import { Rnd } from "react-rnd";

export default function ImageResizerPage() {
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [resizedUrl, setResizedUrl] = useState<string | null>(null);
    const [size, setSize] = useState<{ width: number; height: number } | null>(null);

    const [maxArea, setMaxArea] = useState({ width: 800, height: 500 });

    // Update max area based on viewport
    useEffect(() => {
        const updateMaxArea = () => {
            setMaxArea({
                width: window.innerWidth * 0.9,
                height: window.innerHeight * 0.6,
            });
        };
        updateMaxArea();
        window.addEventListener("resize", updateMaxArea);
        return () => window.removeEventListener("resize", updateMaxArea);
    }, []);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.src = event.target?.result as string;

            img.onload = () => {
                // Scale image to fit max area if too big
                const scaleX = img.naturalWidth > maxArea.width ? maxArea.width / img.naturalWidth : 1;
                const scaleY = img.naturalHeight > maxArea.height ? maxArea.height / img.naturalHeight : 1;
                const scale = Math.min(scaleX, scaleY);

                setSize({
                    width: Math.max(img.naturalWidth * scale, 100),
                    height: Math.max(img.naturalHeight * scale, 100),
                });
                setImageSrc(img.src);
                setResizedUrl(null);
            };
        };
        reader.readAsDataURL(file);
    };

    const handleDownload = () => {
        if (!imageSrc || !size) return;

        const img = new Image();
        img.src = imageSrc;

        img.onload = () => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            // ✅ Download will match Rnd box size exactly (may stretch)
            canvas.width = size.width;
            canvas.height = size.height;
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            canvas.toBlob(
                (blob) => {
                    if (!blob) return;
                    const url = URL.createObjectURL(blob);
                    setResizedUrl(url);
                },
                "image/jpeg",
                0.9
            );
        };
    };

    return (
        <main className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto px-6 py-16">
                {/* SEO Heading */}
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Online Image Resizer – Resize Images Interactively
                </h1>

                {/* SEO Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                    Resize images visually by dragging corners. Maintain original resolution and scale to fit your screen.
                    Free, fast, and secure online tool for web optimization.
                </p>

                {/* Blog Internal Link */}
                <div className="mb-10 max-w-3xl rounded-xl border border-blue-100 bg-blue-50 p-5">
                    <h2 className="text-lg font-semibold text-gray-900 mb-2">
                        Want to optimize images for your website?
                    </h2>
                    <p className="text-gray-700 mb-3">
                        Learn how to resize and compress images to improve page speed and SEO.
                    </p>
                    <Link
                        href="/documentation/blog/how-to-optimize-images-for-web"
                        className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline"
                    >
                        Read: How to Optimize Images for Web →
                    </Link>
                </div>

                {/* Image Resizer Card */}
                <div className="bg-white max-w-4xl rounded-2xl shadow-lg p-6 space-y-6">
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="border p-3 rounded-lg w-full text-gray-900"
                    />

                    {imageSrc && size && (
                        <div className="flex flex-col items-center gap-6">
                            {/* Current Size */}
                            <div className="text-sm text-gray-600">
                                Current Size: <strong>{Math.round(size.width)}px × {Math.round(size.height)}px</strong>
                            </div>

                            {/* Resize Area */}
                            <div
                                className="relative w-full border rounded-lg bg-gray-100 flex items-center justify-center overflow-auto"
                                style={{ height: maxArea.height }}
                            >
                                <Rnd
                                    size={{ width: size.width, height: size.height }}
                                    minWidth={50}
                                    minHeight={50}
                                    lockAspectRatio={false}
                                    onResize={(e, dir, ref) => {
                                        setSize({
                                            width: parseInt(ref.style.width),
                                            height: parseInt(ref.style.height),
                                        });
                                    }}
                                    className="flex items-center justify-center"
                                >
                                    <img
                                        src={imageSrc}
                                        alt="Resizable preview"
                                        style={{ width: "100%", height: "100%", objectFit: "contain" }}
                                    />
                                </Rnd>
                            </div>

                            {/* Generate Button */}
                            <button
                                onClick={handleDownload}
                                className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
                            >
                                <Download size={18} /> Generate Resized Image
                            </button>
                        </div>
                    )}

                    {resizedUrl && (
                        <a
                            href={resizedUrl}
                            download="resized-image.jpg"
                            className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition"
                        >
                            <Download size={18} /> Download Resized Image
                        </a>
                    )}
                </div>
            </div>
        </main>
    );
}