import React from 'react'
import "./products.scss"

const Products = () => {
  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id='1' value={1} />
            <label htmlFor="1">Shoes</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
        </div>
      </div>
      <div className="right"></div>
    </div>
  )
}

export default Products
