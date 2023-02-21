import React from 'react'
import Card from '../Card/Card'
import "./featuredProducts.scss"

const FeaturedProducts = ({type}) => {

  const data=[
     {
      id:1,
      oldPrice: 10,
      Price: 6,
      title: "some cloth"
    },

    {
      id:2,
      oldPrice: 10,
      Price: 6,
      title: "some cloth"
    },
    {
      id:3,
      oldPrice: 10,
      Price: 6,
      title: "some cloth"
    },
    {
      id:4,
      oldPrice: 10,
      Price: 6,
      title: "some cloth"
    }]
    
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
      {data.map(item =>(<Card item={item} key={item.id}/>))}
      </div>
      
    </div>
  )
}

export default FeaturedProducts
