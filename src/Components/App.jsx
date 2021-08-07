import React,{useState,memo,useContext} from 'react'
import H from './MasterHeader'
import Bottom from './Bottom'
import Home from './Home'
import Page from './ContentProduct/Page'
import Products from './Panier/Products'
import {BrowserRouter,Route , Switch} from 'react-router-dom'
import Checkout from './Checkout/Checkout'
import Contacts from './ContactUs/Contacts'
import Mens from './ContentProduct/Mens'
import CurrentProduct from './ContentDetails/CurrentProduct'
import Register from './Register/Register'
import './css/app.css';
import Login from './Login/Login'
import Command from './Commands/Command'
import { DataProvider } from './Context/Context'
export default function App() {
    return (
        <DataProvider>
            <BrowserRouter>
                    <div className = "banner">
                        <H />
                            <Switch>
                                <Route exact path = "/" component = {Home} />
                                <Route path = "/Products" component = {Page} exact />                
                                <Route path = "/Checkout" component = {Checkout} />
                                <Route path = "/Cart" component = {Products} />
                                <Route path = "/Login" component = {Login} />
                                <Route path = "/Checkout:Products" component = {Checkout} />
                                <Route path = "/ContactUs" component = {Contacts} />
                                <Route path = "/Products/:id" component = {CurrentProduct} />
                                <Route path = "/Contacts" component ={Contacts} />
                                <Route path = "/Deconnecter" component ={Contacts} />
                                <Route path = "/Register" component ={Register} />
                                <Route path = "/Commnads" component ={Command} />
                            </Switch>
                        <Bottom />
                    </div>
            </BrowserRouter>
        </DataProvider>
    )
}
// export const AppMemo = memo(App);