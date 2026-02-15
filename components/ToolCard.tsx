import Link from "next/link";
import { LucideIcon } from "lucide-react";

type Props = {
    title: string;
    description: string;
    icon: LucideIcon;
    href: string;
};

export default function ToolCard({ title, description, icon: Icon, href }: Props) {
    return (
        <Link
            href={href}
            className="group flex items-start gap-4 rounded-xl bg-white p-5 border border-gray-200
                 hover:border-blue-500 hover:shadow-md transition-all duration-200"
        >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10 text-blue-600
                     group-hover:bg-blue-600 group-hover:text-white transition">
                <Icon size={18} strokeWidth={2.2} />
            </div>

            <div>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition">
                    {title}
                </h3>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">{description}</p>
            </div>
        </Link>
    );
}
