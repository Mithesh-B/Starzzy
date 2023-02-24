import React from 'react'
import "./cart.scss"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
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
   }]
   
  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      {data?.map(item=>(
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
    
            <div className="price">1 x ${item.Price}</div>
          </div>
          <DeleteOutlinedIcon className='delete'/>
        </div>
      ))}
     <div className="total">
      <span>Sub Total</span>
      <span>$124</span>
     </div>
     <button>Checkout</button>
     <span className="reset">Clear cart</span>
    </div>
  )
}

export default Cart
