import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ParticlesBackground } from "@/components/ui/particles-background"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FF Arena - Ultimate Free Fire Gaming Platform",
  description: "La plateforme gaming ultime pour Free Fire - Tournois épiques, diamants premium, et communauté active",
  keywords: ["Free Fire", "Gaming", "Tournois", "Diamants", "Esports", "Mobile Gaming"],
  authors: [{ name: "FF Arena Team" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#667eea" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0c0c" },
  ],
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
          storageKey="ff-arena-theme"
        >
          <ParticlesBackground />
          <div className="relative z-10 min-h-screen">{children}</div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
