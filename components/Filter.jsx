import React from 'react'
import TagsList from './TagsList'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from './ui/separator'

const Filter = ({ images }) => {
  return (
    <div className='h-16 flex lg:flex-row flex-col items-center align-middle justify-center'>
      <div className='w-[80%] lg:w-[70%] xl:w-[80%] h-10'>
        <TagsList images={images?.hits} />
      </div>
      <Separator orientation="vertical" className='mx-2 h-10' />
      <div className='lg:w-[15%] w-full h-10 items-center justify-self-center'>
        <Select className='focus:ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0'>
          <SelectTrigger className="lg:w-[180px] w-full rounded-full">
            <SelectValue placeholder="Editor&apos;s Choice" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="editors_choice">Editor&apos;s Choice</SelectItem>
              <SelectItem value="latest">Latest</SelectItem>
              <SelectItem value="trending">Trending</SelectItem>  
            </SelectGroup>
          </SelectContent>
      </Select>
      </div>
    </div>
  )
}

export default Filter