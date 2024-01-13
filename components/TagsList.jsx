import React from 'react'
import Link from 'next/link';

const TagsList = ({ images }) => {
  let tags = [];
  images?.map((image) => {
    tags.push(image.tags.split(',')[0]);
  });

  tags = tags?.slice(0, 12);

  return (
    <div>
      <div className='flex flex-row gap-2 items-center overflow-clip'>
        {
          tags?.map((tag, index) => (
            <Link href={`/search/${tag}`} key={index}>
            <div 
              className='text-xs 
                font-light border dark:border-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800 px-4 text-nowrap 
                hover:bg-slate-200 hover:font-semibold
                border-md py-2 rounded-md text-gray-700'
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