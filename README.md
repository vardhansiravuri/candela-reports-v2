# Candela Reports Portal

A production-ready Next.js 14+ application for hosting and browsing technical reports and documentation.

## Features

- **Category-based organization**: Browse reports across 11 categories
- **Inline PDF viewing**: PDFs render directly in the browser with sticky header controls
- **Client-side search**: Filter files by name within categories
- **Responsive design**: Mobile-first, fully responsive interface
- **Static generation**: Deployable to Vercel with zero runtime overhead
- **Accessibility**: WCAG compliant with semantic HTML and ARIA attributes

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: lucide-react
- **Deployment**: Vercel

## Directory Structure

\`\`\`
src/
├── app/                     # Next.js pages and layouts
│   ├── page.tsx            # Homepage with category cards
│   ├── layout.tsx          # Root layout
│   ├── globals.css         # Global styles
│   ├── not-found.tsx       # 404 page
│   ├── category/
│   │   └── [slug]/
│   │       └── page.tsx    # Category page with file list
│   └── view/
│       └── [...slug]/
│           └── page.tsx    # File viewer (PDF/XLSX)
├── components/             # Reusable React components
│   ├── category-card.tsx   # Category grid card
│   ├── file-row.tsx        # File list item
│   ├── search-box.tsx      # Search input
│   └── top-bar.tsx         # Sticky header for viewer
├── data/
│   ├── catalog.ts          # All report data
│   └── types.ts            # TypeScript interfaces
public/
├── reports/                # Report files directory
│   ├── Automated Test Reports/
│   ├── Comparison charts/
│   ├── Interop Reports/
│   ├── IoT Reports/
│   └── Network in a Box Reports/
├── robots.txt              # SEO configuration
├── sitemap.xml             # Sitemap for search engines
├── manifest.json           # PWA manifest
└── favicon.ico             # Site icon
\`\`\`

## Setup & Deployment

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone and install dependencies**:
   \`\`\`bash
   git clone <repo-url>
   cd candela-reports
   npm install
   \`\`\`

2. **Add report files**:
   - Create directories under `public/reports/` matching category names:
     \`\`\`
     public/reports/
     ├── Automated Test Reports/
     ├── Comparison charts/
     ├── Interop Reports/
     ├── IoT Reports/
     └── Network in a Box Reports/
     \`\`\`
   - Copy PDF and XLSX files into respective category directories

3. **Local development**:
   \`\`\`bash
   npm run dev
   \`\`\`
   Visit `http://localhost:3000`

### Deploy to Vercel

1. **Push to GitHub**:
   \`\`\`bash
   git push origin main
   \`\`\`

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import the GitHub repository
   - Deploy (no additional configuration needed)

3. **Configure domain**:
   - In Vercel dashboard, go to Domains
   - Add `reports.candelaassist.com`
   - Update GoDaddy CNAME to `cname.vercel-dns.com` (if not already set)
   - SSL certificate auto-provisions within minutes

4. **Update reports**:
   - Add/update files in `public/reports/<Category>/`
   - Commit and push to GitHub
   - Vercel redeploys automatically

## File Structure

### Data Format

All report metadata is centralized in `src/data/catalog.ts`:

\`\`\`typescript
export const categories: Category[] = [
  {
    name: "Category Display Name",
    slug: "category-slug",  // Used in URLs
    items: [
      {
        title: "Display Name",
        filename: "actual-filename.pdf",  // Must match file in public/reports/
        type: "pdf" | "xlsx",
        size: "Optional file size label"
      }
    ]
  }
];
\`\`\`

### URL Patterns

- Homepage: `/`
- Category: `/category/[slug]`
- File Viewer: `/view/[slug]/[filename]`

Files are encoded for safe URL handling with spaces and special characters.

## Key Features

### Homepage
- Grid of 11 category cards
- File count badge for each category
- Hover effects for better interactivity

### Category Page
- File list with icon indicating type (PDF/XLSX)
- Real-time search filtering
- File size display
- Direct open/download links

### File Viewer
- **PDF**: Inline iframe with sticky header
- **XLSX**: Download-only with helpful message
- Sticky header with Back, title, and Download buttons
- Responsive layout with proper height calculation

## Customization

### Styling

Edit `src/app/globals.css` to adjust:
- Theme colors (--color-blue, --color-gray)
- Font families (--font-sans, --font-mono)

### Categories

Add or remove categories in `src/data/catalog.ts` and update `public/sitemap.xml`.

### Icons

The app uses lucide-react icons. Replace icons in components by changing the import and component usage.

## Performance

- **Zero JavaScript**: Pages are static by default
- **Client-side search**: Filter operations run instantly in browser
- **Image optimization**: Reports are served directly without processing
- **Cache headers**: Vercel automatically sets optimal cache headers

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2025 Candela Technologies. All rights reserved.
