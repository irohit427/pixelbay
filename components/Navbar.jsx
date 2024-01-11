import React from 'react'
import Link from 'next/link'
import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Permanent_Marker } from 'next/font/google';
import { cn } from '@/lib/utils';

const marker = Permanent_Marker({
  weight: '400',
  style: 'normal',
  subsets: ['latin']
})

const Navbar = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 justify-between flex-row items-center px-24">
        <div>
          <Link href="/">
            <p className={cn(marker.className, 'text-green-700 text-2xl hover:scale-105 transition-all ease-in-out duration-500')}>PixelBay</p>
          </Link>
        </div>
        <div>
          <SignedOut>
            <Link href='/sign-in'>
              Login
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar