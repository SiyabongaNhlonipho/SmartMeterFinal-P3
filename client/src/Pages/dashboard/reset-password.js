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
  var templateParams = {
    to: '220039943@stu.ukzn.ac.za',
    message: "https://smart-meter-g10-final.onrender.com/new-password" ,
    user_name: 'Siyabonga' ,
    user_email: capture_emailEntered ,

};
 
// Initialize the emailjs service with your user ID
emailjs.init('bcGEvRdKzla6Iam0E');

emailjs.send('service_gavas3q', 'template_320qyz3', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });

}

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
