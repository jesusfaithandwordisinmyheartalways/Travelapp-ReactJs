


import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Sun from '../images/sun.png'
import Moon from '../images/moon.png';
import Madrid from '../images/madrid.png';
import Sydney from '../images/sydney city.jpg';
import England from '../images/londoncity.jpeg';
import GroupTravel from '../images/grouptravel.png';
import '../components/form/form.css';
import CookieBanner from "../components/CookieBanner/CookieBanner";




const Navbar = () => {
    const icon = document.getElementById('circle-click');
      document.body.classList.toggle('dark-theme');
      if(document.body.classList.contains('dark-theme')) {
          icon.style.right = "10px"
      } else {
          icon.style.right = "40px"
      }
    
  }
  
  const setLocalStorage = (key,value) => {    // set the localStorage for the key & value
        localStorage.setItem(key,JSON.stringify(value) )
  }
  
  
  const Form = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false); // loading is false, means that no loading or processing is happening initially.
    const [error, setError] = useState('');
    const inputRef = useRef(null);
    const formRef = useRef(null);
    const navigate = useNavigate(); // navigate between different routes in a React application.
  
    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, []);
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleConfirmPasswordChange = (event) => {
      setConfirmPassword(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const validateName = () => {
      return /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/.test(name);
    };
  
    const validatePassword = () => {
      return /^(?=.*[A-Z]{3})(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{10,}$/.test(password);
    };
  
    const validateEmail = () => {
      return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.com$/.test(email)
    };
  
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }
      if (!validateName() || !validatePassword() || !validateEmail()) {
        setError('Input fields are incorrect');
        return;
      }
  
      setLoading(true);// indicates that a loading process has started. (e.g., submitting a form
      setError('')
  
      await new Promise((resolve) => setTimeout(resolve, 4000)); // simulates a delay, representing the time it might take to make an API request.
  
      setLocalStorage('client_username', name);
      setLocalStorage('client_password', password);
      setLocalStorage('client_email', email);
  
      formRef.current.reset();
      setName('');
      setPassword('');
      setConfirmPassword('');
      setEmail('');
      setLoading(false); // indicates that the loading process has ended. (e.g., after a form submission is processed).
      navigate('./login');
    };
  
    return (
  
      <>
  
      <CookieBanner />
      <div className={'Header-Container'}>
  
      <div className={'Header-Wrapper'}>
  
              <div className={'header-banner-wrapper'}>
              </div>    
  
      </div>
      <div className='header-banner-text-wrapper'>
                      <div><h3>International Travel Land</h3></div>
                    
                  </div>
  
  
          <div className='toggle-wrapper'>
           
           <div className="sun"><img src={Sun} alt="sun"></img></div>
           <div className="white-circle"><div></div></div>
           <div onClick={Navbar} id="circle-click" className="circle"><div></div></div>
            <div className="moon"><img src={Moon} alt="moon"></img></div>
   
             
           </div>
   
  
  
      </div>
  
  
  
      <div className='Countries-Container'>
          <div className='countries-wrapper'>
              <div className={'countries-content'}>
                  <div><img src={Madrid}></img></div>
                  <div className='countries-text'>Explore Spain</div>
                  <div className='countries-text-two'>Offers a vibrant mix of rich cultural heritage and modern
                   amenities, making it an ideal destination for international travelers. 
                   The city boasts world-class museums, beautiful architecture,
                   and a lively food scene, ensuring a memorable experience for visitors.</div>
              </div>
              <div className={'countries-content'}>
              <div><img src={Sydney}></img></div>
              <div className='countries-text'>Explore Australia</div>
              <div className='countries-text-two'> Captivates international
               travelers with its stunning harbor, iconic landmarks like the
                Sydney Opera House and Harbour Bridge, and beautiful beaches
                 such as Bondi and Manly. The city's vibrant cultural scene,
                  diverse culinary offerings,
               and welcoming atmosphere ensure an unforgettable travel experience.</div>
  
              </div>
              <div className={'countries-content'}>
                  <div><img src={England}></img></div>
                  <div className='countries-text'>Explore England</div>
                  <div className='countries-text-two'>Is a top destination for 
                  international travelers due to its rich history, iconic landmarks like 
                  the Tower of London and Buckingham Palace, and world-class museums 
                  such as the British Museum. The city's diverse cultural scene, bustling
                   markets,
                   and renowned theater district ensure there's something for everyone to enjoy</div>
  
  
              </div>
          </div>
      </div>
  
  
  
  
      
      <div className="Travel-Form-Container">
        <div className="Travel-Form-Wrapper">
          <form onSubmit={handleSubmit} className="user-form" ref={formRef}>
            <div className={'travel-blog-header'}><div><h3>International Travel Land Sign Up</h3></div></div>
            <label>Username</label><br />
            <input onChange={handleNameChange} type="text" className="user-input" value={name} placeholder="Username" ref={inputRef} autoComplete="off" required />
            <div className="name-error-container">
              <div className="name-error-wrapper">
                <span className="name-error" style={{visibility: validateName() ? 'hidden' : 'visible'}}>
                  Must Contain One Uppercase, One Special Character, Min 10 characters
                </span>
              </div>
            </div>
            <label>Password:</label><br />
            <input onChange={handlePasswordChange} type="password" className="user-password" value={password} placeholder="Password" autoComplete="off" required /><br />
            <div className="password-error-container">
              <div className="password-error-wrapper">
                <span className="password-error" style={{visibility: validatePassword()? 'hidden' : 'visible'}}>
                  Must Contain 3 Uppercase, One Special Character, Min 10 characters
                </span>
              </div>
            </div>
            <label>Confirm Password</label><br />
            <input onChange={handleConfirmPasswordChange} type="password" value={confirmPassword} placeholder="Confirm Password" autoComplete="off" required /><br />
            <label>Email</label><br />
            <input type="email" onChange={handleEmailChange} value={email} placeholder="Email" autoComplete="off" required />
            <div className="email-error-container">
              <div className="email-error-wrapper">
                <span className="email-error" style={{visibility: validateEmail() ? 'hidden' : 'visible'}}>
                  Must Contain Valid Email Address
                </span>
              </div>
            </div>
            <input disabled={loading} value={loading? 'Submitting' : 'Submit'} type="submit" />
                  {error && <div className="error-message">{error}</div>}
          </form>
        </div>
      </div>
  
  
  
          
  
          <div className='Group-Container'>
              <div className='Group-Wrapper'>
  
                  <div className='group-travel'>
                      <div><img src={GroupTravel}></img></div>
                  </div>
  
                  <div className={'group-travel-international'}>
                      <div><h3>Travel Abroad</h3></div>
                      <div><p>International travel broadens your horizons by exposing you to different cultures,
                       languages, and perspectives, fostering greater understanding and empathy. 
                       It offers unique opportunities for personal growth and adventure, 
                       from exploring historical sites to trying new cuisines. Additionally, 
                       traveling internationally can enhance your adaptability 
                      and problem-solving skills, as you navigate unfamiliar environments and situations.</p></div>
  
                      <div><div><button type='button'>Contact US</button></div></div>
                  </div>
  
  
              </div>
  
          </div>
  
  
  
          <div className='Footer-Container'>
            <div className='Footer-Wrapper'>
  
                <div className='footer-text'><h3>International Travel Land</h3></div>
  
                <div className='footer-text-two'>
                <div>The content in this website is not travel advice and it’s intended for informational and educational purposes only.</div>
                </div>
  
                <div className='footer-text-three'>
                  <div><span>&copy; 2024 International Travel Land </span></div>
                </div>
  
  
            </div>
          </div>
  
  
      </>
   
    );
  
    
  };
  
  
  
  
  
  
  
  export default Form;