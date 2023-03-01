import React from 'react'
import "./footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="bottom">
          <span className='logo'>STA&ZZY</span>
          <span className='copyright'>copyright 2023. All Rights Reserved</span>
        </div>
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
        <h1>About Us</h1>
          <span>About STARZZY</span>
          <span>Contact us</span>
          <span>Features</span>
          <span>Careers</span>
        </div>
        <div className="item">
        <h1>Resources</h1>
          <span>Help center</span>
          <span>blog</span>
          <span>Server Status</span>
        </div>
        
      </div>
    </div>
  )
}

export default Footer
