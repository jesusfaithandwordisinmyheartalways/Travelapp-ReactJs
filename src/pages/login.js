

import React from "react";

import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../components/login/login.css'



const getLocalStorage = (key) => {          // grab the local storage from the form.js. 
  const savedStorage = localStorage.getItem(key);
  return savedStorage ? JSON.parse(savedStorage) : '';
};


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);    //means that no loading or processing is happening initially.
  const navigate = useNavigate();



  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // indicating that a loading process has started. (e.g., submitting a form

    const savedUserName = getLocalStorage('client_username'); // grab the local storage already stored in the form.js
    const savedPassword = getLocalStorage('client_password');
    const savedEmail = getLocalStorage('client_email');

    if (username === savedUserName && password === savedPassword && email === savedEmail) {
      navigate('/welcome');
    } else {
      setError('Invalid login');
    }

    await new Promise((response) => setTimeout(response, 4000))

    setLoading(false); // indicates that the loading process has ended. (e.g., after a form submission is processed).
    setError('');
  };

  return (
    <>

     


<div className="Login-Container">
      <div className="Login-Wrapper">
        <form onSubmit={handleSubmit} className="form-login-wrapper">
          <div className="sign-in-header"><h3>Login</h3></div><br />
          <label>Username</label><br />
          <input onChange={(event) => setUsername(event.target.value)} type="text" value={username} placeholder="Username" autoComplete="off" required /><br />
          <label>Password</label><br />
          <input onChange={(event) => setPassword(event.target.value)} type="password" value={password} placeholder="Password" autoComplete="off" required /><br />
          <label>Email</label><br />
          <input onChange={(event) => setEmail(event.target.value)} type="email" value={email} placeholder="Email" autoComplete="off" required /><br />
          <input type="submit" value={loading ? 'Submitting' : 'Submit'} disabled={loading} /><br />
                {error && <div className="error-message">{error}</div>}
        </form>
      </div>
    </div>
    </>

    


  
  );
};

export default Login;