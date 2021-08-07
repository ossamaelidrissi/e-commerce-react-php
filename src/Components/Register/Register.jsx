import React from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import {useForm} from 'react-hook-form'
import './css/style.css'

export default function Register() {
    const {register , handleSubmit , formState:{errors}} = useForm();
    const history = useHistory();

    async function Submit(data) {
        const obj =  JSON.stringify(data);
        await axios.post('http://localhost:7882/LTAPROJECT/API/Insert/users.php',data)
          .then(result => console.log(result.data));
          document.querySelector('.succes').innerHTML = "<p class = 'alert alert-success'> Checkout Success ! </p>";
          sessionStorage.setItem("UserEmail" , data.email );   
          history.push('/Checkout');
    };
    return (
        <div className = "cantainer">
                <div className="title">Registration</div>
                <br />
                <div className = "succes"></div>
                <form  action="#" method = "POST" onSubmit = {handleSubmit(Submit)}>
                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">First Name :</span>
                            <input type="text" placeholder = "Enter your first name" name="" id=""  {...register('Fname',{required:true,maxLength:30})} />
                            {errors.Fname && errors.Fname.type === "required" && (
                                <span role="alert"> <p style = {{color : "red"}}>This is required</p> </span>
                              )}
                              {errors.Fname && errors.Fname.type === "maxLength" && (
                                <span role="alert"> <p style = {{color : "red"}}>Max length 30 caracteres</p></span>
                              )}
                        </div>
                        <div className="input-box">
                            <span className="details">Last Name :</span>
                            <input type="text" placeholder = "Enter your last name" name="" id=""  {...register('Lname',{required:true,maxLength:30})}/>
                            {errors.Lname && errors.Lname.type === "required" && (
                                <span role="alert"> <p style = {{color : "red"}}>This is required</p> </span>
                              )}
                              {errors.Lname && errors.Lname.type === "maxLength" && (
                                <span role="alert"> <p style = {{color : "red"}}>Max length 30 caracteres</p></span>
                              )}
                        </div>
                            <div className="input-box">
                            <span className="details">Email :</span>
                            <input type="text" placeholder = "Enter your email" name="" id=""   {...register('email',{required:true,maxLength:30})}/>
                            {errors.email && errors.email.type === "required" && (
                                <span role="alert"> <p style = {{color : "red"}}>This is required</p> </span>
                              )}
                              {errors.email && errors.email.type === "maxLength" && (
                                <span role="alert"> <p style = {{color : "red"}}>Max length 30 caracteres</p></span>
                              )}
                        </div>
                        <div className="input-box">
                            <span className="details">Password  :</span>
                            <input type="text" placeholder = "Enter your password" name="" id=""  {...register('password',{required:true,maxLength:30})}/>
                            {errors.password && errors.password.type === "required" && (
                                <span role="alert"> <p style = {{color : "red"}}>This is required</p> </span>
                              )}
                              {errors.password && errors.password.type === "maxLength" && (
                                <span role="alert"> <p style = {{color : "red"}}>Max length 30 caracteres</p></span>
                              )}
                        </div>
                        <div className="input-box">
                            <span className="details">Confirm Password :</span>
                            <input type="text" placeholder = "Re-write your password" name="" id=""  {...register('re_password',{required:true,maxLength:30})}/>
                            {errors.re_password && errors.re_password.type === "required" && (
                                <span role="alert"> <p style = {{color : "red"}}>This is required</p> </span>
                              )}
                              {errors.re_password && errors.re_password.type === "maxLength" && (
                                <span role="alert"> <p style = {{color : "red"}}>Max length 30 caracteres</p></span>
                              )}
                        </div>
                        <div className="input-box">
                            <span className="details">Adresse :</span>
                            <input type="text" placeholder = "Enter your adresse" name="" id=""   {...register('adresse',{required:true,maxLength:30})}/>
                            {errors.adresse && errors.adresse.type === "required" && (
                                <span role="alert"> <p style = {{color : "red"}}>This is required</p> </span>
                              )}
                              {errors.adresse && errors.adresse.type === "maxLength" && (
                                <span role="alert"> <p style = {{color : "red"}}>Max length 30 caracteres</p></span>
                              )}
                        </div>
                    </div>
                    <div className="gender-details">
                        <input type="radio" name = "gender" id = "dot-1" />
                        <input type="radio" name = "gender" id = "dot-2" />
                        <input type="radio" name = "gender" id = "dot-3" />
                        <div className="category">
                            <label htmlFor="dot-1">
                                <span className = "dot one"></span>
                                <div className="gender">Male</div>
                            </label>
                            <label htmlFor="dot-2">
                                <span className = "dot two"></span>
                                <div className="gender">Female</div>
                            </label>
                            <label htmlFor="dot-3">
                                <span className = "dot tree"></span>
                                <div className="gender">Prefer not to say</div>
                            </label>
                        </div>
                    </div>
                    <div className="button">
                        <input type="submit" name="" id="" value = "Register" />
                    </div>
                </form>
        </div>
    )
}
