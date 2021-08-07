import React from 'react'

import HandleForm from './Form/form'

export default function Form() {
    
    return (
        
    <div class="col-lg-8">
        <div class="checkout-inner">
            <div class="billing-address">
                <h2>Billing Address</h2>
                <div class="succes" role="alert"></div>
                <HandleForm />                
            </div>
        </div>
    </div>

    )
}
