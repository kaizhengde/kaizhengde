import './index.css'
import './global.css'
import Header from './header'
import Footer from './footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: "Kai Zheng",
    template: "Kai Zheng | %s",
  },
  description: 'Kai Zheng Portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Header />
        </header>
        <main>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
