import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import "./Navbar.scss"
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const[open, setOpen]= React.useState(false)
  const products = useSelector(state=>state.cart.products)
  
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='left'>
        <div className='center'>
          <Link className='link' to="/">STA&ZZY</Link>
        </div>
         
        </div>
        
        <div className='right'>
        <div className="item">
            <Link className='link' to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link className='link' to="/products/2">Men</Link>
          </div>
          <div className="icons">
            <SearchIcon/>
            <PersonOutlineIcon/>
            <FavoriteBorderIcon/>
            <div className="cartIcon" onClick={()=>setOpen(!open)}>
              <ShoppingCartOutlinedIcon/>
                <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  )
}

export default Navbar
