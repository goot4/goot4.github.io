import '@/app/ui/global.css'
import Header from '@/app/ui/header'
import { Analytics } from "@vercel/analytics/react"

export default function RootLayout( {children} : { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body>
      <Header />
      {children}
      <Analytics/>
    </body>
    </html>
  )
}