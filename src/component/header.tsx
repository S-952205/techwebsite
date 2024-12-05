import Link from 'next/link'
import React from 'react'
import { FaOpencart } from 'react-icons/fa'

const Header = () => {
  return (
          <header className="header">
              <h1 className="logo">Tech Trove</h1>
              <nav>
                  <Link href="/">Home</Link>
                  <Link href="/about">About</Link>
                  <Link href="/tools">Tools</Link>
                  <Link href="/contact">Contact</Link>
                  <Link href=""><FaOpencart className="cart" /></Link>
              </nav>
          </header>

  )
}

export default Header
