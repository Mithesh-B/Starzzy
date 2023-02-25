import React from 'react'
import Card from '../Card/Card'
import "./featuredProducts.scss"
import useFetch from '../../hooks/useFetch'

const FeaturedProducts = ({type}) => {

  const {data,loading,error}= useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)

  console.log(data)
    
  return (
    <div className='featuredProducts'>
      <div className="top">
        <h1>{type} products</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Quasi, dolorem iure? Necessitatibus in sunt nisi sit minima, 
           nihil velit debitis excepturi numquam. Fugit illo tenetur non est? Temporibus,
            sed doloribus!</p>
      </div>
      <div className="bottom">
      {error? "Something went wrong": (loading?"loading" :data && data.map(item =>(<Card item={item} key={item.id}/>)))}
      </div>
      
    </div>
  )
}

export default FeaturedProducts
