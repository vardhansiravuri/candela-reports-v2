import { categories } from "@/data/catalog"
import { CategoryCard } from "@/components/category-card"

export const metadata = {
  title: "Candela Reports Portal",
  description: "Access technical reports and test documentation from Candela Technologies.",
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Candela Reports Portal</h1>
          <p className="text-lg text-gray-600">Browse technical reports and test documentation</p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Candela Technologies. All rights reserved.
        </div>
      </footer>
    </main>
  )
}
