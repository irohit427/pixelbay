
'use client';

import { Input } from '@/components/ui/input'
import { useDebounce } from '@/hooks/useDebounce';
import { Search } from "lucide-react";
import { useRouter, usePathname } from 'next/navigation';
import React, { useState } from 'react'
import qs from "query-string";

const Banner = ({ image }) => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value);
  const router = useRouter();
  const pathname = usePathname();

  const fetchImages = () => {
    const url = qs.stringifyUrl({
      url: `${pathname}search/${debouncedValue}`,
    }, { skipEmptyString: true, skipNull: true });
    router.push(url);
   
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div style={{ backgroundImage: `url(${image?.largeImageURL})` }} className="rounded-xl relative aspect-video md:aspect-[3] overflow-hidden bg-center bg-cover">
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-2xl flex items-center">
            <div className="relative">
              <div>
              <Search
                className="h-4 w-4 absolute top-3 lg:top-4 left-3  text-slate-600"
              />
              </div>
              <div>
              <Input
                onChange={(e) => setValue(e.target.value)}
                value={value}
                className="w-[200px] md:w-[320px] lg:w-[540px] h-10 lg:h-12 pl-9 rounded-full bg-slate-100 focus:ring-0 focus-visible:ring-0"
                placeholder="Search images..."
                onKeyDown={(e) => {
                  e.keyCode === 13 && fetchImages();
                }}
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner