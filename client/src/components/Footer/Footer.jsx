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
          <h1>About Us</h1>
          <span>Our goal at STARZZY is to provide our customers with an exceptional shopping experience. We offer high-quality products and excellent customer service, with a focus on the latest fashion trends and timeless classics. Thank you for choosing us for all your fashion needs!</span>
        </div>
        <div className="item">
        <h1>Contact Us</h1>
          <span>We're always here to help! If you have any questions or concerns about our products or services, please don't hesitate to get in touch. You can reach us via email or phone, and our customer service team will be happy to assist you. Thank you for choosing STARZZY, we look forward to hearing from you!</span>
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
