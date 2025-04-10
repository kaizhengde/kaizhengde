import './index.css'
import './global.css'
import Header from './header'
import Footer from './footer'

export const metadata = {
  title: 'Kai Zheng',
  description: 'Kai Zheng',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
          <main>
            {children}
          </main>
        <Footer />
      </body>
    </html>
  )
}
