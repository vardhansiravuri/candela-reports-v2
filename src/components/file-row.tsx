import Link from "next/link"
import type { FileItem } from "@/data/types"
import { FileText, Table2 } from "lucide-react"

interface FileRowProps {
  file: FileItem
  categorySlug: string
}

export function FileRow({ file, categorySlug }: FileRowProps) {
  const encodedFilename = encodeURIComponent(file.filename)
  const viewLink = `/view/${categorySlug}/${encodedFilename}`

  const icon =
    file.type === "pdf" ? <FileText className="w-5 h-5 text-red-500" /> : <Table2 className="w-5 h-5 text-green-600" />

  return (
    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-slate-50 transition-colors">
      <div className="flex items-center gap-3 flex-1 min-w-0">
        {icon}
        <div className="flex-1 min-w-0">
          <p className="font-medium text-gray-900 truncate">{file.title}</p>
          {file.size && <p className="text-sm text-gray-500">{file.size}</p>}
        </div>
      </div>
      <Link href={viewLink}>
        <button className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
          Open
        </button>
      </Link>
    </div>
  )
}
