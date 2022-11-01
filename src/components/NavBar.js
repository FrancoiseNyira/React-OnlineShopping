import React from 'react'
import '../Styles/NavBar.css'
import {Link} from 'react-router-dom';


const NavBar = ({size, setShow, AddProduct}) => {
  return (
    <nav>
        <div className='nav_box'>
            <span className='my_shop' onClick={()=>setShow(true)}>
                <i>ShopX</i>
            </span>
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-hsla(240, 67%, 19%, 0.308) mr-5">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link " to="/">Home</Link>
                        <Link className="nav-item nav-link" to="/AddProduct">ADD PRODUCT</Link>
                    </div>
                </div>
            </nav>
        </div>
            <Link className='cart' to="/Cart">
                <span>
                    <i className='fas fa-cart-plus'></i>
                </span>
                <span>{size}</span>
            </Link>
        </div>
    </nav>
  )
}

export default NavBar