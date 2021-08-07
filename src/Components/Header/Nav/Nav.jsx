import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import CartIcon from '../../svg/shopping-cart-solid.svg'
import axios from 'axios'
import { DataContext } from '../../Context/Context'
import '../../css/app.css'

export default function Nav() {
    const {cart} = useContext(DataContext);
    return (
        <div>
            <div className="navbar">
                <div className = "logo"><img src="img/Logoooo.png" alt="Logo" /></div>
                <ul className = "menu">
                    <li><Link exact to = "/" >Home</Link></li>
                    <li><Link to ="/Products">Products</Link>
                        <div class="dropdown">
                            <div class="dropdown-menu dropdown-menu-right">
                                <Link to='/Products/Mens'class="dropdown-item">Mens</Link>
                                <Link to="#" class="dropdown-item">Kids</Link>
                                <Link to="#" class="dropdown-item">Womans</Link>
                            </div>
                </div>
                    </li>
                    <li><Link to="/ContactUs">contact Us</Link></li>
                    <li><Link to="/Commnads">Commands</Link></li>
                    <li><Link to="/login" className = "In_Out">Login & Register</Link></li>
                    
                </ul>
                <Link to = "/Cart" className = "card">
                    <img src= "http://localhost:7882/LTAPROJECT/cart3.jpg" alt="" srcSet="" width = "40" height = "40"/>({cart.length})
                </Link>
            
                </div>
        </div>
    )
}
