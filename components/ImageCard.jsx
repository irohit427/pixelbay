import React from 'react'
import Image from 'next/image';

const ImageCard = ({image, onClick}) => {

  const widthHeightRatio = image.imageHeight / image.imageWidth;
  const galleryHeight = Math.ceil(250 * widthHeightRatio);
  const photoSpans = Math.ceil(galleryHeight / 8.3);

  return (
    <div className='w=[250px] justify-self-center'
      style={{ gridRow: `span ${photoSpans}`}} onClick={() => onClick(image)}>
      <div className='overflow-hidden group'>
        <Image 
          src={image.largeImageURL}
          alt='image'
          width={image.imageWidth} 
          height = {image.imageHeight}
          sizes='250px'
          className="group-hover:opacity-75 px-2 cursor-pointer"
        />
      </div>
    </div>
  )
}

export default ImageCard