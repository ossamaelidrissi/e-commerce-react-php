import React, {useEffect } from 'react';
import {useHistory} from 'react-router-dom'
import Form from './Form'
import Cart from './Cart'

export default function Checkout() {
    const history = useHistory();
    function SessionState() {
        if (sessionStorage.getItem("UserEmail")  == null) {
            history.push('/Login');
        }
    }
    useEffect(()=>{
            SessionState();
    })
      return (
         <div class="checkout">
            <div class="container-fluid"> 
                <div class="row">
                    <Form />
                    <Cart />
                </div>
             </div>
          </div>
        );
    }


