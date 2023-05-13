import React, { useRef } from 'react'
import axios from 'axios'

const ResetPassword = () => {
       const emailRef = useRef()
       const sendOTP = async() => {
          try {
            let url = 'https://smart-meter-g10-final.onrender.com/email-send'
            let options = {
              method:'POST',
              url:url,
              data:{email:emailRef.current.value}
            }
            let response = await  axios(options)
            let record = response.data
            if(record.statusText =='Success'){

                alert('Email Sent') 
            }else{
                    alert('Error Email Not Sent!!') 
            }
          } catch (error) {
               alert('Error Something went wrong!!') 
          }
       }
  return (
      <form >
              <h3> Reset Password </h3>
              <div>
              <label>Email</label>
              </div>
              <div>
              <input type="email" name="email" size="50" ref={emailRef}/>
              </div>
              <p> 
                <button type="button" className="member-btn" onClick={sendOTP}>Send</button>
                
                 <a href="https://smart-meter-g10-final.onrender.com/login" class="button">Back</a>
              </p>
      </form>
  )
}

export default ResetPassword
