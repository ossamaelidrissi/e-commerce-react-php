import React,{useState,useCallback,useEffect, createContext  } from 'react'
import axios from 'axios'

const DataContext = createContext();

const DataProvider = ({children}) => {
    const [products , setProducts] = useState([]);
    const [Detail , setDetail] = useState([]);
    const [Command , setCommand] = useState([]);
    
    const [MensP , setMensP] = useState([]);
    const [cart , setCart] = useState([]);
  

    useEffect(() => {
        getPro();
        Mens();
        Commands();
    },[])

    // Products
    const getPro = useCallback(async () =>{
        const req =await axios.get('http://localhost:7882/LTAPROJECT/Products.php');
        const res =await req.data;
        setProducts(res);
        } , [products]);

    //Users 

    const Commands = useCallback(async () => {
        const req = await axios.get('http://localhost:7882/LTAPROJECT/API/commands.php');
        const res = await req.data;
        setCommand(res);
    },[Command])
   

    // Mens Products

    const Mens = useCallback(async () => {
        const res = await axios.get('http://localhost:7882/LTAPROJECT/GetMensProduct.php');
        const data = res.data ;
        setMensP(data);
    },[MensP])

    function AddCart(id){
        const data = products.filter(product =>{ return (product.Reference === id)})
        setCart([...cart , ...data]);
        sessionStorage.setItem("cart",...id);
    }

       

     return (
            <DataContext.Provider value = {{products, AddCart,MensP ,cart ,Command}}>
                {children}
            </DataContext.Provider>
    )
}
export {DataContext , DataProvider };