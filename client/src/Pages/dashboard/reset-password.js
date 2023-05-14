import React, { useRef } from 'react'
import { useState } from 'react'
import { useAppContext } from '../../Context/appContext'
import emailjs from '@emailjs/browser';

const ResetPassword = () => {
  const {email,code,expireIn,sendEmail} = useAppContext()
  const[emailEntered,setEmailEntered] =useState('')
  const[capture_emailEntered,setCapture_emailEntered] =useState('')
 
const sendOTP = (event) => { 
    event.preventDefault()
    setCapture_emailEntered(`${emailEntered}`)
  let otpData ={email:capture_emailEntered,code:code,expireIn:expireIn}
  //calling function
  sendEmail(otpData )
  //email
    const data = {
      service_id: 'service_gavas3q',
      template_id: 'template_320qyz3',
      user_id: 'bcGEvRdKzla6Iam0E',
      template_params: {
         message: "https://smart-meter-g10-final.onrender.com/new-password" ,
        user_email: capture_emailEntered ,
      }
    };

    fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          alert('Your mail is sent!');
        } else {
          throw new Error('Oops... ' + response.statusText);
        }
      })
      .catch(error => {
        alert(error);
      });
  };
  return (
      <form onSubmit={sendOTP} >
              <h3> Reset Password </h3>
              <div>
              <label>Email {capture_emailEntered}</label>
              </div>
              <div>
              <input type="email" name="email" size="50" onChange = {(event) => setEmailEntered(event.target.value)}/>
              </div>
              <p> 
                <button type="button" className="member-btn" onClick={sendOTP}>Send</button>
                
                 <a href="https://smart-meter-g10-final.onrender.com/login" class="button">Back</a>
              </p>
      </form>
  )
}

export default ResetPassword
