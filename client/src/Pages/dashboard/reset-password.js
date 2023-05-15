import React from 'react'
import { useState } from 'react'
import { useAppContext } from '../../Context/appContext'
import nodemailer from 'nodemailer'




const ResetPassword = () => {
  
 
const sendEmailTwo = async (event) => { 

    const {email,code,expireIn,sendEmail} = useAppContext()
    const[emailEntered,setEmailEntered] =useState('')
    const[capture_emailEntered,setCapture_emailEntered] =useState('')

    event.preventDefault()
    setCapture_emailEntered(`${emailEntered}`)
    let otpData ={email:capture_emailEntered,code:code,expireIn:expireIn}
    //calling function
    sendEmail(otpData )

    // Create a Nodemailer transporter
    let transporter = nodemailer.createTransport({
    // Specify your email service provider
    service: 'Gmail',
    auth: {
      user: 'siyabongawarrior@example.com', // Replace with your email address
      pass: 'Nipho3006$', // Replace with your email password
    },
     });

  // Set up email data
  let mailOptions = {
    from: 'siyabongawarrior@example.com',
    to: '220039943@stu.ukzn.ac.za',
    subject: 'Reset Password',
    text: 'Click This Link to Reset Your Password : https://smart-meter-g10-final.onrender.com/new-password',
  };

  // Send the email
  try {
    let info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.log('Error sending email: ' + error);
  }

}

  return (
      <form >
              <h3> Reset Password </h3>
              <div>
              <label>Email {capture_emailEntered}</label>
              </div>
              <div>
              <input type="email" name="email" size="50" onChange = {(event) => setEmailEntered(event.target.value)}/>
              </div>
              <p> 
                <button type="button" className="member-btn" onClick={sendEmailTwo}>Send</button>
                
                 <a href="https://smart-meter-g10-final.onrender.com/login" class="button">Back</a>
              </p>
      </form>
  )
 
}

export default ResetPassword
