import './index.css'
import './global.css'

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
      <body>{children}</body>
    </html>
  )
}
