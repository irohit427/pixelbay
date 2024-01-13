import React from 'react'
import Link from 'next/link'
import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Permanent_Marker } from 'next/font/google';
import { cn } from '@/lib/utils';
import { Heart } from 'lucide-react';
import { ThemeToggle } from './ThemeToggler';

const marker = Permanent_Marker({
  weight: '400',
  style: 'normal',
  subsets: ['latin']
})

const Navbar = () => {
  return (
    <div className="shadow-sm">
      <div className="flex h-16 justify-between flex-row items-center px-24">
        <div>
          <Link href="/">
            <p className={cn(marker.className, 'text-green-700 text-2xl hover:scale-105 transition-all ease-in-out duration-500')}>PixelBay</p>
          </Link>
        </div>
        <div className='flex flex-row justify-center items-center gap-4'>
          <ThemeToggle />
          <div className='border p-2 rounded-full '>
            <Link href='/favorite'>
              <Heart className='hover:fill-red-600 hover:scale-105 transition-transform ease-in-out duration-500 scale-90' />
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
    </div>
  )
}

export default Navbar