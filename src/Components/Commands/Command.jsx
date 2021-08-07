import React,{useContext} from 'react'
import { useHistory } from 'react-router-dom'
import { DataContext } from '../Context/Context';
import './css/style.css'
export default function Command() {

    const {Command} = useContext(DataContext);
    const history = useHistory();
   
        return (
            <div class="cart-page">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="cart-page-inner">
                                            <div class="table-responsive">
                                                <table class="table table-bordered">
                                                    <thead class="thead-white">
                                                        <tr>
                                                            <th>Product</th>
                                                            <th>Name</th>
                                                            <th>Prix_Total</th>
                                                            <th>DateC</th>
                                                            <th>Remove</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody class="align-middle">
                                                    {Command.map((com =>{
                                                        return(
                                                            <>
                                                                        <tr>
                                                                            <td>
                                                                                <div class="img">
                                                                                    <a href="#">
                                                                                        <img src={com.image} alt="Image" />
                                                                                    </a>
                                                                                    <p>{com.Products}</p>
                                                                                </div>
                                                                            </td>
                                                                                    <td><span></span></td>
                                                                                    <td>{com.Prix_Total}<span>DH</span></td>
                                                                                    <td>{com.DateC}</td>
                                                                            <td>
                                                                                <button>
                                                                                    <i class="fa fa-trash"></i>
                                                                                </button>
                                                                            </td>
                                                                        </tr>
                                                            </>
                                                            )}))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
    
}
