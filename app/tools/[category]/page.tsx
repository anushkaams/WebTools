import { notFound } from "next/navigation";
import ToolCard from "@/components/ToolCard";
import { toolCategories, tools } from "@/data/tools";

interface Props {
    params: Promise<{
        category: string;
    }>;
}

export async function generateStaticParams() {
    return toolCategories.map((c) => ({
        category: c.id,
    }));
}

export default async function CategoryPage({ params }: Props) {
    // ✅ MUST await params in Next 15
    const { category: categoryId } = await params;

    // Find category
    const category = toolCategories.find((c) => c.id === categoryId);
    if (!category) return notFound();

    // Get all tools in this category
    const categoryTools = tools.filter(
        (tool) => tool.category === categoryId
    );

    return (
        <main className="min-h-screen flex flex-col overflow-hidden">
            {/* HERO */}
            <section className="pt-12 pb-6 text-center">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
                    {category.title}
                </h1>

                {category.description && (
                    <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
                        {category.description}
                    </p>
                )}
            </section>

            {/* TOOLS GRID */}
            <section className="flex-1 flex items-start justify-center px-6 pb-10">
                <div className="w-full max-w-6xl space-y-8">
                    {categoryTools.length === 0 ? (
                        <p className="text-center text-gray-500">
                            No tools found in this category.
                        </p>
                    ) : (
                        <div>
                            <div className="mb-4">
                                <h2 className="text-lg font-semibold text-gray-800">
                                    {category.title}
                                </h2>
                                <div className="h-1 w-10 bg-blue-600 rounded-full mt-1" />
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {categoryTools.map((tool) => (
                                    <ToolCard key={tool.href} {...tool} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}