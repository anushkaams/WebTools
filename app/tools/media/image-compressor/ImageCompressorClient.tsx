"use client";

import { useState } from "react";
import { Download } from "lucide-react";
import Link from "next/link";

export default function ImageCompressorPage() {
    const [compressedUrl, setCompressedUrl] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const img = new Image();
        const reader = new FileReader();

        reader.onload = (event) => {
            img.src = event.target?.result as string;
        };

        img.onload = () => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            const MAX_WIDTH = 800;
            const scale = Math.min(MAX_WIDTH / img.width, 1);
            canvas.width = img.width * scale;
            canvas.height = img.height * scale;

            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            canvas.toBlob(
                (blob) => {
                    if (!blob) return;
                    const url = URL.createObjectURL(blob);
                    setCompressedUrl(url);
                },
                "image/jpeg",
                0.7
            );
        };

        reader.readAsDataURL(file);
    };

    return (
        <main className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto px-6 py-16">
                {/* SEO Heading */}
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Online Image Compressor – Reduce Image Size Without Losing Quality
                </h1>

                {/* SEO Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                    Compress images instantly in your browser without losing quality. This free online tool
                    reduces image file size for faster uploads, improved website performance, and social
                    sharing. Works completely in your browser, no registration required.
                </p>

                {/* Feature List */}
                <ul className="text-gray-600 mb-10 space-y-2 list-none">
                    <li className="flex items-start gap-2">
                        <span className="text-green-500">✔</span>
                        <span>Compress images instantly in your browser</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-green-500">✔</span>
                        <span>Supports JPEG, PNG, and WebP formats</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-green-500">✔</span>
                        <span>Resize large images for faster upload and website optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-green-500">✔</span>
                        <span>Privacy-friendly: no images are uploaded to any server</span>
                    </li>
                </ul>

                {/* Blog Internal Link */}
                <div className="mb-10 max-w-3xl rounded-xl border border-blue-100 bg-blue-50 p-5">
                    <h2 className="text-lg font-semibold text-gray-900 mb-2">
                        Want to optimize images for your website?
                    </h2>
                    <p className="text-gray-700 mb-3">
                        Learn how to reduce image file size effectively without losing quality to improve
                        website speed and SEO.
                    </p>
                    <Link
                        href="/documentation/blog/how-to-optimize-images-for-web"
                        className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline"
                    >
                        Read: How to Optimize Images for Web →
                    </Link>
                </div>

                {/* Image Compressor Card */}
                <div className="bg-white max-w-3xl rounded-2xl shadow-lg p-6 space-y-6">
                    {/* File Input */}
                    <div className="flex flex-col gap-4">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="border p-3 rounded-lg w-full text-gray-900"
                        />

                        {/* Compressed Image Preview & Download */}
                        {compressedUrl && (
                            <div className="flex flex-col gap-4 w-full">
                                <img
                                    src={compressedUrl}
                                    alt="Compressed Image preview"
                                    className="border rounded-md max-w-full"
                                />
                                <a
                                    href={compressedUrl}
                                    download="compressed.jpg"
                                    className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
                                >
                                    <Download size={18} />
                                    Download Compressed Image
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}