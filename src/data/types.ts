export type FileItem = {
  title: string
  filename: string
  type: "pdf" | "xlsx"
  size?: string
}

export type Category = {
  name: string
  slug: string
  items: FileItem[]
}
