"use client";

import { useState } from "react";

type CategoryClientProps = {
  category: string;
  files: string[];
};

function buildReportUrl(category: string, file: string) {
  return `/reports/${encodeURIComponent(category)}/${encodeURIComponent(file)}`;
}

export function CategoryClient({ category, files }: CategoryClientProps) {
  const [selectedFile, setSelectedFile] = useState<string>(files[0]);
  const currentUrl = buildReportUrl(category, selectedFile);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-white">
      {/* Top bar */}
      <header className="border-b border-neutral-800 px-6 py-4 flex items-center justify-between">
        <div>
          <p className="text-xs text-neutral-400 uppercase tracking-wide">
            Candela Reports
          </p>
          <h1 className="text-2xl font-semibold">{category}</h1>
        </div>
        <a
          href="/"
          className="text-sm text-neutral-300 hover:text-white underline-offset-4 hover:underline"
        >
          ← Back to categories
        </a>
      </header>

      <div className="flex flex-1">
        {/* Files list */}
        <aside className="w-80 border-r border-neutral-800 p-4 overflow-y-auto">
          <h2 className="text-sm font-medium mb-3 text-neutral-300">
            Files in this category
          </h2>
          <div className="space-y-1">
            {files.map((file) => (
              <button
                key={file}
                onClick={() => setSelectedFile(file)}
                className={`w-full text-left text-sm px-2 py-1.5 rounded-md truncate ${
                  file === selectedFile
                    ? "bg-neutral-800"
                    : "hover:bg-neutral-900"
                }`}
              >
                {file}
              </button>
            ))}
          </div>
        </aside>

        {/* Viewer */}
        <main className="flex-1 flex flex-col">
          <div className="border-b border-neutral-800 px-4 py-3 flex items-center justify-between">
            <div>
              <p className="text-xs text-neutral-400 mb-1">Selected file</p>
              <p className="text-sm font-medium">{selectedFile}</p>
            </div>
            <a
              href={currentUrl}
              download
              className="text-sm px-4 py-2 rounded-md border border-neutral-600 hover:bg-neutral-800"
            >
              Download
            </a>
          </div>

          <div className="bg-neutral-900">
            <iframe
              key={currentUrl}
              src={currentUrl}
              className="w-full min-h-[1200px]"
            />
          </div>
        </main>
      </div>
    </div>
  );
}
