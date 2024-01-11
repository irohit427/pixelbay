import React from 'react'
import Link from 'next/link'
import { auth, UserButton } from "@clerk/nextjs";
import { Permanent_Marker } from 'next/font/google';
import { cn } from '@/lib/utils';

const marker = Permanent_Marker({
  weight: '400',
  style: 'normal',
  subsets: ['latin']
})

const Navbar = () => {

  const { userId } = auth();

  return (
    <div className="border-b">
      <div className="flex h-16 justify-between flex-row items-center px-24">
        <div>
          <Link href="/">
            <p className={cn(marker.className, 'text-green-700 text-2xl hover:scale-105 transition-all ease-in-out duration-500')}>PixelBay</p>
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