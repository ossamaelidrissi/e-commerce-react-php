import React from 'react'
import {Link} from 'react-router-dom';
import './css/app.css'
import CartIcon from './svg/shopping-cart-solid.svg'

export default function NewApp() {
    return (
        <div className = "banner">
            <div className="navbar">
                <div className = "logo">Vmarket</div>
                <ul>
                    <li><Link exact to = "/" >Home</Link></li>
                    <li><Link to ="/Products">Products</Link></li>
                    <li><Link to ="/Checkout">checkout</Link></li>
                    <li><Link to="/ContactUs">contact Us</Link></li>
                    <li><Link to="/login">Login & Register</Link></li>
                    <li><Link href="#">Home</Link></li>
                </ul>
                <Link to = "/Cart" className = "card">
                    <img src= {CartIcon} alt="" srcSet="" width = "30"/>
            </Link>
            </div>
            <div className="content">
                <h1>SHOP WITHOUT MASK</h1>
                <p>Lvoluptates hic laudantium eveniet facilis  sit, est id neque recusandae et. <br /> Harum quidem voluptas ad fuga qui.</p>
                <div>
                    <button type = "button"> <span></span> Watch more</button>
                    <button type = "button"> <span></span> sss</button>
                </div>
            </div>
  
        </div>
    )
}
