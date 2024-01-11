import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 justify-between flex-row items-center px-24">
        <div>
          <Link href="/">
            <p>PixelBay</p>
          </Link>
        </div>
        <div>
          <Link href='/sign-in'>
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar