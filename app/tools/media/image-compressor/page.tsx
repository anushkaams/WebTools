// app/tools/image-compressor/page.tsx
import ImageCompressor from "./ImageCompressorClient";

export const metadata = {
    title: "Online Image Compressor - WebToolsSpace",
    description:
        "Compress images quickly and easily in your browser. Reduce file size without losing quality, 100% front-end.",
};

export default function Page() {
    return <ImageCompressor />;
}