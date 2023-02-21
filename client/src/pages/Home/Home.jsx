import React from 'react'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Slider from "../../components/Slider/Slider"
import "./home.scss"

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts type='featured'/>
      <FeaturedProducts type='trending'/>
    </div>
  )
}

export default Home
