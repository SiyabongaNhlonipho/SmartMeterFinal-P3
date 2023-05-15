import React, { useState } from 'react';
import { useAppContext } from '../../Context/appContext';
import nodemailer from 'nodemailer';

const ResetPassword = () => {
    const { email, code, expireIn, sendEmail } = useAppContext();
    const [emailEntered, setEmailEntered] = useState('');
    const [capture_emailEntered, setCapturedEmail] = useState('');

    useEffect(()=>{
            sendEmail()
   }, [])

  const sendOTP = async (event) => {
    
    event.preventDefault();
    setCapturedEmail(`${emailEntered}`)
    const otpData = { email: capture_emailEntered, code, expireIn };

    // Call the mailer function here
   
  const mailer = (email) =>{

  // creating reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
      user: 'siyabongawarrior@example.com', // generated ethereal user
      pass: 'Nipho3006$', // generated ethereal password
    },
  });

  // send mail with defined transport object
  var mailOptions = ({
    from: 'siyabongawarrior@example.com', 
    to: email, 
    subject: "Reset Password", 
    text: "click this link to reset your password https://smart-meter-g10-final.onrender.com/new-password ", 
  
  });

  transporter.sendMail(mailOptions, (error, info)=>{
     if(error){
      console.log(error)
    }else{
      console.log('Email sent' + info.response)
    }
  })

}
    mailer(capture_emailEntered);
    sendEmail(otpData)
    
  };

  return (
    <form onSubmit={sendOTP}>
      <h3>Reset Password</h3>
      <div>
        <label>Email {emailEntered}</label>
      </div>
      <div>
        <input type="email" name="email" size="50" onChange={(event) => setEmailEntered(event.target.value)} />
      </div>
      <p>
        <button type="submit" className="member-btn">Send</button>
        <a href="https://smart-meter-g10-final.onrender.com/login" className="button">Back</a>
      </p>
    </form>
  );
};

export default ResetPassword;




