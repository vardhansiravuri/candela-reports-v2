// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import {
  reportData,
  categoryTitles,
  type ReportCategorySlug,
} from "@/lib/reportData";

const categoryDescriptions: Record<ReportCategorySlug, string> = {
  "automated-test-reports": "End-to-end Wi-Fi automation suites.",
  "comparison-charts": "Side-by-side performance comparisons.",
  dfs: "DFS compliance and radar detection.",
  "interop-reports": "Cross-vendor interoperability and IOP.",
  "iot-reports": "Dense IoT client behaviour and stability.",
  "mesh-reports": "Mesh backhaul and roaming performance.",
  "network-in-a-box-reports": "Real-world venue and home scenarios.",
  "test-house-reports": "Full test-house environment metrics.",
  "tr-398": "TR-398 Issue-4 spec-aligned reporting.",
  "wifi-7": "MLO, OFDMA, puncturing and 6 GHz.",
  "wifi-ap-taas": "Testing-as-a-Service output for APs.",
};

const categoryIcons: Partial<Record<ReportCategorySlug, string>> = {
  "automated-test-reports": "🧪",
  "comparison-charts": "📊",
  dfs: "📡",
  "interop-reports": "🔗",
  "iot-reports": "📡",
  "mesh-reports": "🕸️",
  "network-in-a-box-reports": "📦",
  "test-house-reports": "🏠",
  "tr-398": "📜",
  "wifi-7": "⚡",
  "wifi-ap-taas": "🧰",
};

export default function Home() {
  const categories = Object.keys(reportData) as ReportCategorySlug[];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950 text-slate-50 px-6 py-10">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header with larger logo */}
        <header className="flex items-center gap-4">
          {/* Free logo (no box) */}
          <Image
            src="/placeholder-logo.png" // change if your logo file is different
            alt="Candela Technologies"
            width={72}
            height={72}
            className="rounded-xl"
          />

          {/* Text to the right of logo */}
          <div className="flex flex-col">
            <h1 className="text-2xl sm:text-3xl font-semibold">
              Reports Portal
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Curated Wi-Fi test reports for customers, partners and demos.
            </p>
          </div>
        </header>

        {/* Intro text only */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 px-5 py-4">
          <p className="text-sm text-slate-200 max-w-3xl">
            Select a report category to explore detailed PDFs for automated
            testing, TR-398, Wi-Fi 7 MLO, mesh, IoT and more. All reports open
            directly in the browser in a single tab.
          </p>
        </section>

        {/* Category grid */}
        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((slug) => {
            const files = reportData[slug];
            const title = categoryTitles[slug];
            const description = categoryDescriptions[slug];
            const icon = categoryIcons[slug] ?? "📄";

            return (
              <article
                key={slug}
                className="group rounded-2xl border border-slate-800 bg-slate-900/70 px-5 py-4 flex flex-col justify-between hover:border-emerald-500/80 hover:bg-slate-900 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-xl">
                    {icon}
                  </div>
                  <div className="space-y-1">
                    <h2 className="text-base sm:text-lg font-semibold">
                      {title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300">
                      {description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs sm:text-sm text-slate-400">
                  <span>{files.length} files</span>
                  <Link
                    href={`/category/${slug}`}
                    className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium"
                  >
                    View reports
                    <span aria-hidden>↗</span>
                  </Link>
                </div>
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
}
