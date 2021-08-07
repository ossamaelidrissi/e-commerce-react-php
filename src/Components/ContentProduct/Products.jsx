import React,{useContext,useState } from 'react'
import Tilt from 'react-vanilla-tilt';
import '../Content/product.css'
import {DataContext} from '../Context/Context'

 function Products() {   
        const [search, setSearch] = useState([]);

    const {products,AddCart} = useContext(DataContext);

    return (
        
            <div class="col-lg">
            <div class="row">
                <div class="col-md-12">
                    <div class="product-view-top">
                        <div class="row">
                            <div class="col">
                                <div class="product-price-range">
                                   <input type="text" class="col-md-12 search" placeholder = "Search for products ..." onChange={event => {setSearch(event.target.value)}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id ="product">
                {products.filter(val =>{
                    if (search == "") {
                        return val
                    }
                    else if(val.NameProduit.toLowerCase().includes(search.toLowerCase())){
                        return val
                    }
                }).map((product =>{
                    return(
                        <>
                             <div className="cart" key = {product.Reference}>
                                <Tilt options={{ scale: 2, max: 10 }}>
                                
                                    <a href = {`/Products/${product.Reference}`}>
                                        <img src={product.Image} alt="" srcSet="" />
                                    </a>
                                    <div className = "contents">
                                        <h3>
                                            <a href = {`/Products/${product.Reference}`}>{product.NameProduit}</a>
                                        </h3>
                                        <span>{product.Prix} MAD</span>
                                        <p style = {{color : "black"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum aut magnam doloremque vel ratione laudantium ?</p>
                                        <button id = "btn" onClick = {()=>AddCart(product.Reference)}>Add Cart</button>
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
export default React.memo(Products);