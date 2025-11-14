import Link from "next/link"
import { ArrowLeft, Download } from "lucide-react"

interface TopBarProps {
  categorySlug: string
  filename: string
}

export function TopBar({ categorySlug, filename }: TopBarProps) {
  const fileUrl = `/reports/${encodeURIComponent(
    // Get category name from slug (reverse lookup would be done in parent)
    categorySlug,
  )}/${encodeURIComponent(filename)}`

  // Truncate long filenames for display
  const displayName = filename.length > 40 ? filename.substring(0, 37) + "..." : filename

  return (
    <div className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50 flex items-center justify-between px-6 shadow-sm">
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <Link href={`/category/${categorySlug}`}>
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
        </Link>
        <div className="h-6 w-px bg-gray-200" />
        <h1 className="text-lg font-semibold text-gray-900 truncate">{displayName}</h1>
      </div>
      <a
        href={fileUrl}
        download
        className="ml-4 flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
      >
        <Download className="w-5 h-5" />
        Download
      </a>
    </div>
  )
}
