import Link from 'next/link'

import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Nav_Link({ setIsActive, isActive, data }) {
  const pathname = usePathname() // Get current pathname
  const [activePath, setActivePath] = useState(pathname)

  useEffect(() => {
    setActivePath(pathname)
  }, [pathname])

  return (
    <Link
      href={data.href}
      onClick={() => {
        setIsActive(!isActive)
      }}
      className={activePath === data.href ? 'active' : ''}
    >
      {data.title}
    </Link>
  )
}
