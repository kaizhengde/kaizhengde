"use client"

import Items from '@/components/item/items'
import { usePathname } from 'next/navigation'

const routeTitleMapping: Record<string, string> = {
  '/': 'Home',
  '/1-step': '1 Step',
  '/linear-algebra': 'Linear Algebra',
  '/thesis': 'Thesis',
  '/unsplash-map': 'Unsplash Map',
};

const Header = () => {
  const pathname = usePathname()
  const isHomeRoute = pathname === '/'
  const title = pathname.startsWith('/post') 
    ? 'Post' 
    : (routeTitleMapping[pathname] || "404");

  return (
    <section className="content padding-y-0">
      <div className="layer-text background-none">
        {isHomeRoute ? (
          <Items itemProps={[{ type: 'h3', label: 'Kai Zheng' }]} />
        ) : (
          <Items
            itemProps={[
              { type: 'h3', label: 'Kai Zheng', back: true, to: '/' },
              { type: 'h3', label: title, grey: true },
            ]}
          />
        )}
      </div>
    </section>
  )
}

export default Header
