import { notFound } from "next/navigation";
import { CategoryClient } from "./CategoryClient";
import {
  reportData,
  categoryTitles,
  type ReportCategorySlug,
} from "../../../lib/reportData";

type Props = {
  params: Promise<{
    category: ReportCategorySlug;
  }>;
};

export default async function CategoryPage({ params }: Props) {
  const { category } = await params; // slug, e.g. "wifi-7"

  const slug = category;
  const files = reportData[slug];

  if (!files) {
    notFound();
  }

  const title = categoryTitles[slug];

  return <CategoryClient category={title} categorySlug={slug} files={files} />;
}
