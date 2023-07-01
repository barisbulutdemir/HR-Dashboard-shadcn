import './globals.css'

import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({ children }: RootLayoutProps) {
  return (
      <>
        <html lang="en" suppressHydrationWarning>
        <head />
        <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        </body>
        </html>
      </>
  )
}
