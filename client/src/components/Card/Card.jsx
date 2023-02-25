import React from 'react'
import "./card.scss"
import {Link} from "react-router-dom"

const Card = ({item}) => {
  return (
    <Link className='link' to={`/product/${item.id}`}>
    <div className='card'>
        <div className="image">
            <img src={process.env.REACT_APP_UPLOAD_URL+item.attributes?.img?.data?.attributes?.url} alt="" className='mainImg'/>
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
            <h3>${item.oldPrice || item?.attributes.price + 12}</h3>
            <h3>${item?.attributes.price}</h3>
        </div>
    </div>
    </Link>
    
  )
}

export default Card


