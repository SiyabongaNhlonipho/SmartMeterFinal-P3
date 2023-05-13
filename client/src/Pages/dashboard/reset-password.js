import React from 'react'

const ResetPassword = () => {

  const goBack = (e) => {
    e.preventDefault();
       navigate("https://smart-meter-g10-final.onrender.com/login");
  };
  return (
      <form className="form">
              <h3>To reset password Enter Your :</h3>
              <div>
              <label>Email</label>
              </div>
              <div>
              <input type="text" name="user_name" size="50" />
              </div>
              <p>
                <button type="button" className="member-btn">Send</button>
                <button type="button" onClick={goBack} className="member-btn">Back</button>
              </p>
      </form>
  )
}

export default ResetPassword
