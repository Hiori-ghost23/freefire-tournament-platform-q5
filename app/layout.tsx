import type React from "react"
import type { Metadata } from "next"
import { Inter, Orbitron, Rajdhani } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"],
})
const rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--font-rajdhani",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "GOKU FF E-SHOP - Ultimate Gaming Store",
  description: "La plateforme gaming ultime pour Free Fire - Tournois épiques, diamants premium, et communauté active",
  keywords: ["Free Fire", "Gaming", "Tournois", "Diamants", "Esports", "Mobile Gaming", "GOKU FF"],
  authors: [{ name: "GOKU FF Team" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f97316" },
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
    <html lang="fr" suppressHydrationWarning className={`${orbitron.variable} ${rajdhani.variable}`}>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
          storageKey="goku-ff-theme"
        >
          <div className="relative z-10 min-h-screen">{children}</div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
