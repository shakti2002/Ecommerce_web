// import react, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import './Login.css';


// const Login = () => {
//     const [user, Setuser] = useState({ email: "dd4321@gmail.com", password: "dd4321" });
//     let navigate = useNavigate();
//     const LoginUser = async () => {

//         const response =await axios.post('http://127.0.0.1:5000/login', {
//             user: user,
//         });
        
//         if (response.status == 200) { 
//             //Save And Redirect To Home
//             localStorage.setItem("email", user['email']);
//             navigate('/');
//         } else {
            
//                 alert("Some error occurred .PLease try again !");
            
//         }
//     }

//     const handleChange = (e) => {
//         Setuser({ ...user, [e.target.name]: e.target.value });
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         LoginUser();
//     }
//     return (
//         <div className='outer_box'>
//             <form className='login_container' onSubmit={handleSubmit}>
//                 <h1>Login</h1>
              
//                 <div className='login_row'>
//                     <h4 className='login_email'>Email</h4>
//                     <input type='email' name='email' onChange={handleChange} required />
//                 </div>
//                 <div className='login_row'>
//                     <h4>Password</h4>
//                     <input type='password' name='password' onChange={handleChange} required />
//                 </div>
//                 <button disabled={ user.password.length < 1} >Submit</button>
//             </form>
//         </div>

        
//     );
// }
// export default Login;





import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = ({onLogin}) => {
  const [user, setUser] = useState({ email: 'dd4321@gmail.com', password: 'dd4321' });
  let navigate = useNavigate();

  const LoginUser = async () => {
    const response = await axios.post('https://webecommerce-djxjtucx5-shakti2002s-projects.vercel.app/login', {
      user: user,
    });

    if (response.status === 200) {
      localStorage.setItem('email', user['email']);
      onLogin();
      navigate('/');
     
    } else {
      alert('Some error occurred. Please try again!');
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    LoginUser();
  };

  return (
    <div className="outer_box">
      <form className="login_container" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="login_row">
          <h4 className="login_email">Email</h4>
          <input type="email" name="email" onChange={handleChange} required />
        </div>
        <div className="login_row">
          <h4>Password</h4>
          <input type="password" name="password" onChange={handleChange} required />
        </div>
        <button disabled={user.password.length < 1}>Submit</button>
      </form>
    </div>
  );
};

export default Login;
