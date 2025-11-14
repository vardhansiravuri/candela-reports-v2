import { notFound } from "next/navigation";
import { reportData } from "../../../lib/reportData";
import { CategoryClient } from "./CategoryClient";

// In Next 15, `params` is a Promise, so we type it that way:
type Props = {
  params: Promise<{
    category: string;
  }>;
};

export default async function CategoryPage({ params }: Props) {
  // Wait for the params Promise
  const { category } = await params;

  const decodedCategory = decodeURIComponent(category);
  const files = reportData[decodedCategory];

  if (!files) {
    notFound();
  }

  return <CategoryClient category={decodedCategory} files={files} />;
}
