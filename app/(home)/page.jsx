import React from 'react'
import Banner from './components/Banner'
import TagsList from '@/components/TagsList';
import Result from '@/components/Result';
import { fetchImages, fetchTags } from '@/actions/getImages';



const Home = async () => {
  const URL = `https://pixabay.com/api/?key=${process.env.PIXABAY_KEY}&image_type=photo&pretty=true`;

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
      <TagsList images={images?.hits} />
      <Result images={images?.hits} />
    </div>
  )
}

export default Home