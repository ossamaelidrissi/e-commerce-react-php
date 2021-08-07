import React,{useContext} from 'react'
import { DataContext } from '../Context/Context';
import RubberBand from 'react-reveal/RubberBand'
import './product.css';
import Tilt from 'react-vanilla-tilt';
import {Link} from 'react-router-dom'

export default function FeatureProducts() {
    const {products,AddCart} = useContext(DataContext);
    return (
        <div>
        <div className="section-header">  
        <RubberBand>
          <h1 style = {{ marginLeft:"550px" , color : "white"}}>New Product</h1>
        </RubberBand>
        <hr/>
         </div>
        <div className ="row p1">
        <div id ="product">
        
                {products.map((product =>{
                    return(
                        <>
                            <div className="cart" key = {product.Reference}>
                                <Tilt options={{ scale: 2, max: 10 }}>
                                
                                    <Link to = {`/Products/${product.Reference} `}>
                                        <img src={product.Image} alt="" srcSet="" />
                                    </Link>
                                    <div className = "contents">
                                        <h3>
                                            <Link to = {`/Products:${product.Reference}`}>{product.NameProduit}</Link>
                                        </h3>
                                            <span>{product.Prix} MAD</span>
                                            <p style = {{color : "black"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum aut magnam doloremque vel ratione laudantium ?</p>
                                            <button onClick = {()=> AddCart(product.Reference)}>Add to card</button>
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
   

