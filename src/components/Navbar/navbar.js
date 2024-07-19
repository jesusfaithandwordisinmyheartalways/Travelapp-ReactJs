


import React from "react";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";



const LogOut = () => {
    const navigate = useNavigate();
    navigate('/login')
    
}


const Navbar = () => {
  
        return (
            <>

            <nav className="Nav-Container">

                <div className="Nav-Wrapper">
               
                <div className="nav-title">
                   <div> <h3>International Travel Land</h3></div>
                </div>

                <div  className="nav-title-one">
                   <Link to="/welcome" className="home-link"><div>Home</div></Link>
                </div>


                <div className="nav-title-two">
                    <div>
                        <div className="nav-link-text">Australia</div>
                        </div>

                             <div className="aus-nav">
                                 <div className="aus-navbar-wrapper">
                                   <Link to='/adelaide' className="links"><div className="aus-nav-link">Adelaide</div></Link>
                                    <Link to='/brisbane' className="links"><div className="aus-nav-link">Brisbane</div></Link>
                                    <Link to='/sydney' className="links"><div className="aus-nav-link">Sydney</div></Link>
                                </div>
                         </div>

                        </div>



                        <div className="nav-title-three">
                             <div> 
                             <div className="nav-link-text-two">Spain</div>
                             </div>  

                             <div className="aus-nav-two">
                                 <div className="aus-navbar-wrapper-two">
                                   <Link to='/barcelona' className="links"><div className="aus-nav-link">Barcelona</div></Link>
                                    <Link to='/madrid' className="links"><div className="aus-nav-link">Madrid</div></Link>
                                    <Link to='/seville' className="links"><div className="aus-nav-link">Seville</div></Link>
                                </div>
                         </div>

                                                          

                        </div>

                    
                       
                       <div className="nav-title-four">
                       <div>
                       <div className="nav-link-text-three">England</div>
                        </div>

                        <div className="aus-nav-three">
                                 <div className="aus-navbar-wrapper-three">
                                   <Link to='/liverpool' className="links"><div className="aus-nav-link">Liverpool</div></Link>
                                    <Link to='/london' className="links"><div className="aus-nav-link">London</div></Link>
                                    <Link to='/manchester' className="links"><div className="aus-nav-link">Manchester</div></Link>
                                </div>
                         </div>

                       </div>

                       <div className="nav-title-five">
                       <Link to="/login" className="log-out-link"><div>Log Out</div></Link>

                        
                       </div>
                
                    </div>

                
            </nav>





            




            </>
        )


}


export default Navbar