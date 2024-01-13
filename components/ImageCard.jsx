import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const ImageCard = ({image, onClick}) => {


  const widthHeightRatio = image.imageHeight / image.imageWidth;
  const galleryHeight = Math.ceil(250 * widthHeightRatio);
  const photoSpans = Math.ceil(galleryHeight / 8.2);
  const tags = image.tags.split(',');

  return (
    <div className='w=[250px] justify-self-center py-2 px-1'
      style={{ gridRow: `span ${photoSpans} `}} >
      <div className='overflow-hidden group relative' >
        <Image 
          src={image.largeImageURL}
          alt='image'
          width={image.imageWidth} 
          height = {image.imageHeight}
          sizes='250px'
          className="group-hover:opacity-75 cursor-pointer"
          onClick={() => onClick(image)}
        />
        <div className='absolute bottom-3 left-4 h-3'>
          {tags.map((tag, index) => (
            <Link href={`/search/${tag}`} key={index}>
              <span key={index} className='text-nowrap hover:font-semibold px-1 font-normal text-sm text-gray-300 capitalize'>{tag}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImageCard