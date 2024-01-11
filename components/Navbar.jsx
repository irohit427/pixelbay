import React from 'react'
import Link from 'next/link'
import { auth, UserButton } from "@clerk/nextjs";

const Navbar = () => {

  const { userId } = auth();

  return (
    <div className="border-b">
      <div className="flex h-16 justify-between flex-row items-center px-24">
        <div>
          <Link href="/">
            <p>PixelBay</p>
          </Link>
        </div>
        <div>
          {
            !userId && 
            <Link href='/sign-in'>
              Login
            </Link>
          }
          {
            userId && <UserButton afterSignOutUrl="/" />
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar