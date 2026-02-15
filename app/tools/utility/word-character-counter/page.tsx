import WordCharacterCounter from "./WordCharacterCounter"; // your client component

// page.tsx (server component)
export const metadata = {
    title: "Online Word & Character Counter – Free Text Analyzer",
    description:
        "Count words, characters, sentences, and paragraphs instantly with our free online word and character counter. Estimate reading and speaking time, analyze text, and copy results easily.",
    keywords: [
        "word counter",
        "character counter",
        "text analyzer",
        "online text tool",
        "reading time calculator",
        "speaking time calculator",
        "paragraph counter",
        "sentence counter",
        "copy text online",
    ],
};


export default function Page() {
    return <WordCharacterCounter />;
}
