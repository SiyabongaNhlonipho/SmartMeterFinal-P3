import React from 'react'

const ResetPassword = () => {

  return (
      <form >
              <h3> Reset Password </h3>
              <div>
              <label>Email</label>
              </div>
              <div>
              <input type="text" name="user_name" size="50" />
              </div>
              <p> 
                <button type="button" className="member-btn">Send</button>
                
                 <a href="https://smart-meter-g10-final.onrender.com/login" class="button">Back</a>
              </p>
      </form>
  )
}

export default ResetPassword
