'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Breadcrumb() {
  const pathname = usePathname()
  const pathSegments = pathname.split('/').filter(segment => segment)

  return (
    <nav aria-label="breadcrumb" className="py-4 px-6 bg-blacké">
      <ol className="flex items-center space-x-2 text-sm text-gray-200">
        <li>
          <Link href="/" className="hover:text-blue-600">Home</Link>
        </li>
        {pathSegments.map((segment, index) => {
          const href = '/' + pathSegments.slice(0, index + 1).join('/')
          const label = segment
            .replace(/-/g, ' ')
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')

          return (
            <li key={href} className="flex items-center">
              <span className="mx-2">/</span>
              <Link href={href} className="hover:text-blue-600">{label}</Link>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
