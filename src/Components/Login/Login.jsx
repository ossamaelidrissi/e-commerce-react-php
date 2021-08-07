import React,{useState,useRef,useEffect} from 'react'
import axios from 'axios'
import {Link,useHistory} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import './Login.css'
export default function Login() {

    const {register , handleSubmit , formState:{errors}} = useForm();
    const history = useHistory();
    const [users , setUsers] = useState([]);
    const Refocus = useRef();



    async function Users(){
        const res = await axios.get('http://localhost:7882/LTAPROJECT/API/users.php');
        const data = await res.data;
        setUsers(data);
    }
    useEffect(() => {
        Users();
    }, []);

    const [email , setEmail] = useState([]);
    const [password , setPassword] = useState([]);

    const Submit = e => {
        if(e.email == users.map(user =>{return user.UserEmail}) && e.password == users.map(user => {return user.UserPassword})){
            sessionStorage.setItem("UserEmail" , e.email );
            async function token(){
                const req = await axios.post('http://localhost:7882/LTAPROJECT/API/commands.php',sessionStorage.getItem("UserEmail"));
            }
            token();
            history.push('/Checkout');
            console.info('connected');
        }
        else{
            document.querySelector('.wrapper').style.boxShadow = "8px 8px 50px rgb(255, 29, 29)";
            document.querySelector('.error').innerHTML = "<p class = 'alert alert-danger'> Password & Email is incorrect ! </p>"
        }
    }  
    function CheckEmail() {
        var errorEmail = document.querySelector(".errorEmail");
        var emailValue = document.querySelector('#email').value;
        var patt = /^(\w*)+(\.*)(\w*)+\@[A-Za-z]+\.[a-z]{1,3}$/ 
        var b = patt.test(emailValue);
        if (b) {
            errorEmail.innerHTML = "<strong style = 'color: green;'>Valid</strong>";  
    }
    else{
        errorEmail.innerHTML = "<strong  style = 'color : red;'>Invalid</strong>"
    }
  }
      return (
          <div className = "wrapper">
              <h1>Sign In</h1>
              <div className="error"></div>
               <form action="" onSubmit ={handleSubmit(Submit)}>
                  <input ref = {Refocus} type="text" name="" id="email" placeholder = "E-mail" onChange = { e =>{setEmail(e.target.value)}}
                      {...register('email',{required:true,maxLength:30})} onKeyDown = {CheckEmail} autoComplete="off"  />
                      {errors.email && errors.email.type === "required" && (
                          <span role="alert"> <p style = {{color : "red"}}>This is required</p> </span>
                    )}
                      {errors.email && errors.email.type === "maxLength" && (
                          <span role="alert"> <p style = {{color : "red"}}>Max length 30 caracteres</p></span>
                      )}
                    <p className="errorEmail"></p>
  
  
                  <input type="password" name="password" id="" placeholder = "Password" onChange = {  e => {setPassword(e.target.value)}}
                          {...register('password',{required:true,maxLength:30})} autoComplete="off" />
                          {errors.password && errors.password.type === "required" && (
                              <span role="alert"> <p style = {{color : "red"}}>This is required</p> </span>
                            )}
                            {errors.password && errors.password.type === "maxLength" && (
                              <span role="alert"> <p style = {{color : "red"}}>Max length 30 caracteres</p></span>
                            )}
                  <input type="submit" value = "Login" name="" id=""  />
              </form>
              <Link to="/Register">Create your Vmarket account</Link>
          </div>
      )
  

}
