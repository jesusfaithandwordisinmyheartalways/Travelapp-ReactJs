




import React from "react";
import '../components/madrid/madrid.css'
import Navbar from "../components/Navbar/navbar";
import MadridCity from '../images/madrid spain city.png';
import MadridCityMap from '../images/madrid spain city map.png';
import MadridPradoMuseum from '../images/madrid spain Prado Museum.jpg';
import MadridElRetiroPark from '../images/madrid spain El Retiro Park.jpg';
import MadridPlazaMayor from '../images/madrid spain Plaza Mayor.jpg';
import MadridCulture from '../images/madrid spain people.jpg'



function Madrid () {


    return (
        <>

        <Navbar />




        <div className="Madrid-Header">
    <div className="Madrid-Wrapper">

        <div className="madrid-content-two">
            <div className="madrid-text">
                <div><h3>Visit Madrid</h3></div>
            </div>
        </div>

        <div className="madrid-content">
            <div><img src={MadridCity}></img></div>
        </div>
        
    </div>
</div>

{/*-------------------------ABOUT CONTENT------------------------*/}

<div className="Madrid-About-Container">

    <div className="Madrid-About-Wrapper">

        <div className="madrid-content-three">
            <div><h3>About Madrid</h3></div>
            <hr className="madrid-underline-text" />
        </div>

        <div className="madrid-about-image">
            <div><img src={MadridCityMap}></img></div>
        </div>
        
        <div className="Madrid-about-text">
            <p>Madrid, Spain, is a city rich in cultural and historical landmarks, highlighted by the
             renowned Prado Museum, the expansive El Retiro Park, and the iconic Plaza Mayor. 
             The Prado Museum, one of the world's premier art institutions, houses an extensive collection
              of European masterpieces, including works by Goya, Velázquez, and El Greco, offering a deep dive 
              into the rich tapestry of European art history. El Retiro Park, a verdant oasis in the heart of the
               city, provides a serene escape with its beautiful gardens, tranquil lake, and grand monuments,
                making it a beloved spot for both relaxation and recreation. The Plaza Mayor, with its stunning 
                architecture and vibrant atmosphere, serves as a central gathering place, hosting markets, 
                festivals, and a variety of cultural events. Together, these landmarks encapsulate Madrid's
                 unique blend of artistic heritage, natural beauty, 
            and lively urban culture, making it a captivating destination for visitors.
            </p>
        </div>
    </div>

    <div className="madrid-parkland-wrapper">
        <div><h3>Prado Museum</h3></div>
    </div>

    <div className="Madrid-About-Wrapper-Two">

        <div className="madrid-parkland-image">
            <div><img src={MadridPradoMuseum}></img></div>
        </div>

        <div className="madrid-parkland-content">
            <div><p> The Prado Museum in Madrid, Spain, is one of the most prestigious art museums in the world,
             renowned for its extensive and impressive collection of European art. Founded in 1819,
              the museum boasts over 8,000 paintings, sculptures, prints, and drawings, spanning from the 
              12th to the early 20th century. Highlights include masterpieces by Spanish artists such as Diego
               Velázquez, Francisco Goya, and El Greco, as well as notable works by Titian, Rubens, and Bosch.
                The museum's pièce de résistance is Velázquez’s "Las Meninas," a painting celebrated for its 
                complex composition and intricate portrayal of perspective. The Prado Museum not only offers an
                 unparalleled journey through the history of European
             art but also serves as a testament to Madrid’s cultural and artistic significance.
            </p></div>
        </div>
    </div>

    <div className="madrid-job-market">
        <div><h3>El Retiro Park</h3></div>
    </div>

    <div className="Madrid-About-Wrapper-Three">
        <div className="madrid-job-market-content">
            <div><img src={MadridElRetiroPark}></img></div>
        </div>

        <div className="madrid-job-market-content-two">
            <div><p> El Retiro Park, known as "El Parque del Buen Retiro," is a sprawling and lush green 
            space in the heart of Madrid, offering a peaceful retreat from the bustling city. 
            Covering over 125 hectares, the park features beautifully landscaped gardens, tree-lined avenues, 
            and a large central lake where visitors can rent rowboats. Highlights include the stunning Crystal Palace
            , a glass pavilion that hosts contemporary art exhibitions, and the Rosaleda, a rose garden with a variety
             of beautiful blooms. The park is also home to several impressive sculptures and fountains, 
             including the Monument to Alfonso XII, which offers a picturesque view over the lake. El Retiro Park 
             is not only a place for relaxation and leisurely strolls but also a vibrant cultural hub that hosts
              concerts,
             outdoor activities, and seasonal fairs.
            </p></div>
        </div>
    </div>

    <div className="madrid-arts">
        <div><h3>Plaza Mayor</h3></div>
    </div>

    <div className="Madrid-About-Wrapper-Four">

        <div className="madrid-arts-image">
            <div><img src={MadridPlazaMayor}></img></div>
        </div>

        <div className="madrid-arts-content">
            <div><p>The Plaza Mayor is one of Madrid’s most iconic and historically significant landmarks,
             epitomizing the city's architectural beauty and vibrant public life. This grand square, surrounded by
              elegant three-story residential buildings with striking red facades, is steeped in history,
               dating back to its completion in 1619 under the reign of King Philip III, whose statue stands 
               proudly in the center. The Plaza Mayor has been the site of numerous historical events, 
               from royal ceremonies and bullfights to public executions and markets. Today, it is a lively
                gathering place where locals and tourists alike enjoy outdoor cafes, restaurants, and 
                seasonal markets, such as the famous Christmas market. The Plaza Mayor’s charming arcades and 
                vibrant atmosphere make it a must-visit destination that
             captures the essence of Madrid’s social and cultural life.
            </p></div>
        </div>
    </div>

    <div className="Madrid-Australia-Culture">
        <div><h3>Culture</h3></div>
    </div>

    <div className="Madrid-About-Wrapper-Five">

        <div className="Madrid-Culture-Image">
            <div><img src={MadridCulture}></img></div>
        </div>

        <div className="Madrid-Culture-Content">
            <div><p> Madrid, Spain, is a city that pulsates with vibrant culture and a rich historical legacy.
             The city seamlessly blends its traditional Spanish roots with modern cosmopolitan flair. Madrid's
              culture is deeply influenced by its history, evident in its grand architecture, bustling plazas, 
              and world-class museums. The city's cultural calendar is filled with events, including the famous
               San Isidro Festival, which celebrates Madrid's patron saint with parades, music, and traditional dance.
                Flamenco, a passionate and expressive dance, is a cornerstone of Madrid’s cultural identity, with
                 numerous tablaos (flamenco venues) showcasing this art form. Madrid is also a culinary haven,
                  offering everything from traditional tapas in lively bars to gourmet experiences in Michelin-starred 
                  restaurants. The city's neighborhoods, such as the literary quarter of Barrio de las Letras and the
                   bohemian district of Malasaña, each contribute unique cultural experiences, from literary history to 
                   cutting-edge street art. Madrid's vibrant nightlife, with its mix of trendy clubs, historic taverns,
                    and live music venues, further highlights the city's dynamic cultural scene,
             making it a captivating destination for both residents and visitors.
            </p></div>
        </div>
    </div>
</div>








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

export default Madrid