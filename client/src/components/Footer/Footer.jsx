import React from 'react'
import "./footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New arrival</span>
        </div>
        <div className="item">
        <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Ipsa in voluptas eius voluptatum accusamus repudiandae architecto magni,
             iusto dicta sapiente quisquam consequuntur ex earum atque delectus reiciendis esse, similique fuga.</span>
        </div>
        <div className="item">
        <h1>Contact</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Ipsa in voluptas eius voluptatum accusamus repudiandae architecto magni,
             iusto dicta sapiente quisquam consequuntur ex earum atque delectus reiciendis esse, similique fuga.</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className='logo'>STARZZY</span>
          <span className='copyright'>copyright 2023. All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="/img/stripe.png" alt="badge" />
        </div>
      </div>
    </div>
  )
}

export default Footer
