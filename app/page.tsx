import Image from "next/image";
import Link from "next/link";
import {
  reportData,
  categoryTitles,
  type ReportCategorySlug,
} from "../lib/reportData";

const categories = Object.keys(reportData) as ReportCategorySlug[];

const categoryMeta: Record<
  ReportCategorySlug,
  { icon: string; tagline: string; accent: string }
> = {
  "automated-test-reports": {
    icon: "🤖",
    tagline: "End-to-end Wi-Fi automation suites.",
    accent: "from-emerald-500/20 to-emerald-500/0 border-emerald-500/40",
  },
  "cellular-wifi": {
    icon: "📶",
    tagline: "Cell emulator and cellular + Wi-Fi convergence tests.",
    accent: "from-amber-400/20 to-amber-400/0 border-amber-400/40",
  },
  "comparison-charts": {
    icon: "📊",
    tagline: "Side-by-side performance comparisons.",
    accent: "from-sky-500/20 to-sky-500/0 border-sky-500/40",
  },
  "dfs": {
    icon: "📡",
    tagline: "DFS compliance and radar detection.",
    accent: "from-amber-500/20 to-amber-500/0 border-amber-500/40",
  },
  "interop-reports": {
    icon: "🔗",
    tagline: "Cross-vendor interoperability and IOP.",
    accent: "from-violet-500/20 to-violet-500/0 border-violet-500/40",
  },
  "iot-reports": {
    icon: "📟",
    tagline: "Dense IoT client behaviour and stability.",
    accent: "from-teal-500/20 to-teal-500/0 border-teal-500/40",
  },
  "mesh-reports": {
    icon: "🕸️",
    tagline: "Mesh backhaul and roaming performance.",
    accent: "from-fuchsia-500/20 to-fuchsia-500/0 border-fuchsia-500/40",
  },
  "network-in-a-box-reports": {
    icon: "📦",
    tagline: "Real-world venue and home scenarios.",
    accent: "from-orange-500/20 to-orange-500/0 border-orange-500/40",
  },
  "test-house-reports": {
    icon: "🏠",
    tagline: "Full test-house environment metrics.",
    accent: "from-lime-500/20 to-lime-500/0 border-lime-500/40",
  },
  "tr-398": {
    icon: "📜",
    tagline: "TR-398 Issue-4 spec-aligned reporting.",
    accent: "from-rose-500/20 to-rose-500/0 border-rose-500/40",
  },
  "wifi-7": {
    icon: "⚡",
    tagline: "MLO, OFDMA, puncturing and 6 GHz.",
    accent: "from-cyan-500/20 to-cyan-500/0 border-cyan-500/40",
  },
  "wifi-ap-taas": {
    icon: "🧪",
    tagline: "Testing-as-a-Service output for APs.",
    accent: "from-indigo-500/20 to-indigo-500/0 border-indigo-500/40",
  },
  "wifi-station-testing": {
    icon: "💻",
    tagline: "Station-side Wi-Fi client performance and stability.",
    accent: "from-blue-500/20 to-blue-500/0 border-blue-500/40",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950 text-white px-6 py-10">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header with larger free-floating logo */}
        <header className="flex items-center gap-4">
          <Image
            src="/placeholder-logo.png" // change if your logo file differs
            alt="Candela Technologies"
            width={72}
            height={72}
            className="rounded-xl"
          />

          <div className="flex flex-col">
            <h1 className="text-2xl sm:text-3xl font-semibold">
              Reports Portal
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Curated Wi-Fi test reports for customers, partners and demos.
            </p>
          </div>
        </header>

        {/* Intro section */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 px-5 py-4">
          <p className="text-sm text-slate-200 max-w-3xl">
            Select a report category to explore detailed PDFs for automated
            testing, TR-398, Wi-Fi 7 MLO, mesh, IoT and more. All reports open
            directly in the browser in a single tab.
          </p>
        </section>

        {/* Category grid */}
        <section>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
            {categories.map((slug) => {
              const meta = categoryMeta[slug];
              const title = categoryTitles[slug];
              const files = reportData[slug];

              return (
                <Link
                  key={slug}
                  href={`/category/${slug}`}
                  className={`group relative block h-40 rounded-2xl border bg-slate-900/80 px-5 py-4 flex flex-col justify-between overflow-hidden
                    border-slate-800 hover:border-emerald-400/60 transition-colors`}
                >
                  {/* Hover accent */}
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${meta.accent} opacity-0 group-hover:opacity-100 transition-opacity`}
                  />

                  {/* Icon + name */}
                  <div className="relative flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/80 border border-slate-700 text-xl">
                      {meta.icon}
                    </div>
                    <div>
                      <h2 className="text-base sm:text-lg font-semibold">
                        {title}
                      </h2>
                      <p className="mt-1 text-xs text-slate-300">
                        {meta.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Bottom row */}
                  <div className="relative flex items-center justify-between text-xs text-slate-400">
                    <span>
                      {files.length} file{files.length === 1 ? "" : "s"}
                    </span>

                    <span className="inline-flex items-center gap-1 text-emerald-400 group-hover:translate-x-0.5 transition-transform">
                      View reports
                      <span aria-hidden>↗</span>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
