import Link from "next/link"
import type { Category } from "@/data/types"

interface CategoryCardProps {
  category: Category
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/category/${category.slug}`}>
      <div className="rounded-2xl shadow hover:shadow-lg transition-shadow duration-300 p-6 bg-white hover:bg-slate-50 cursor-pointer h-full">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h2>
        <p className="text-sm text-gray-600">
          {category.items.length} file{category.items.length !== 1 ? "s" : ""}
        </p>
      </div>
    </Link>
  )
}
