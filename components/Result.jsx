'use client';

import React, { useState } from 'react'
import { Dialog, DialogContent } from './ui/dialog';
import { AspectRatio } from './ui/aspect-ratio';
import Info from './Info';
import DownloadSelection from './DownloadSelection';
import TagsList from './TagsList';
import ImageCard from './ImageCard';

const Result = ({ images }) => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(null);

  const openModal = (image) => {
    setOpen(true);
    setImage(image);
  }

  return (
    <React.Fragment>
      <Dialog open={open} onOpenChange={setOpen} className=''>
        <DialogContent className="max-w-[80vw] dark:bg-slate-50 border-0 shadow-zinc-700 
          drop-shadow-sm max-h-[80vh] overflow-y-auto overflow-x-hidden">
          <div className='flex flex-col lg:flex-row'>
            <div className='max-h-[75vh] min-w-[70%]'>
              <div>
                <AspectRatio ratio={16/9}>
                  <div style={{ backgroundImage: `url(${image?.largeImageURL})` }} 
                    className="relative aspect-video  
                    overflow-hidden bg-center bg-cover pb-2
                    ">
                  </div>
                </AspectRatio>
              </div>
              <div className='mt-4'>
                <TagsList images={[image]} />
              </div>
            </div>
            <div className='max-w-[100%] xl:min-w-[30%] px-6'>
              <div>
                <div>
                  <p className='text-2xl font-bold py-1 dark:text-black'>Downloads</p>
                  <DownloadSelection image={image} />
                </div>
                <p className='text-2xl font-semibold py-1 mb-5 dark:text-black'>Information</p>
                <div className='dark:text-black'>
                  <div className='flex flex-row justify-between '>
                    <Info label='User' value={image?.user} /> 
                    <Info label='Views' value={image?.views} />
                  </div>
                  <div className='flex flex-row justify-between gap-4'>
                    <Info label='Download' value={image?.downloads} />
                    <Info label='Likes' value={image?.likes} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <section className='px-1 my-2 grid grid-cols-gallery auto-rows-[10px]'>
        {images?.map((image, index) => (
          <React.Fragment key={index}>
            <ImageCard image={image} onClick={openModal}/>
          </React.Fragment>
        ))}
      </section>
    </React.Fragment>
  )
}

export default Result