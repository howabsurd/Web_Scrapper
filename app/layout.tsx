import Sidebar from "../components/Sidebar"
import "../styles/globals.css"

export const metadata = {
  title: 'Scrapper',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <Sidebar />
          {/* <Header /> */}
        {children}
        </main>
        </body>
    </html>
  )
}
