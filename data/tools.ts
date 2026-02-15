import {Binary, BookOpen, Code2, FileText, KeyRound, Link2, QrCode, Type,} from "lucide-react";

export type Tool = {
    title: string;
    description: string;
    icon: any;
    href: string;
    category: string;
};

export type ToolCategory = {
    id: string;
    title: string;
    description: string;
};

export const toolCategories: ToolCategory[] = [
    {
        id: "security",
        title: "Security Tools",
        description: "Tools to enhance online security and privacy.",
    },
    {
        id: "developer",
        title: "Developer Tools",
        description: "Helpful tools for developers and programmers.",
    },
    {
        id: "utility",
        title: "Utility Tools",
        description: "General-purpose productivity tools.",
    },
    {
        id: "documentation",
        title: "Documentation",
        description: "Docs and guides"
    },
];

export const tools: Tool[] = [
    {
        title: "Password Generator",
        description: "Create strong, secure passwords instantly.",
        icon: KeyRound,
        href: "/tools/security/password-generator",
        category: "security",
    },
    {
        title: "JSON Formatter",
        description: "Format and validate JSON effortlessly.",
        icon: Code2,
        href: "/tools/developer/json-formatter",
        category: "developer",
    },
    {
        title: "Base64 Encoder",
        description: "Encode text into Base64 format.",
        icon: Binary,
        href: "/tools/developer/base64",
        category: "developer",
    },
    {
        title: "URL Encoder / Decoder",
        description: "Encode or decode URLs instantly.",
        icon: Link2,
        href: "/tools/developer/url-encoder",
        category: "developer",
    },
    {
        title: "Lorem Ipsum Generator",
        description: "Generate placeholder text for designs.",
        icon: FileText,
        href: "/tools/utility/lorem-ipsum",
        category: "utility",
    },
    {
        title: "QR Code Generator",
        description: "Generate QR codes for text or URLs.",
        icon: QrCode,
        href: "/tools/utility/qrcode",
        category: "utility",
    },
    {
        title: "Word & Character Counter",
        description: "Count words, characters, sentences, and paragraphs instantly.",
        icon: Type,
        href: "/tools/utility/word-character-counter",
        category: "utility",
    },
    {
        title: "Blog",
        href: "/documentation/blog",
        icon: BookOpen,
        category: "documentation",
        description: "Our blog articles"
    },
];
