import React from 'react'
import "./product.scss"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';

const Product = () => {

  const id = useParams().id
  const [selectedImg, setSelectedImg]= React.useState("img")
  const [quantity, setQuantity]= React.useState(1)

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  return (
    <div className='product'>
      {loading? "loading" :(<><div className="left">
        <div className="images">
          <img src={process.env.REACT_APP_UPLOAD_URL +data?.attributes?.img?.data?.attributes?.url} 
          alt="" onClick={e=>setSelectedImg("img")}/>
          <img src={process.env.REACT_APP_UPLOAD_URL +data?.attributes?.img2?.data?.attributes?.url} 
          alt="" onClick={e=>setSelectedImg("img2")}/>
        </div>
        <div className="mainImg">
        <img src={process.env.REACT_APP_UPLOAD_URL +data?.attributes?.[selectedImg]?.data?.attributes?.url} 
        alt=""/>

        </div>
      </div>
      <div className="right">
        <h1>{data?.attributes?.title}</h1>
        <span>${data?.attributes?.price}</span>
        <p>{data?.attributes?.desc}</p>
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
      </div></>)}
    </div>
  )
}

export default Product
