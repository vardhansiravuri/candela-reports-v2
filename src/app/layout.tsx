import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Candela Reports Portal",
  description: "Access technical reports and test documentation from Candela Technologies.",
  keywords: "reports, documentation, test results, Candela Technologies",
  authors: [{ name: "Candela Technologies" }],
  openGraph: {
    title: "Candela Reports Portal",
    description: "Access technical reports and test documentation from Candela Technologies.",
    type: "website",
    url: "https://reports.candelaassist.com",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#ffffff",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${geistSans.className} antialiased`}>{children}</body>
    </html>
  )
}
