import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import axios from 'axios'

function HandleForm() {
    const {register , handleSubmit , formState:{errors}} = useForm();
    // const [];

    async function Submit(data) {
        const obj =  JSON.stringify(data);
        await axios.post('http://localhost:7882/LTAPROJECT/API/Insert/command.php',data)
          .then(result => console.log(result.data));
           document.querySelector('.succes').innerHTML = "<p class = 'alert alert-success'> Checkout Success ! </p>";    
    };

    const [command , setCommand] = useState([]);

     async function commands(){
        const request = await axios.get('http://localhost:7882/LTAPROJECT/API/commands.php');
        const data = await request.data;
        return data;
        setCommand(data);
    }
    useEffect( () => commands() , [] );

    function CheckEmail() {
        var errorEmail = document.querySelector(".errorEmail");
        var emailValue = document.querySelector('.email').value;
        var patt = /^(\w*)+(\.*)(\w*)+\@[A-Za-z]+\.[a-z]{1,3}$/ 
        var b = patt.test(emailValue);
        (b) ? errorEmail.innerHTML = "<strong style = 'color: green;'>Valid</strong>" : errorEmail.innerHTML = "<strong  style = 'color : red;'>Invalid</strong>"    
  }
    return (
        <form action="" method="post" onSubmit ={handleSubmit(Submit)}>
                <div class="row">
                    <div class="col-md-6">
                        <label>First Name</label>
                        <input class="form-control" type="text" placeholder="First Name" {...register('name',{required:true,maxLength:30})} />
                        {errors.name && errors.name.type === "required" && (
                            <span role="alert"> <p style = {{color : "red"}}>This is required</p> </span>
                          )}
                          {errors.name && errors.name.type === "maxLength" && (
                            <span role="alert"> <p style = {{color : "red"}}>Max length 30 caracteres</p></span>
                          )}
                          <p className="errorUsername"></p>
                    </div>
                    <div class="col-md-6">
                        <label>Last Name</label>
                        <input class="form-control" type="text" placeholder="Last Name"  {...register('lastName',{required:true,maxLength:30})}  />
                        {errors.lastName && errors.lastName.type === "required" && (
                            <span role="alert"> <p style = {{color : "red"}}>This is required</p> </span>
                          )}
                          {errors.lastName && errors.lastName.type === "maxLength" && (
                            <span role="alert"> <p style = {{color : "red"}}>Max length 30 caracteres</p></span>
                          )}
                          <p className="errorLastname"></p>
                    </div>
                    <div class="col-md-6">
                        <label>E-mail</label>
                        <input class="form-control email" type="email" onKeyDown = {CheckEmail} value = {sessionStorage.getItem('UserEmail')} 
                        placeholder="E-mail" {...register('email',{required:true,maxLength:30})} autoComplete = "off" />
                        {errors.email && errors.email.type === "required" && (
                            <span role="alert"> <p style = {{color : "red"}}>This is required</p> </span>
                          )}
                          {errors.email && errors.email.type === "maxLength" && (
                            <span role="alert"> <p style = {{color : "red"}}>Max length 30 caracteres</p></span>
                          )}
                          <p className = "errorEmail"></p>
                    </div>
                    <div class="col-md-6">
                        <label>Telephone</label>
                        <input class="form-control phone" type="text" placeholder="Telephone" {...register('tel',{required:true,maxLength:10})} />
                        {errors.tel && errors.tel.type === "required" && (
                            <span role="alert"> <p style = {{color : "red"}}>This is required</p> </span>
                          )}
                          {errors.tel && errors.tel.type === "maxLength" && (
                            <span role="alert"> <p style = {{color : "red"}}>Max length 10 numbers</p></span>
                          )}
                    </div>
                    <div class="col-md-12">
                        <label>Address</label>
                        <input class="form-control" type="text" placeholder="Address"  {...register('adresse',{required:true,maxLength:30})}  />
                        {errors.adresse && errors.adresse.type === "required" && (
                            <span role="alert"> <p style = {{color : "red"}}>This is required</p> </span>
                          )}
                          {errors.adresse && errors.adresse.type === "maxLength" && (
                            <span role="alert"> <p style = {{color : "red"}}>Max length 30 caracteres</p></span>
                          )}
                    </div>
                    <div class="col-md-6">
                        <label>Country</label>
                        <select class="custom-select" value = "" >
                            <option selected value = "">United States</option>
                            <option value = "">Afghanistan</option>
                            <option value = "">Albania</option>
                            <option value = "">Algeria</option>
                            <option value = "">Morocco</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <label>City</label>
                        <input class="form-control" type="text" placeholder="City"  {...register('city',{required:true,maxLength:30})}  />
                        {errors.city && errors.city.type === "required" && (
                            <span role="alert"> <p style = {{color : "red"}}>This is required</p> </span>
                          )}
                          {errors.city && errors.city.type === "maxLength" && (
                            <span role="alert"> <p style = {{color : "red"}}>Max length 30 caracteres</p></span>
                          )}
                    </div>
                   
                </div>
                <button type="submit" class="btn btn-outline-danger">Send</button>
            </form>
    )
}

export default HandleForm;
