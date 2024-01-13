import React from 'react'
import Banner from './components/Banner'
import Result from '@/components/Result';
import { fetchImages } from '@/actions/getImages';
import Filter from '@/components/Filter';
import { Button } from '@/components/ui/button';



const Home = async () => {
  const filter = 'editors_choice=true';
  const URL = `https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&image_type=photo&pretty=true&${filter}`;

  const getRandomNumber = () => {
    const randomDecimal = Math.random();
    const randomNumberBetween0And20 = randomDecimal * 20;
    const roundedRandomNumber = Math.floor(randomNumberBetween0And20);
    return roundedRandomNumber;
  }

  const images = await fetchImages(URL);
  
  return (
    <div>
      <Banner image={images?.hits[getRandomNumber()]} />
      <Filter images={images} />
      <Result images={images?.hits} />
      <div className='w-full flex flex-row justify-center pt-5 pb-10'>
        <div>
          <Button className='rounded-full font-light'>Load More</Button>
        </div>
      </div>
    </div>
  )
}

export default Home