import { useState } from "react";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Query = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_gavas3q","template_2jx5wps", form.current,"bcGEvRdKzla6Iam0E")
    alert("Message sent Successfully!!");
  };
    return ( <Wrapper>
                    
<form className="form" ref={form} onSubmit={sendEmail}>
        <div>
        <label>Name</label>
        </div><div>
      <input type="text" name="user_name" size="50" />
      </div><div>
      <label>Email</label>
      </div><div>
      <input type="email" name="user_email" size="50"/>
      </div><div>
      <label>Message</label>
      </div><div>
      <textarea name="message" rows="5" cols="40"/>
      </div><div>
      <input type="submit" value="Send" size="20" className="btn btn-block" />
      </div>
         
      </form>
    </Wrapper>
    
    )
}

export default Query
