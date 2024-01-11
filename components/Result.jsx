'use client';

import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Dialog, DialogContent } from './ui/dialog';
import { AspectRatio } from './ui/aspect-ratio';
import Info from './Info';
import DownloadSelection from './DownloadSelection';
import TagsList from './TagsList';

const Result = ({ images }) => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);

  return (
    <div className='grid grid-cols-12 w-full pb-48'>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[80vw] max-h-[80vh] overflow-y-auto overflow-x-hidden">
          <div className='flex flex-col lg:flex-row'>
            <div className='max-h-[75vh] min-w-[70%]'>
              <AspectRatio ratio={16/9}>
              <div style={{ backgroundImage: `url(${image?.largeImageURL})` }} 
                className="relative aspect-video  
                overflow-hidden bg-center bg-cover pb-2
                ">
              </div>
              </AspectRatio>
              <TagsList images={[image]}/>
            </div>
            <div className='max-w-[100%] xl:max-w-[30%] px-6'>
              <div>
                <div>
                  <p className='text-2xl font-bold py-1'>Downloads</p>
                  <DownloadSelection image={image} />
                </div>
                <p className='text-2xl font-semibold py-1'>Information</p>
                <div className='grid grid-cols-3 gap-3'>
                  <Info label='User' value={image?.user}  />
                  <Info label='UserID' value={image?.user_id} />
                  <Info label='Type' value={image?.type} />  
                  <Info label='Views' value={image?.views} />
                  <Info label='Download' value={image?.downloads} />
                  <Info label='Likes' value={image?.likes} />
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      {images?.map((image) => {
        return (
          <div key={image.id} onClick={() => {
            setOpen(true); 
            setImage(image)
          }} className='
            col-span-6 sm:col-span-4 lg:col-span-3 
            aspect-square relative'>
              <Image
                alt="Image"
                className='w-[100%] h-[80%] object-cover p-1 relative'
                src={image.largeImageURL}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div
                className="relative h-full w-full inset-0 bg-transparent 
                cursor-pointer opacity-0 
                hover:opacity-100
                transition-all duration-300 ease-in-out"
              >
                <div className='absolute top-[80%] pl-6 h-full capitalize text-white text-sm pt-4'>
                  <div className='flex flex-row gap-3'>
                  {image.tags.split(', ').map((tag, index) => 
                    <React.Fragment key={index}>
                      <Link href={`/search/${tag}`}>
                        {tag}
                      </Link>
                    </React.Fragment>
                  )}
                  </div>
                </div>
              </div>
          </div>
        )}
      )}
    </div>
  )
}

export default Result