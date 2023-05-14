import React, { useRef } from 'react'
import { useState } from 'react'
import { useAppContext } from '../../Context/appContext'
import emailjs from '@emailjs/browser';
import Wrapper from "../../assets/wrappers/DashboardFormPage";

const ResetPassword = () => {
  const {email,code,expireIn,sendEmail} = useAppContext()
  const[emailEntered,setEmailEntered] =useState('')
  const[capture_emailEntered,setCapture_emailEntered] =useState('')
   const formm = useRef();

const sendOTP = (event) => { 
    event.preventDefault()
    setCapture_emailEntered(`${emailEntered}`)
  let otpData ={email:capture_emailEntered,code:code,expireIn:expireIn}
  //calling function
  sendEmail(otpData )
  //email

    emailjs.sendForm('service_gavas3q','template_ucfkcuj', formm.current, "bcGEvRdKzla6Iam0E")
    .then((res) => {
        console.log('Email successfully sent!');
      })
      .catch((err) => {
        console.error('Error sending email:', err);
      });
  };
  return (
    <Wrapper>
      <form className="form"  ref={formm} onSubmit={sendOTP} >
              <h3> Reset Password </h3>
              <div>
              <label>Email {capture_emailEntered}</label>
              </div>
              <div>
              <input type="email" name="user_emaill" size="50" onChange = {(event) => setEmailEntered(event.target.value)}/>
              </div><div>
              <label>Message</label>
              </div><div>
              <textarea name="messagee" rows="5" cols="40"/>
              </div>
              <p> 
               
                <div>
                <input type="submit" value="Send" size="20" className="btn btn-block" />
                </div>
                
                 <a href="https://smart-meter-g10-final.onrender.com/login" class="button">Back</a>
              </p>
      </form>
      </Wrapper>
  )
}

export default ResetPassword
