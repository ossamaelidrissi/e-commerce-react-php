import React,{useState,useEffect,useContext,useCallback} from 'react'
import axios from 'axios';
import { DataContext } from '../Context/Context';
import './Detail.css'
export default function CurrentProduct(props) {
  
   console.log(props.match.params.id);
    const [detail , setDetail] = useState([]);
    const {products} = useContext(DataContext);

    const getProduct = () => {
      if (props.match.params.id){
        const data = products.filter(product => product.Reference === props.match.params.id);
        setDetail(data);
        console.log(data); 
    }
  };  
   useEffect(() => { 
       getProduct();
   },[detail]);

   var plus = document.querySelector('.plus');
   var mins = document.querySelector('.mins');
   var Qte = document.querySelector('#Qte');
   
   function Plus(){
     Qte = parseInt(Qte)  + 1 ;
   }
   
    return(
        <div>
        {detail.map((product =>{
          return(

            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src={product.Image} class="d-block w-100" alt="..." />
                      </div>
                    </div>
                    <a class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </a>
                    <a class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </a>
                  </div>
                    </div>
                    <div className="col-md-7">
                            <p className="newarrival text-center">NEW</p>
                            <h2>{product.NameProduit}</h2>
                            <p className = "Price">{product.Prix} DH</p>
                            <label htmlFor="">Quantity :</label>
                            <a className = "btn mins">-</a> <label htmlFor="" id = "Qte">0</label> <a className = "btn plus" onClick = {Plus}>+</a>
                            <br />
                            <strong>Description :</strong>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea consectetur aliquam porro amet dolorem dolor cumque? Rem dolorem, consectetur laborum, at eum adipisci qui rerum voluptatibus a nemo natus cum!</p>
                            <a className = "btn btn-default addcart" >Add cart</a>
                    </div>
                </div>
            </div>
          )
        }))}
        </div>
        )
}
