"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { categories } from "@/data/catalog"
import { FileRow } from "@/components/file-row"
import { SearchBox } from "@/components/search-box"
import { ArrowLeft } from "lucide-react"

interface CategoryPageProps {
  params: Promise<{ slug: string }>
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params
  const [searchQuery, setSearchQuery] = useState("")

  const category = categories.find((cat) => cat.slug === slug)

  const filteredItems = useMemo(() => {
    if (!category) return []
    const query = searchQuery.toLowerCase()
    return category.items.filter(
      (item) => item.title.toLowerCase().includes(query) || item.filename.toLowerCase().includes(query),
    )
  }, [category, searchQuery])

  if (!category) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <Link href="/">
            <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </button>
          </Link>
          <div className="bg-white rounded-lg p-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Category Not Found</h1>
            <p className="text-gray-600">The category you're looking for doesn't exist.</p>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link href="/">
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </button>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">{category.name}</h1>
          <p className="text-gray-600 mt-1">
            {category.items.length} file{category.items.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {category.items.length > 0 ? (
          <>
            <div className="mb-8">
              <SearchBox query={searchQuery} onQueryChange={setSearchQuery} />
            </div>

            {filteredItems.length > 0 ? (
              <div className="space-y-3">
                {filteredItems.map((file) => (
                  <FileRow key={file.filename} file={file} categorySlug={slug} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg p-8 text-center">
                <p className="text-gray-600">No files match your search.</p>
              </div>
            )}
          </>
        ) : (
          <div className="bg-white rounded-lg p-8 text-center">
            <p className="text-gray-600">No files available in this category yet.</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-4xl mx-auto px-6 py-6 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} Candela Technologies. All rights reserved.
        </div>
      </footer>
    </main>
  )
}
