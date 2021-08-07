import React from 'react'
import {Link} from 'react-router-dom'
import Typed from 'react-typed'

export default function Feature() {
    return (
        <div>
        <div className="content">
                <h1><Typed className = "Typed" strings = {["Welcome in Vmarket.com","SHOP WITHOUT MASK","SHOP A TRADITIONEL CLOTHES"]} typeSpeed = {60} backSpeed = {25} loop/></h1>
                <p>Lvoluptates hic laudantium eveniet facilis  sit, est id neque recusandae et. <br /> Harum quidem voluptas ad fuga qui.</p>
                <div>
                    <Link to = "/Products"><button type = "button"> <span></span> Shop Now</button></Link>
                    <Link to = "/ContactUs"><button type = "button"> <span></span> Contact Us</button></Link>
                </div>
            </div>
        <div class="feature">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-3 col-md-6 feature-col">
                    <div class="feature-content">
                        <i class="fab fa-cc-mastercard"></i>
                        <h2>Secure Payment</h2>
                        
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 feature-col">
                    <div class="feature-content">
                        <i class="fa fa-truck"></i>
                        <h2>Worldwide Delivery</h2>
                        
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 feature-col">
                    <div class="feature-content">
                        <i class="fa fa-sync-alt"></i>
                        <h2>90 Days Return</h2>
                        
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 feature-col">
                    <div class="feature-content">
                        <i class="fa fa-comments"></i>
                        <h2>24/7 Support</h2>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br /><br /><br /> <br />
        </div>
    )
}
