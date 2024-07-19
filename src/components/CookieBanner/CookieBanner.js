


import React from "react";
import { useState } from "react";
import { useEffect } from "react";



function CookieBanner () {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
       const userConsent = localStorage.getItem('userConsent');
       if(!userConsent) {
           setIsVisible(true)
       }
    }, [])
  
       const setCookie = (value) => {
          localStorage.setItem('user-Consent', value)
       }
  
       const handleAccept = () => {
         setCookie('accepted');
         setIsVisible(false)
       }
  
       const rejectCookie = () => {
         setCookie('rejected');
         setIsVisible(false)
       }
  
       if(!isVisible) return null;
  
  
       return (
           <>
  
           <div className="Cookie-Banner">
             <div className="">
               <p>We use cookies to improve your experience on our site. By using our site, you consent to cookies.{' '}</p>
             </div>
               <button onClick={handleAccept}>Accept</button>
               <button className="btn-reject" onClick={rejectCookie}>Reject</button>
           </div>
           </>
       )
  
  }
  

  export default CookieBanner