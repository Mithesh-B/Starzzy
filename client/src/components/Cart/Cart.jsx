import React from 'react'
import "./cart.scss"
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';
import {useSelector} from "react-redux"
import { removeItem, resetCart } from '../../redux/cartReducer';
import { useDispatch } from 'react-redux';
import { loadStripe } from "@stripe/stripe-js";
import { makeRequest } from '../../makeRequest';

const Cart = () => {
 const products = useSelector(state=>state.cart.products)
 
 const totalPrice= ()=>{
  let total = 0
  products.forEach(item=> (total+= item.quantity * item.price))
  return total.toFixed(2)
 }

 const stripePromise = loadStripe('pk_test_51MfzK2SFBtVM8yMf8arXbzhcox5xYeqZCoEcoupRThHPmRNEbvTZeSnhiwkdgPCfaftqKMSaun4Ud958KstuYX9e00kQfF7mex');
 const handlePayment=async()=>{
  try{
  const stripe=await stripePromise

  const res= await makeRequest.post("/orders", {products})
  await stripe.redirectToCheckout({
    sessionId: res.data.stripeSession.id,
  })
  }catch(err){
console.log(err)
  }
 }

 const dispatch = useDispatch()
   
  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      {products?.map(item=>(
        <div className="item" key={item.id}>
          <img src={process.env.REACT_APP_UPLOAD_URL +item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
    
            <div className="price">{item.quantity} x ${item.price}</div>
          </div>
          <HighlightOffTwoToneIcon className='delete' onClick={()=>dispatch(removeItem(item.id))}/>
        </div>
      ))}
     <div className="total">
      <span >Sub Total</span>
      <span>${totalPrice()}</span>
     </div>
     <button onClick={handlePayment}>Checkout</button>
     <span className="reset" onClick={()=>dispatch(resetCart())}>Clear cart</span>
    </div>
  )
}

export default Cart
