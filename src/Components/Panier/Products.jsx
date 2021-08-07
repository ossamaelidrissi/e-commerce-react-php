import React, { useState,useEffect,useContext } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import { DataContext } from '../Context/Context';



export default function Products()  {

    const {cart} = useContext(DataContext);

        return (
            <div>
                  <div class="cart-page">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-8">
                                    <div class="cart-page-inner">
                                        <div class="table-responsive">
                                            <table class="table table-bordered">
                                                <thead class="thead-white">
                                                    <tr>
                                                        <th>Product</th>
                                                        <th>Price</th>
                                                        <th>Quantité</th>
                                                        <th>Prix Total</th>
                                                        <th>Remove</th>
                                                        </tr>
                                                </thead>
                                                <tbody class="align-middle">
                                                
                                                    {cart.map((command =>{
                                                        return(
                                                                <tr>
                                                                    <td>
                                                                        <div class="img">
                                                                            <a href="#"><img src={command.Image} alt="Image" /></a>
                                                                            <p>{command.NameProduit}</p>
                                                                        </div>
                                                                            </td>
                                                                            <td>{command.Prix}<span>DH</span></td>
                                                                            <td>{command.Qte}</td>
                                                                            <td>{command.Prix * command.Qte} <span>DH</span></td>
                                                                    <td>
                                                                        <button>
                                                                            <i class="fa fa-trash"></i>
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            )
                                                    }
                                                    ))
                                                }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="cart-page-inner">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="coupon">
                                                    <input type="text" placeholder="Coupon Code" />
                                                    <button>Apply Code</button>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="cart-summary">
                                                    <div class="cart-content">
                                                        <h1>Cart Summary</h1>
                                                        <p>Sub Total<span> DH</span></p>
                                                        <p>Shipping Cost<span>1 DH</span></p>
                                                        <h2>Grand Total<span> DH</span></h2>
                                                    </div>
                                                    <div class="cart-btn">
                                                       <button style = {{tabSize : "15px"}}><Link to = "/Checkout:">Checkout</Link></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        );
}



