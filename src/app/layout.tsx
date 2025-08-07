import './globals.css'
import { ReactNode } from 'react'


export const metadata = {
  title: 'Portofolio Rifal',
  description: 'Website portofolio pribadi Rifal Aulia',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-white text-gray-900 font-sans"> 
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
