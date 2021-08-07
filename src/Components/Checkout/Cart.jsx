import React,{useState,useEffect} from 'react'
import axios from 'axios'

function Cart() {
    async function getTotalPrice(){
        const request = await axios.get('http://localhost:7882/LTAPROJECT/PrixTotal.php');
        SetPrice(request.data);
        return request;
    }
    useEffect(() => {
        getTotalPrice();
         });
    const [TotalPrice , SetPrice] = useState([]);
    return (
        <div class="col-lg-4">
            <div class="checkout-inner">
                <div class="checkout-summary">
                    <h1>Cart Total</h1>
                    <p class="sub-total">Sub Total<span>{TotalPrice} DH</span></p>
                    <p class="ship-cost">Shipping Cost<span>1 DH</span></p>
                    <h2>Grand Total<span>{TotalPrice + 1} DH</span></h2>
                </div>

            </div>
        </div>
    )
}

export default Cart
