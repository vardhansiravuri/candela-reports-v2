import { NextResponse } from "next/server";
import archiver from "archiver";
import { Readable } from "node:stream";
import { PassThrough } from "node:stream";
import path from "node:path";
import fs from "node:fs";
import {
  reportData,
  type ReportCategorySlug,
} from "../../../../lib/reportData";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ category: string }> }
) {
  const { category } = await params;

  const files = reportData[category as ReportCategorySlug];
  if (!files || files.length === 0) {
    return NextResponse.json(
      { error: "Category not found or has no files" },
      { status: 404 }
    );
  }

  const archive = archiver("zip", { zlib: { level: 9 } });
  const passThrough = new PassThrough();
  archive.pipe(passThrough);

  const publicDir = path.join(process.cwd(), "public");

  for (const file of files) {
    // file.path is like "/reports/Automated Test Reports/AP Auto Test Report.pdf"
    const filePath = path.join(publicDir, file.path.replace(/^\//, ""));
    if (fs.existsSync(filePath)) {
      archive.file(filePath, { name: file.name });
    }
  }

  archive.finalize();

  const webStream = Readable.toWeb(passThrough) as ReadableStream;
  const safeCategoryName = category.replace(/[^a-z0-9-]/gi, "_");
  const filename = `${safeCategoryName}.zip`;

  return new Response(webStream, {
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": `attachment; filename="${filename}"`,
    },
  });
}
