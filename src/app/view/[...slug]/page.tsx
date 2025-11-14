"use client"

import { useEffect, useState } from "react"
import { categories } from "@/data/catalog"
import { TopBar } from "@/components/top-bar"
import { Download } from "lucide-react"

interface ViewPageProps {
  params: Promise<{ slug: string[] }>
}

export default function ViewPage({ params }: ViewPageProps) {
  const [slug, setSlug] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    params.then((p) => {
      setSlug(p.slug)
      setIsLoading(false)
    })
  }, [params])

  if (isLoading) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>
  }

  if (slug.length < 2) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">File Not Found</h1>
          <p className="text-gray-600">Invalid file path.</p>
        </div>
      </div>
    )
  }

  const categorySlug = slug[0]
  const filename = decodeURIComponent(slug[1])

  // Find category to get the actual category name
  const category = categories.find((cat) => cat.slug === categorySlug)
  const file = category?.items.find((item) => item.filename === filename)

  if (!category || !file) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">File Not Found</h1>
          <p className="text-gray-600">The file you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  // Build file URL using actual category name
  const fileUrl = `/reports/${encodeURIComponent(category.name)}/${encodeURIComponent(file.filename)}`

  return (
    <main className="bg-gray-50 min-h-screen">
      <TopBar categorySlug={categorySlug} filename={file.filename} />

      {/* Content */}
      <div className="pt-16">
        {file.type === "pdf" ? (
          <iframe src={`${fileUrl}#view=FitH`} className="w-full h-[calc(100vh-64px)] border-0" title={file.filename} />
        ) : (
          <div className="flex items-center justify-center h-[calc(100vh-64px)]">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Preview Not Supported</h2>
              <p className="text-gray-600 mb-6">
                Excel files cannot be previewed in the browser. Please download the file to view it in Excel.
              </p>
              <a
                href={fileUrl}
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Download className="w-5 h-5" />
                Download
              </a>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
