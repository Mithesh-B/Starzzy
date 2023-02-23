import React from 'react'
import "./list.scss"
import Card from '../Card/Card'

const List = () => {

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
    <div className='list'>
      {data?.map(item=>(
        <Card item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default List
