import React from 'react'
import "./categories.scss"


const Categories = () => {

  const openInSameTab = (url) => {
    window.open(url, '_self')
  }
  
  
  return (
    <div className="categories">
    <div className="col">
      <div className="row">
        <img
          src="/img/6.png"
          alt=""
          onClick={() => { openInSameTab("/products/1") }}
        />
      </div>
      <div className="row">
        <img
          src="/img/4.png"
          alt=""
          onClick={() => { openInSameTab("/products/1") }}
        />
      </div>
    </div>
    <div className="col">
      <div className="row">
        {" "}
        <img
          src="/img/7.png"
          onClick={() => { openInSameTab("/products/1") }}
        />
      </div>
    </div>
    <div className="col col-l">
      <div className="row">
        <div className="col">
          <div className="row">
            <img
             src="/img/5.png"
              onClick={() => { openInSameTab("/products/1") }}
            />
          </div>
        </div>
      
      </div>
      <div className="row">
        <img
          src="/img/3.png"
          alt=""
          onClick={() => { openInSameTab("/products/1") }}
        />
      </div>
    </div>
  </div>
  )
}

export default Categories
