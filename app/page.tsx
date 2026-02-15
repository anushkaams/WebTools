import ToolCard from "@/components/ToolCard";
import { toolCategories, tools } from "@/data/tools";

export default function Home() {
  return (
      <main className="min-h-screen flex flex-col overflow-hidden">

        {/* HERO */}
        <section className="pt-12 pb-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            WebToolsSpace
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
            Fast, reliable & privacy-friendly developer tools.
          </p>
        </section>

        {/* TOOLS */}
        <section className="flex-1 flex items-start justify-center px-6 pb-10">
          <div className="w-full max-w-6xl space-y-8">
            {toolCategories.map((category) => {
              const categoryTools = tools.filter(
                  (tool) => tool.category === category.id
              );

              if (categoryTools.length === 0) return null;

              return (
                  <div key={category.id}>
                    {/* Category Heading */}
                    <div className="mb-4">
                      <h2 className="text-lg font-semibold text-gray-800">
                        {category.title}
                      </h2>
                      <div className="h-1 w-10 bg-blue-600 rounded-full mt-1" />
                    </div>

                    {/* Tools Grid */}
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {categoryTools.map((tool) => (
                          <ToolCard key={tool.href} {...tool} />
                      ))}
                    </div>
                  </div>
              );
            })}
          </div>
        </section>
      </main>
  );
}
