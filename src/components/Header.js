'use client'

import Image from 'next/image'

import '@/styles/componentStyles/header.scss'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons' */

/* import { AnimatePresence, motion } from 'framer-motion' */

import Navbar from '@/components/Navbar'

export default function Header() {
  const pathname = usePathname() // Get current pathname

  //const [pageTitle, setPageTitle] = useState('Loading...')
  const [isActive, setIsActive] = useState(false)

  const navItems = [
    { href: '/', title: 'Profile' },
    { href: '/projects', title: 'Projects' },
  ]

  const dynamicRoutes = [
    { base: '/projects', title: 'Projects', pattern: /^\/projects\/[^/]+$/ },
    /* { base: '/comunidade', title: 'Notícia', pattern: /^\/comunidade\/[^/]+$/ } */
    ,
  ]

  // # Header Route Naming

  //useEffect(() => {
  /* const pathPatterns = [
      // Static pages from navItems
      ...navItems.map(({ href, title }) => ({ pattern: href, title })),

      // Add dynamic routes
      ...dynamicRoutes.map(({ pattern, title }) => ({ pattern, title })),
    ]
 */
  // Find matching pattern

  //const matchedPattern = pathPatterns.find(({ pattern }) => (typeof pattern === 'string' ? pattern === pathname : pattern.test(pathname)))

  /* if (matchedPattern) {
      setPageTitle(matchedPattern.title)
    } else {
      setPageTitle('Error 404')
    } */
  //}, [pathname])

  return (
    <header className="header">
      <Image
        className="header__logo"
        src="/logotipo.svg"
        alt="Micatalyst logo"
        width={40}
        height={40}
        priority
      />
      <Navbar navItems={navItems} setIsActive={setIsActive} isActive={isActive} />
    </header>
  )
}
