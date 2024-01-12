import Searchbar from '@/components/Searchbar'
import React from 'react'

const Banner = ({ image }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-2 rounded-xl overflow-hidden">
      <div style={{ backgroundImage: `url(${image?.largeImageURL})` }} className="rounded-md relative aspect-video md:aspect-[3] overflow-hidden bg-center bg-cover">
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-2xl flex items-center">
            <Searchbar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner