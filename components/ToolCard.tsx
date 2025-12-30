import Link from "next/link";
import { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
};

export default function ToolCard({
  title,
  description,
  icon: Icon,
  href,
}: Props) {
  return (
    <Link
      href={href}
      className="
        group relative rounded-2xl
        bg-white/80 backdrop-blur
        p-10
        shadow-[0_10px_30px_rgba(0,0,0,0.08)]
        hover:shadow-[0_20px_50px_rgba(59,130,246,0.25)]
        transition-all duration-300
        hover:-translate-y-1
      "
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
          <Icon size={22} strokeWidth={2.2} />
        </div>

        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
          {title}
        </h3>
      </div>

      <p className="text-gray-600 leading-relaxed">{description}</p>
    </Link>
  );
}
