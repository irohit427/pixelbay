import React from 'react'
import Link from 'next/link';
import { cn } from '@/lib/utils';

const TagsList = ({ images, className }) => {
  let tags = [];
  images?.map((image) => {
    if (images.length === 1) {
      tags = image.tags.split(',');
    } else {
      tags.push(image.tags.split(',')[0]);
    }
  });

  tags = tags?.slice(0, 12);

  return (
    <div>
      <div className='flex flex-row gap-2 items-center overflow-clip'>
        {
          tags?.map((tag, index) => (
            <Link href={`/search/${tag}`} key={index}>
            <div 
              className={cn(className, `text-xs font-light border  px-4 text-nowrap 
                hover:font-semiboldborder-md py-2 rounded-md text-gray-700`)}
            >
              <p className='text-sm capitalize'>
                {tag}
              </p>
            </div>
            </Link>
          ))
        }
      </div>
      <div>

      </div>
    </div>
  )
}

export default TagsList