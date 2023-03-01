import React from 'react'
import "./list.scss"
import Card from '../Card/Card'
import useFetch from '../../hooks/useFetch'

const List = ({subCats, maxPrice, sort, catId}) => {

  const {data, loading,error} = useFetch(`/products?populate=*&[filters][categories][id][$eq]=
  ${catId}${subCats.map(item=> `&[filters][sub_categories]
  [id][$eq]=${item}`)}&sort=price:${sort}`) 
  
  return (
    <div className='list'>
      {loading? "loading" : data?.map(item=>(
        <Card item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default List
