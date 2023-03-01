import React from 'react'
import Card from '../Card/Card'
import "./featuredProducts.scss"
import useFetch from '../../hooks/useFetch'

const FeaturedProducts = ({type}) => {

  const {data,loading,error}= useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)
    
  return (
    <div>
    <div className='featuredProducts'>
      <div className="top">
        <h1>{type} products</h1>
        <p>Discover the hottest items in fashion with our {type} Products section. From must-have clothing pieces to statement accessories, we've got everything you need to stay on top of the latest trends. Shop now and take your style game to the next level!</p>
      </div>
    </div>
    <div className="bottom">
    {error? "Something went wrong": (loading?"loading" :data && data.map(item =>(<Card item={item} key={item.id}/>)))}
    </div>
    </div>
  )
}

export default FeaturedProducts
