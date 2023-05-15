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
const sendOTP = (event) => { 
    event.preventDefault()
    setCapture_emailEntered(`${emailEntered}`)
  let otpData ={email:capture_emailEntered,code:code,expireIn:expireIn}
  //calling function
  sendEmail(otpData )

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
  )*/
 const sec_form = useRef();

  const sendE = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_jaq4qlp","template_ltc29pd", sec_form.current,"bcGEvRdKzla6Iam0E")
    .then(
      (result) => {
        alert("Message Sent Successfully");
        console.log(result.text);
      },
      (error) => {
        alert("Error!! Message Not Sent");
        console.log(error.text);
      }
    );
  };
    return ( <Wrapper>
                    
<form className="form" ref={sec_form} onSubmit={sendE}>
        <div>
        <label>Name</label>
        </div><div>
      <input type="text" name="name" size="50" />
      </div><div>
      <label>Email</label>
      </div><div>
      <input type="email" name="email" size="50"/>
      </div><div>
      <label>Message</label>
      </div><div>
      <textarea name="user_message" rows="5" cols="40"/>
      </div><div>
      <input type="submit" value="Send" size="20" className="btn btn-block" />
      </div>
         
      </form>
    </Wrapper>
    
    )

}

export default ResetPassword
