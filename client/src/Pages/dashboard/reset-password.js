import React, { useRef } from 'react'
import { useState } from 'react'
import { useAppContext } from '../../Context/appContext'
import emailjs from '@emailjs/browser';

const ResetPassword = () => {
  const {email,code,expireIn,sendEmail} = useAppContext()
  const[emailEntered,setEmailEntered] =useState('')
  const[capture_emailEntered,setCapture_emailEntered] =useState('')
  //const form = useRef();

  const emailRef = useRef()

const sendOTP = (event) => { 
    event.preventDefault()
    setCapture_emailEntered(`${emailEntered}`)
  let otpData ={email:capture_emailEntered,code:code,expireIn:expireIn}
  //calling function
  sendEmail(otpData )
  //emaiing
  emailjs.sendForm("service_55u9ony","template_xfbz84h", emailRef.current,"UtuJZstWyBB22fTow")
  alert("Message sent Successfully!!");
}

  return (
      <form /*ref={form}*/  ref={emailRef} onSubmit={sendOTP} >
              <h3> Reset Password </h3>
              <div>
              <label>Email {capture_emailEntered}</label>
              </div>
              <div>
              <input type="email" name="user_email" size="50" onChange = {(event) => setEmailEntered(event.target.value)}/>
              </div>
              <p> 
                <button type="button" className="member-btn" onClick={sendOTP}>Send</button>
                
                 <a href="https://smart-meter-g10-final.onrender.com/login" class="button">Back</a>
              </p>
      </form>
  )
}

export default ResetPassword
