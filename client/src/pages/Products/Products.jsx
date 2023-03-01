import React from 'react'
import { useParams } from 'react-router-dom'
import List from '../../components/List/List'
import "./products.scss"
import useFetch from "../../hooks/useFetch"

const Products = () => {

  const catId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = React.useState(1000);
  const [sort, setSort]= React.useState("asc")
  const [selectedSubCats, setSelectedSubCats]= React.useState([]) 

  const {data, loading,error} = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`)
  const handleChange=(e)=>{
    const value= e.target.value;
    const isChecked= e.target.checked;

    setSelectedSubCats(isChecked?[...selectedSubCats, value]: selectedSubCats.filter(item=> item !== value))
  }


  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map((item)=>(<div className="inputItem" key={item.id}>
            <input type="checkbox" id={item.id} value={item.id} onChange={handleChange}/>
            <label htmlFor={item.id}>{item.attributes.title}</label>
          </div>))}
          
        </div>
        
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" id='asc' value="asc" name='price' onChange={e=>setSort("asc")} />
            <label htmlFor="asc">Price Acending</label>
          </div>
          <div className="inputItem">
            <input type="radio" id='desc' value="desc" name='price' onChange={e=>setSort("desc")} />
            <label htmlFor="desc">Price Descending</label>
          </div>
        </div>
      </div>
      <div className="right">
      <img
          className="catImg"
          src="/img/9.png"
          alt=""
        />
        <List catId={catId} sort={sort} subCats={selectedSubCats}/>
      </div>
    </div>
  )
}

export default Products
