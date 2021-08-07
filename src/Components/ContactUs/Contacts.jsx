import React, { useRef , useEffect  } from 'react';
import {useForm} from 'react-hook-form'
import emailjs from 'emailjs-com'
function Contacts() {

    const {register , handleSubmit , formState:{errors}} = useForm();
    const Refocus = useRef();
    function Focus(){
        Refocus.current.focus();
    }

    function sendEmail(e) {

        e.preventDefault();
        emailjs.sendForm('service_cgh801k', 'template_t2klh5m', e.target, 'user_qVz4UjmZxyoJkyuVuvj55')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }

        return (
            <div>
            <div class="contact">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="contact-info">
                            <h2>Our Office</h2>
                            <h3><i class="fa fa-map-marker"></i>V Market office, Marrakech, Morroco</h3>
                            <h3><i class="fa fa-envelope"></i>elidrissiossama31@gmail.com</h3>
                            <h3><i class="fa fa-phone"></i>+21 27 06 88 37 91</h3>
                            <div class="social">
                                
                                <a href=""><i class="fab fa-facebook-f"></i></a>
                                <a href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="contact-info">
                            <h2>Our Store</h2>
                            <h3><i class="fa fa-map-marker"></i>V Market office, Marrakech, Morroco</h3>
                            <h3><i class="fa fa-envelope"></i>elidrissiossama31@gmail.com</h3>
                            <h3><i class="fa fa-phone"></i>+21 27 06 88 37 91</h3>
                            <div class="social">
                                <a href=""><i class="fab fa-facebook-f"></i></a>
                                <a href="https://www.instagram.com/ossaaaamaa/"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="contact-form">
                            <form action = "" method = "POST" onSubmit = {sendEmail}>
                                <div class="row">
                                    <div class="col-md-6">
                                        <input ref = {Refocus} type="text" class="form-control" name = "name" placeholder="Your Name"{...register('name',{required:true,maxLength:30})} required />
                                        {errors.name && errors.name.type === "required" && (
                                            <span role="alert"> <p style = {{color : "red"}}>This is required</p> </span>
                                          )}
                                          {errors.name && errors.name.type === "maxLength" && (
                                            <span role="alert"> <p style = {{color : "red"}}>Max length 30 caracteres</p></span>
                                          )}
                                    </div>
                                    <div class="col-md-6">
                                        <input type="email" class="form-control" name = "email" placeholder="Your Email" {...register('email',{required:true,maxLength:30})}  required/>
                                        {errors.email && errors.email.type === "required" && (
                                            <span role="alert"> <p style = {{color : "red"}}>This is required</p> </span>
                                          )}
                                          {errors.email && errors.email.type === "maxLength" && (
                                            <span role="alert"> <p style = {{color : "red"}}>Max length 30 caracteres</p></span>
                                          )}
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" name = "subject" placeholder="Subject" {...register('subject',{required:true,maxLength:30})} required />
                                    {errors.subject && errors.subject.type === "required" && (
                                        <span role="alert"> <p style = {{color : "red"}}>This is required</p> </span>
                                      )}
                                      {errors.subject && errors.subject.type === "maxLength" && (
                                        <span role="alert"> <p style = {{color : "red"}}>Max length 30 caracteres</p></span>
                                      )}
                                </div>
                                <div class="form-group">
                                    <textarea class="form-control" style = {{height:"150px"}}  name = "message" placeholder="Message" {...register('message',{required:true,maxLength:30})} required />
                                    {errors.message && errors.message.type === "required" && (
                                        <span role="alert"> <p style = {{color : "red"}}>This is required</p> </span>
                                      )}
                                      {errors.message && errors.message.type === "maxLength" && (
                                        <span role="alert"> <p style = {{color : "red"}}>Max length 30 caracteres</p></span>
                                      )}
                                </div>
                                <div><button class="btn" type="submit">Send Message</button></div>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="contact-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8095.413764650499!2d-7.975915181204681!3d31.611688804994294!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x35b1325a7cdaa68d!2sIsta%20Ntic%20Syba!5e0!3m2!1sar!2sma!4v1618412837350!5m2!1sar!2sma" width="600" height="450" style={{border : "0" , allowfullscreen:"" ,loading:"lazy"}}></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </div>
        );
}

export default Contacts;