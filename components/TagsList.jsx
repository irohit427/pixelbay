import React from 'react'
import Link from 'next/link';

const TagsList = ({ images }) => {
  let tags = [];
  images.map((image) => {
    if (images.length === 1) {
      tags = image.tags.split(',');
    } else {
      tags.push(image.tags.split(',')[0]);
    }
  });

  tags = tags.slice(0, 12);

  return (
    <div className='flex flex-row gap-2 mx-2 overflow-x-auto items-center pt-2 pb-6'>
      {
        tags.map((tag, index) => (
          <Link href={`/search/${tag}`} key={index}>
          <div 
            className='bg-gray-100 text-xs 
              font-medium me-2 px-4 text-nowrap 
              border-md
              py-3 rounded dark:bg-blue-900 dark:text-blue-300'
          >
            <p className='text-sm capitalize'>
              {tag}
            </p>
          </div>
          </Link>
        ))
      }
      </div>
  )
}

export default TagsList