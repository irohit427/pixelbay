'use client';

import React, { useState } from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { Button } from './ui/button'
import { SIZES } from '@/constant';
import { resizedImage } from '@/lib/utils';

const DownloadSelection = ({ image }) => {
  const [size, setSize] = useState('small');
  return (
    <div>
      <div className='border-gray-500 rounded-md bg-gray-200 w-full text-black'>
        <RadioGroup defaultValue={size} onValueChange={(e) => setSize(e)}>
          <div className="flex justify-between items-center space-x-2 px-2 border-b py-2 selected:bg-gray-400">
            <Label htmlFor="r1">Small</Label>
            <div className='flex items-center gap-2'>
              <p>640x480</p>
              <RadioGroupItem className='border border-black' value="small" id="r1" />
            </div>
          </div>
          <div className="flex justify-between items-center space-x-2 px-2 border-b py-1">
            <Label htmlFor="r2">Medium</Label>
            <div className='flex items-center gap-2'>
              <p>1280x1080</p>
              <RadioGroupItem className='border border-black' value="medium" id="r2" />        
            </div>
          </div>
          <div className="flex justify-between items-center space-x-2 px-2 border-b py-1">
            <Label htmlFor="r3">Big</Label>
            <div className='flex items-center gap-2'>
              <p>1920x1280</p>
              <RadioGroupItem className='border border-black' value="big" id="r3" />
            </div>
          </div>
          <div className="flex justify-between items-center space-x-2 px-2 py-1">
            <Label htmlFor="r4">Original</Label>
            <div className='flex items-center gap-2'>
              <p>{image?.imageWidth}x{image?.imageHeight}</p>
              <RadioGroupItem className='border border-black' value="original" id="r4" />
            </div>
          </div>
        </RadioGroup>
      </div>
      <div className='pt-2 pb-4'>
        <Button 
          onClick={() => {
            resizedImage(image?.largeImageURL, SIZES[size]?.width, SIZES[size]?.height)}
          } 
          className='bg-green-500 hover:bg-green-400 text-white w-full'>
          Download
        </Button>
      </div>
    </div>
  )
}

export default DownloadSelection