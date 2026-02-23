'use client'

import '@/styles/componentStyles/navbar.scss'

//import { usePathname } from 'next/navigation'

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faSquareXmark } from '@fortawesome/free-solid-svg-icons'

import Nav_Link from './Nav_Link'

export default function Navbar({ navItems, setIsActive, isActive }) {
  return (
    <nav className="nav-desktop" aria-label="Navigation bar">
      <ul>
        {navItems.map((item, index) => {
          return <Nav_Link key={index} setIsActive={setIsActive} isActive={isActive} data={{ ...item, index }} />
        })}
      </ul>
    </nav>
  )
}
