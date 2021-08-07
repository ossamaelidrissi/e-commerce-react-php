import React,{useContext,memo} from 'react'
import {Link} from 'react-router-dom'
import Tilt from 'react-vanilla-tilt';
import '../Content/product.css'
import { DataContext } from '../Context/Context';

export default function Products(){
    const {MensP} = useContext(DataContext);
        return (
            <div class="col-lg">
            <div class="row">
                <div class="col-md-12">
                    <div class="product-view-top">
                        <div class="row">
                            <div class="col">
                                <div class="product-short">
                                    <div class="dropdown">
                                        <div class="dropdown-toggle" data-toggle="dropdown">Product short by</div>
                                        <div class="dropdown-menu dropdown-menu-right">
                                            <Link to='/Products/Mens'class="dropdown-item">Mens</Link>
                                            <Link href="#" class="dropdown-item">Kids</Link>
                                            <Link href="#" class="dropdown-item">Womans</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="product-price-range">
                                    <div class="dropdown">
                                        <div class="dropdown-toggle" data-toggle="dropdown">Product price range</div>
                                        <div class="dropdown-menu dropdown-menu-right">
                                            <a href="#" class="dropdown-item">0DH to 50DH</a>
                                            <a href="#" class="dropdown-item">51DH to 100DH</a>
                                            <a href="#" class="dropdown-item">101DH to 150DH</a>
                                            <a href="#" class="dropdown-item">151DH to 200DH</a>
                                            <a href="#" class="dropdown-item">201DH to 250DH</a>
                                            <a href="#" class="dropdown-item">251DH to 300DH</a>
                                            <a href="#" class="dropdown-item">301DH to 350DH</a>
                                            <a href="#" class="dropdown-item">351DH to 400DH</a>
                                            <a href="#" class="dropdown-item">401DH to 450DH</a>
                                            <a href="#" class="dropdown-item">451DH to 500DH</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id ="product">
                {MensP.map((product =>{
                    return(
                        <>
                            <div className="cart" key = {product.Reference}>
                                <Tilt options={{ scale: 2, max: 10 }}>
                                    <a href = {`/Products/${product.Reference}`}>
                                        <img src={product.image} alt="" srcSet="" />
                                    </a>
                                    <div className = "contents">
                                        <h3>
                                            <a href = {`/Products/${product.Reference}`}>{product.NameProduit}</a>
                                        </h3>
                                        <span>{product.Prix} MAD</span>
                                        <p style = {{color : "black"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum aut magnam doloremque vel ratione laudantium ?</p>
                                        <button id = "btn"><a href ={`/Products/${product.Reference}`}>See Details</a></button>
                                        <button id = "btn">See Details</button>
                                    </div>
                                </Tilt>
                            </div>
                        </>
                    )
                }))}
        </div>
            </div>
        </div>
        )
    }
