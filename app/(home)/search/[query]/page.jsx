import { fetchImages } from '@/actions/getImages';
import Result from '@/components/Result';
import Searchbar from '@/components/Searchbar';
import React from 'react'

const SearchPage = async ({ params }) => {
  const { query } = params;
  const URL = `https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&q=${query}&image_type=photo&per_page=80&pretty=true`;
  const images = await fetchImages(URL);

  return (
    <div>
      <div className='py-10 flex flex-col gap-8'>
        <div className='h-8 w-full flex flex-row items-center'>
          <Searchbar />
        </div>
        <div>
          <p className='text-4xl capitalize font-bold pb-2 text-zinc-900'>
            Showing Result for {decodeURIComponent(query)}
          </p>
          <sapn className='text-sm text-zinc-400'>Find the best {decodeURIComponent(query)} pictures and images by browsing through our incredible photo library. All these images are high-resolution and ready to download!</sapn>
        </div>
      </div>
      <Result images={images?.hits}/>
    </div>
  )
}

export default SearchPage