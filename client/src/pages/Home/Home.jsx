import React from 'react'
import Categories from '../../components/Categories/Categories'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Slider from "../../components/Slider/Slider"
import "./home.scss"

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts type='featured'/>
      <Categories/>
      <FeaturedProducts type='trending'/>
    </div>
  )
}

export default Home
