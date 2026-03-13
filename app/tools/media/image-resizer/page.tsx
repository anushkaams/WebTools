// app/tools/image-compressor/page.tsx
import ImageResizer from "./ImageResizerClient";

export const metadata = {
    title: "Online Interactive Image Resizer – Resize Images in Browser",
    description:
        "Resize your images visually and download them instantly. Maintain aspect ratio and original resolution. Free, fast, and secure online tool for web optimization.",
};


export default function Page() {
    return <ImageResizer />;
}