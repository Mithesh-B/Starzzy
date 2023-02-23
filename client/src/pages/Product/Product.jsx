import React from 'react'
import "./product.scss"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

const Product = () => {
  const [selectedImg, setSelectedImg]= React.useState(0)
  const [quantity, setQuantity]= React.useState(1)

  const images =[
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];
  return (
    <div className='product'>
      <div className="left">
        <div className="images">
        <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)}/>
        <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)}/>
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>title</h1>
        <span>$199</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illum unde, exercitationem voluptates error accusamus culpa deleniti ex ad debitis delectus quisquam sequi consequatur hic eligendi adipisci nihil ab maxime?</p>
        <div className='quantity'>
          <button onClick={()=>setQuantity(prev=>prev===1? 1: prev-1)}>-</button>
          {quantity}
          <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
        </div>
        <button className='add'>
          <AddShoppingCartIcon/> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon/> add to wishlist
          </div>
          <div className="item">
            <BalanceIcon/> compare
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
