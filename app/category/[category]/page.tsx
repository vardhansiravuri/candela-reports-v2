// app/category/[category]/page.tsx
import { notFound } from "next/navigation";
import CategoryClient from "./CategoryClient";
import {
  reportData,
  categoryTitles,
  type ReportCategorySlug,
} from "@/lib/reportData";

type Props = {
  params: {
    category: ReportCategorySlug;
  };
};

export default function CategoryPage({ params }: Props) {
  const slug = params.category; // already like "automated-test-reports"

  const files = reportData[slug];
  if (!files) {
    return notFound();
  }

  const title = categoryTitles[slug];

  // CategoryClient expects a human readable category string + the file list
  return <CategoryClient category={title} files={files} />;
}
