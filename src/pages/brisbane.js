

import React from "react";
import '../components/brisbane/brisbane.css';
import Navbar from "../components/Navbar/navbar";
import BrisbaneCity from '../images/brisbane  australia city.jpg';
import BrisbaneParklands from '../images/Brisbane australia parklands.jpg';
import BrisbaneJobMarket from '../images/Brisbane australia job.png';
import BrisbaneArts from '../images/Brisbane australia arts.jpg';
import BrisbaneCulture from '../images/Brisbaneaustraliaculture.jpg';
import BrisbaneMap from '../images/Brisbane-Australia image map.png'



function Brisbane () {

        return (
            <>


            {/*-------------------------NAVBAR------------------------*/}

            <Navbar />
            
            
            
            
            
            {/*-------------------------CONTENT------------------------*/}

                <div className="Brisbane-Header">
                    <div className="Brisbane-Wrapper">

                        <div className="brisbane-content-two">
                            <div className="brisbane-text"><div><h3>Visit Brisbane</h3></div></div>
                        </div>

                        <div className="brisbane-content">
                            <div><img src={BrisbaneCity}></img></div>
                        </div>
                        
                    </div>
                </div>
                
                
                
                
                
                
                
                 {/*-------------------------ABOUT CONTENT------------------------*/}

                 <div className="Brisbane-About-Container">

                    <div className="Brisbane-About-Wrapper">

                        <div className="brisbane-content-three">
                            <div><h3>About Brisbane</h3></div>
                                <hr className="brisbane-underline-text" />
                        </div>

                            <div className="brisbane-about-image">
                                <div><img src={BrisbaneMap}></img></div>
                            </div>
                      

                            <div className="Brisbane-about-text"><p>Brisbane, Australia, is a vibrant city that seamlessly blends culture,
                             arts, and a thriving job market. The city is known for its lively arts scene,
                              with the Queensland Cultural Centre housing the Queensland Art Gallery, 
                              Gallery of Modern Art (GOMA), and the Queensland Performing Arts Centre (QPAC), 
                              offering a rich array of visual and performing arts. Brisbane's cultural calendar
                               is packed with events like the Brisbane Festival and the Brisbane Writers Festival,
                                celebrating creativity and literary talent. The city's economy is robust and diverse, 
                                with strong job markets in sectors such as finance, technology, education, 
                                and healthcare, attracting professionals from across the globe. Brisbane’s 
                                friendly atmosphere, coupled with its dynamic cultural and economic opportunities,
                             makes it a desirable destination for both visitors and residents.</p></div>


                    </div>


                        <div className="brisbane-parkland-wrapper">
                            <div><h3> Parklands</h3></div>
                        </div>


                    <div className="Brisbane-About-Wrapper-Two">

                        <div className="brisbane-parkland-image">
                            <div><img src={BrisbaneParklands}></img></div>
                        </div>

                        <div className="brisbane-parkland-content">
                            <div><p>Brisbane is home to an array of beautiful parklands that provide a 
                            serene escape within the bustling city. South Bank Parklands,
                             situated along the Brisbane River, is a lush urban oasis featuring landscaped gardens,
                              walking paths, and the iconic Streets Beach, a man-made swimming beach.
                               The parklands host cultural and community events, making it a vibrant gathering spot 
                               for both locals and visitors. The expansive Roma Street Parkland is renowned for 
                               its diverse themed gardens, striking water features, and tranquil lakes,
                                offering a peaceful retreat in the heart of the city. Additionally,
                                 the City Botanic Gardens, Brisbane’s oldest public park,
                                  boasts a rich collection of tropical plants, historic trees,
                                   and scenic river views. These parklands not only enhance Brisbane’s
                                    natural beauty but also provide recreational spaces for picnics, sports,
                             and leisurely strolls, contributing to the city's high quality of life.</p></div>
                        </div>




                    </div>


                        <div className="brisbane-job-market">
                            <div><h3>Job Market</h3></div>
                        </div>

                        <div className="Brisbane-About-Wrapper-Three">
                            <div className="brisbane-job-market-content">
                                <div><img src={BrisbaneJobMarket}></img></div>
                            </div>

                            <div className="brisbane-job-market-content-two">
                                <div><p>Brisbane's job market is robust and continually growing, 
                                supported by a diverse and dynamic economy. The city is a major hub for 
                                finance and technology, with numerous startups and established companies driving 
                                innovation and economic growth. Brisbane also has a strong presence in the 
                                education sector, home to reputable institutions like the University of Queensland
                                 and Queensland University of Technology, which contribute to a skilled workforce.
                                  Healthcare is another significant sector, with major hospitals and research facilities
                                   offering numerous employment opportunities. Additionally,
                                    Brisbane's strategic location and infrastructure make it an attractive destination 
                                    for businesses and professionals, 
                                fostering a competitive and vibrant job market.</p></div>
                            </div>


                        </div>


                        <div className="brisbane-arts">
                            <div><h3>Arts</h3></div>
                        </div>


                        <div className="Brisbane-About-Wrapper-Four">

                            <div className="brisbane-arts-image">
                                <div><img src={BrisbaneArts}></img></div>
                            </div>

                            <div className="brisbane-arts-content">
                                <div><p>The arts scene in Brisbane is both rich and varied, making it a
                                 key cultural destination in Australia. The Queensland Cultural Centre is the 
                                 city's artistic hub, featuring the Queensland Art Gallery and Gallery of Modern Art 
                                 (GOMA), which host impressive collections of contemporary and historical artworks.
                                  The Queensland Performing Arts Centre (QPAC) offers a diverse range of performances,
                                   from ballet and opera to theater and concerts, attracting both local and international
                                    talents. Street art and public sculptures add a creative flair to the urban landscape, and events like the Brisbane Writers Festival and the Brisbane International Film Festival showcase the city’s commitment to literary and cinematic arts. This vibrant arts scene not only enhances the cultural fabric of Brisbane 
                                but also provides ample opportunities for artists and art enthusiasts alike</p></div>
                            </div>




                        </div>


                        <div className="Brisbane-Australia-Culture">
                            <div><h3>Culture</h3></div>
                        </div>

                        <div className="Brisbane-About-Wrapper-Five">

                            <div className="Brisbane-Culture-Image">
                                <div><img src={BrisbaneCulture}></img></div>
                            </div>


                            <div className="Brisbane-Culture-Content">
                                <div><p> Brisbane, Australia, is renowned for its dynamic and inclusive
                                 cultural scene that reflects the city's youthful and diverse spirit.
                                  The city's cultural heartbeat is evident in its lively neighborhoods,
                                   such as Fortitude Valley, known for its vibrant nightlife, eclectic music venues,
                                    and trendy cafes. Brisbane's cultural calendar is filled with festivals and events,
                                     including the Brisbane Festival, which transforms the city with performances, 
                                     light shows, and public art installations. The city's multiculturalism 
                                     is celebrated through events like Paniyiri Greek Festival and the Asia
                                      Pacific Triennial of Contemporary Art,
                                 highlighting Brisbane’s rich cultural diversity and community spirit.</p></div>
                            </div>


                        </div>





                 </div> {
                    
                    
                    
                    
                    
                    
                    /*-------------------------FOOTER CONTENT------------------------*/}

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



export default Brisbane