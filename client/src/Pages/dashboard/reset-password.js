import React, { useRef } from 'react'
import { useState } from 'react'
import { useAppContext } from '../../Context/appContext'
import emailjs from '@emailjs/browser';
import Wrapper from "../../assets/wrappers/DashboardFormPage";

const ResetPassword = () => {
  /* 
  const {email,code,expireIn,sendEmail} = useAppContext()
  const[emailEntered,setEmailEntered] =useState('')
  const[capture_emailEntered,setCapture_emailEntered] =useState('')
  const form = useRef();

  const emailRef = useRef()

const sendOTP = (event) => { 
    event.preventDefault()
    setCapture_emailEntered(`${emailEntered}`)
  let otpData ={email:capture_emailEntered,code:code,expireIn:expireIn}
  //calling function
  sendEmail(otpData )
  //emaiing
  emailjs.sendForm("service_55u9ony","template_xfbz84h", form.current,"UtuJZstWyBB22fTow")
}

  return (
     <form ref={form} onSubmit={sendOTP} >
              <h3> Reset Password </h3>
              <div>
              <label>Email {capture_emailEntered}</label>
              </div>
              <div>
              <input type="email" name="email" size="50" ref={emailRef} onChange = {(event) => setEmailEntered(event.target.value)}/>
              </div>
              <p> 
                <button type="button" className="member-btn" onClick={sendOTP}>Send</button>
                
                 <a href="https://smart-meter-g10-final.onrender.com/login" class="button">Back</a>
              </p>
      </form>
  )*/
const formm = useRef();

  const sendEmaill = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_5zb0tln","template_xfbz84h", formm.current,"UtuJZstWyBB22fTow")
    alert("Message sent Successfully!!");
  };
    return ( <Wrapper>
                    
<form className="form" ref={formm} onSubmit={sendEmaill}>
        <div>
        <label>Name</label>
        </div><div>
      <input type="text" name="user_namee" size="50" />
      </div><div>
      <label>Email</label>
      </div><div>
      <input type="email" name="user_emaill" size="50"/>
      </div><div>
      <label>Message</label>
      </div><div>
      <textarea name="messagee" rows="5" cols="40"/>
      </div><div>
      <input type="submit" value="Send" size="20" className="btn btn-block" />
      </div>
         
      </form>
    </Wrapper>
    
    )
  
}

export default ResetPassword
