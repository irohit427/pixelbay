'use client';

import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { useDebounce } from '@/hooks/useDebounce';
import { useRouter, usePathname } from 'next/navigation';
import { Search } from "lucide-react";
import qs from "query-string";

const Searchbar = () => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value);
  const router = useRouter();
  const pathname = usePathname();
  const fetchImages = () => {
    const url = qs.stringifyUrl({
      url: `/search/${debouncedValue}`,
    }, { skipEmptyString: true, skipNull: true });
    router.push(url);
  }

  return (
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
  )
}

export default Searchbar