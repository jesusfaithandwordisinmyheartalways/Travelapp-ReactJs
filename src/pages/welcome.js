


import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import '../components/welcome/welcome.css'
import AUS from '../images/ausbanner.jpg'
import Britain from '../images/britain.png';
import Spain from '../images/spain.jpg';
import Global from '../images/global.png'
import LoginHeader from "../components/Loginheader/loginheader";
import Location from '../images/location.jpg';
import Navbar from "../components/Navbar/navbar";
import TravelAbroad from '../images/aboradtravel.jpg';
import Air from '../images/airgif.gif'


const Welcome = () => {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('');
  
    useEffect(() => {
      const storedUserName = localStorage.getItem('client_username');
      const storedPassword = localStorage.getItem('client_password')
      const storedEmail = localStorage.getItem('client_email');
              
  
      if (storedUserName) {
        setUsername(JSON.parse(storedUserName));
      }
      if(storedPassword) {
          setPassword(JSON.parse(storedPassword))
      }
  
      if (storedEmail) {
        setEmail(JSON.parse(storedEmail));
      }
    }, []);
  





    return (

        <>
        
        {/*-------------------------------- CONTENT HEADER-------------------------------------------*/}

            <LoginHeader />
            
            
            
            {/*-------------------------------- CONTENT TWO-------------------------------------------*/}

            <div className="Welcome-Text-Container">
            <div className="welcome-text-wrapper">
              <div><h3>Start Your Journey</h3></div>

                <div><div><p>A Range of Travel Bucket List Destinations </p></div></div>

            </div>
                
            </div>


                <Navbar />
                
                
                
                
                
                 {/*-------------------------------- CONTENT ANIMATION  -------------------------------------------*/}
                
                
                    <div className="Animation-Container"> 

                       <div className="Animation-Wrapper">

                          <div><img src={Air}></img></div>
                         



                       </div>
                      
                    </div>
                
                
                
                
                
                
                {/*-------------------------------- ABROAD CONTENT-------------------------------------------*/}

                <div className="Abroad-Container">

                <div className="Abroad-Wrapper">

                    <div className="abroad-content">
                        <div><h3>About Us- International Travel Land</h3></div>
                        <div><img src={TravelAbroad}></img></div>

                    </div>

                    <div className="abroad-content">
                        <div><p>International travel opens doors to a myriad of enriching
                         experiences and unparalleled rewards, offering a deeper understanding of diverse people, cultures,
                          business landscapes, and environments. England, with its rich history and vibrant modernity,
                           presents travelers with the chance to explore centuries-old architecture, engage with locals 
                           in charming pubs, and immerse themselves in the country's robust literary and artistic heritage.
                            Spain, on the other hand, dazzles with its passionate flamenco dances, delectable cuisine, 
                            and awe-inspiring landmarks like the Sagrada Familia and Alhambra. 
                            Each region in Spain has its unique charm, from the bustling streets of Madrid to 
                            the sun-kissed beaches 
                        of Costa del Sol, inviting travelers to experience a blend of tradition and contemporary life.</p></div>
                        <div><p>Australia offers a contrast with its stunning natural landscapes, 
                        from the iconic Sydney Opera House to the Great Barrier Reef, and a laid-back yet vibrant cultural scene. 
                        The country's diverse ecosystems, ranging from the Outback to tropical rainforests,
                         provide endless opportunities for adventure and exploration. 
                         Interacting with Australians and experiencing their friendly, open culture enhances the travel experience,
                          offering insights into a society known for its innovation and environmental consciousness.
                           Whether it's building business connections in London's financial district, savoring tapas in Barcelona,
                            or snorkeling in the pristine waters off the Australian coast, international travel to 
                        these destinations promises to broaden horizons, foster personal growth, and create lasting memories.</p></div>

                    </div>



                </div>



                </div>







                   
                   
                    {/*-------------------------------- CONTENT THREE-------------------------------------------*/}
                
                <div className="Container-Three">
                    <div className="Wrapper-Three">

                    <div><div><h3>Why Rely on Us</h3></div></div>
                    <div><p>The Goldest Travel Moments in life is a departure in great landmarks</p></div>

                    </div>

                    <div className="Wrapper-Four">

                        <div className="wrapper-four-content">
                        <div></div>
                        </div>

                        <div className="wrapper-four-content-two">
                            <div></div>
                        </div>

                     

                           <div className="wrapper-four-content-white">
                           <div><img src={Location}></img></div>
                           <div><div><h3>Beautiful Places</h3></div></div>
                           <div><p>Places beauty and appearance attracts the visitors from around the world.
                           </p></div>
                       </div>

                        <div className="wrapper-four-content-white">
                            <div><img src={Global}></img></div>
                            <div><div><h3>Passionate Travel</h3></div></div>
                            <div><p>People who love to travel embraces the information on
                             locations that highly visited among others.</p></div>
                        </div>

                        <div className="wrapper-four-content-three">
                            <div>

                            </div>
                        </div>


                    </div>




                </div>
                
                
                
                
                
                
                
                











        {/*-------------------------------- FOOTER-------------------------------------------*/}


                <div className='Welcome-Footer-Container'>
            <div className='Welcome-Footer-Wrapper'>
  
                <div className='welcome-footer-text'><h3>International Travel Land</h3></div>
  
                <div className='welcome-footer-text-two'>
                <div>The content in this website is not travel advice and it’s intended for informational and educational purposes only.</div>
                </div>
  
                <div className='welcome-footer-text-three'>
                  <div><span>&copy; 2024 International Travel Land </span></div>
                </div>
  
  
            </div>
          </div>
        </>
    )
}









export default Welcome
