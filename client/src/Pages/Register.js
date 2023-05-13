import { useState, useEffect } from "react"
import Wrapper from "../assets/wrappers/RegisterPage";
import { FormRow,Alert } from '../Components';
import { useAppContext } from "../Context/appContext";
import { useNavigate } from "react-router-dom";

// global context and useNavigate later
const initialState = {
  name: "",
  SecretKey: " ",
  email: "",
  password: "",
  isMember: true,
};
// if possible prefer local state
// global state
function Register() {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  const { user,isLoading, showAlert ,displayAlert,setupUser} = useAppContext();
  
  const toggleMember = () => {
  setValues({ ...values, isMember: !values.isMember });
};

const handleChange = (e) => {
  setValues({ ...values, [e.target.name]: e.target.value });
};

const onSubmit = (e) => {
  e.preventDefault();
  const { name, email, password, isMember } = values;
  if (!email || !password || (!isMember && !name)) {
    displayAlert();
    return;
  }
  const currentUser = { name, email, password};
if (isMember) {
  setupUser({currentUser,
             endPoint: 'login',
             alertText: "Login Successful! Redirecting..."});
} 
else if (values.email === "adminsihle@gmail.com" && values.password === "secret") {
useEffect(() => {
    const timeout = setTimeout(() => {
      // 👇️ redirects to an external URL
      window.location.replace('https://smart-meter-g10-final.onrender.com/admin');
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  
} else {
  setupUser({currentUser,
             endPoint: 'register',
             alertText: "User Created! Redirecting..."});
}

};

  useEffect(() => {
      
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>

    <h3>{values.isMember ? "Login" : "Register"}</h3>

        {showAlert && <Alert />}
        {/* name input */}

          {!values.isMember && (
            
            <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
            />

         )}

         {/* email input */}
        <FormRow type= "email" 
                 name ="email" 
                 value={values.email}
                 handleChange={handleChange}
         />{/* password input */}
        <FormRow type= "password" 
                 name ="password" 
                 value={values.password}
                 handleChange={handleChange}
         />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
        submit
        </button>
         
        <p>
            {values.isMember ? "Not a member yet?" : "Already a member?"}

            <button type="button" onClick={toggleMember} className="member-btn">
             {values.isMember ? "Register" : "Login"}
             </button>
             <div>
             <a href="https://smart-meter-g10-final.onrender.com/reset-password" > Forgot password? click here</a>
             </div>
        </p>
      </form>
    </Wrapper>
  );
}
export default Register





