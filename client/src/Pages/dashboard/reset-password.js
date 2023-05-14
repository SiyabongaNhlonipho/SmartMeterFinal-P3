import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { useAppContext } from '../../Context/appContext'
import emailjs from '@emailjs/browser';

const ResetPassword = () => {
  const {email,code,expireIn,sendEmail,Allnames,AlllastNames,Allemails,Alllocations,getData} = useAppContext()
  const[emailEntered,setEmailEntered] =useState('')
  const[capture_emailEntered,setCapture_emailEntered] =useState('')
  //const emailRef = useRef()
  const form = useRef();


  useEffect(()=>{
             getData()
            getAllUsers ()
   }, [])
    

const sendOTP = (event) => { 
    event.preventDefault()
    setCapture_emailEntered(`${emailEntered}`)
   // let otpData;
    /*for (let i =0 ; i< Allemails.length; i++){
      
      if(Allemails[i]===emailEntered){

           otpData ={email:capture_emailEntered,code:code,expireIn:expireIn}
       emailjs.sendForm("service_55u9ony","template_xfbz84h", form.current,"UtuJZstWyBB22fTow")
          alert("Message sent Successfully!!");
      }
    }*/
   let otpData ={email:capture_emailEntered,code:code,expireIn:expireIn}
       emailjs.sendForm("service_55u9ony","template_xfbz84h", form.current,"UtuJZstWyBB22fTow")
          alert("Message sent Successfully!!");
       //calling function
      sendEmail(otpData )
}

  return (
     <form onSubmit={sendOTP} ref={form}>
              <h3> Reset Password </h3>
              <div>
              <label>Email </label>
              </div>
              <div>
              <input type="email" name="user_email" size="50" /*ref={emailRef}*/ onChange = {(event) => setEmailEntered(event.target.value)}/>
              </div>
              <p> 
                <button type="button" className="member-btn" onClick={sendOTP}>Send</button>
                
                 <a href="https://smart-meter-g10-final.onrender.com/login" class="button">Back</a>
              </p>
      </form>
     
  )
}

export default ResetPassword
