





import React from "react";
import '../components/barcelona/barcelona.css';
import Navbar from "../components/Navbar/navbar";
import BarcelonaCity from '../images/barcelona spain city.png';
import BarcelonaCityMap from '../images/barcelona spain  image map .png';
import BarcelonaArt from '../images/barcelona spain city.png'; 
import BarcelonaGastronomy from '../images/barcelona spain Gastronomy .png';
import BarcelonaSports from '../images/barcelona spain Sports.jpg';
import BarcelonaCulture from '../images/barcelona spain culture.png';


function Barcelona()  {


    return (
        <>

            <Navbar />




            {/*-------------------------CONTENT------------------------*/}

<div className="Barcelona-Header">
    <div className="Barcelona-Wrapper">

        <div className="barcelona-content-two">
            <div className="barcelona-text">
                <div><h3>Visit Barcelona</h3></div>
            </div>
        </div>

        <div className="barcelona-content">
            <div><img src={BarcelonaCity}></img></div>
        </div>
        
    </div>
</div>

{/*-------------------------ABOUT CONTENT------------------------*/}

<div className="Barcelona-About-Container">

    <div className="Barcelona-About-Wrapper">

        <div className="barcelona-content-three">
            <div><h3>About Barcelona</h3></div>
            <hr className="barcelona-underline-text" />
        </div>

        <div className="barcelona-about-image">
            <div><img src={BarcelonaCityMap}></img></div>
        </div>
        
        <div className="Barcelona-about-text">
            <p>Barcelona, Spain, is a city that excels in art, gastronomy, and sports, making it a vibrant and 
            multifaceted destination. The city is a treasure trove of artistic wonders, with iconic works by 
            Antoni Gaudí, such as the Sagrada Familia, Park Güell, and Casa Batlló, showcasing unique and 
            imaginative architecture. The Gothic Quarter and numerous museums, including the Picasso Museum,
             further enrich Barcelona's artistic heritage. Gastronomy in Barcelona is equally impressive, 
             with a culinary scene that blends traditional Catalan cuisine with innovative contemporary dishes. 
             Tapas bars, bustling markets like La Boqueria, and Michelin-starred restaurants offer a feast 
             for the senses. Sports enthusiasts are drawn to Barcelona's passionate sports culture,
              epitomized by the legendary FC Barcelona football club and its home, Camp Nou, one of the 
              largest stadiums in Europe. The city's commitment to sports extends to its hosting of
               international events, extensive cycling paths, and vibrant beach activities. Barcelona's
             excellence in art, food, and sports makes it a captivating city that offers something for everyone.
            </p>
        </div>
    </div>

    <div className="barcelona-parkland-wrapper">
        <div><h3> Art</h3></div>
    </div>

    <div className="Barcelona-About-Wrapper-Two">

        <div className="barcelona-parkland-image">
            <div><img src={BarcelonaArt}></img></div>
        </div>

        <div className="barcelona-parkland-content">
            <div><p>Barcelona, Spain, is a city steeped in artistic brilliance, renowned for its
             extraordinary architecture and vibrant visual arts scene. The city is synonymous with Antoni Gaudí,
              whose masterpieces, such as the awe-inspiring Sagrada Familia, whimsical Park Güell, and the colorful
               Casa Batlló, draw millions of visitors each year. The Gothic Quarter offers a journey through time with
                its medieval buildings and narrow, winding streets. Barcelona is also home to a plethora of museums 
                and galleries, including the Picasso Museum, which houses one of the most extensive collections of 
                artworks by the renowned artist, and the Joan Miró Foundation, dedicated to the works of the surrealist
                 painter. Street art and contemporary installations further enrich the city's dynamic 
            and diverse artistic landscape, making Barcelona a haven for art lovers.
            </p></div>
        </div>
    </div>

    <div className="barcelona-job-market">
        <div><h3>Gastronomy</h3></div>
    </div>

    <div className="Barcelona-About-Wrapper-Three">
        <div className="barcelona-job-market-content">
            <div><img src={BarcelonaGastronomy }></img></div>
        </div>

        <div className="barcelona-job-market-content-two">
            <div><p>Barcelona's gastronomy is a delightful fusion of traditional Catalan flavors 
            and cutting-edge culinary innovation. The city's vibrant food scene is anchored by bustling 
            markets like La Boqueria, where fresh, local produce and artisanal goods abound. Tapas bars are
             ubiquitous, offering a variety of small, flavorful dishes perfect for sharing, while seafood
              restaurants serve up the freshest catches from the Mediterranean. Barcelona is also home to 
              several Michelin-starred establishments, where chefs push the boundaries of modern cuisine. 
              Whether indulging in a hearty paella, savoring a plate of Iberian ham, or enjoying the simplicity 
              of pan con tomate, Barcelona’s culinary offerings are a feast for the senses,
             reflecting the region’s rich agricultural heritage and creative spirit.
            </p></div>
        </div>
    </div>

    <div className="barcelona-arts">
        <div><h3>Sports</h3></div>
    </div>

    <div className="Barcelona-About-Wrapper-Four">

        <div className="barcelona-arts-image">
            <div><img src={BarcelonaSports }></img></div>
        </div>

        <div className="barcelona-arts-content">
            <div><p>Barcelona excels in sports, with a fervent passion that permeates the city's culture.
             The legendary FC Barcelona football club, known as Barça, is a source of immense pride, with its home 
             ground, Camp Nou, being one of the largest and most iconic stadiums in the world. The city's commitment
              to sports extends beyond football; it was the host of the 1992 Summer Olympics, which left a lasting 
              legacy of world-class sports facilities and a robust infrastructure for various athletic activities. 
              Barcelona also promotes an active lifestyle with its extensive network of cycling paths, beachfront 
              activities, and public parks offering spaces for jogging, yoga, and other fitness pursuits.
               The city's sporting spirit is not only about professional excellence but also about fostering 
            community and encouraging active participation among residents and visitors alike.
            </p></div>
        </div>
    </div>

    <div className="Barcelona-Australia-Culture">
        <div><h3>Culture</h3></div>
    </div>

    <div className="Barcelona-About-Wrapper-Five">

        <div className="Barcelona-Culture-Image">
            <div><img src={BarcelonaCulture}></img></div>
        </div>

        <div className="Barcelona-Culture-Content">
            <div><p> Barcelona's culture is a vibrant tapestry woven from its rich history, diverse 
            influences, and spirited lifestyle. The city's Catalan heritage is deeply ingrained in its
             identity, visible in its language, traditions, and festive celebrations like La Mercè and Sant 
             Jordi's Day. Barcelona’s cultural scene is dynamic, with a plethora of theaters, music venues, and 
             festivals that showcase everything from classical performances at the Gran Teatre del Liceu to 
             contemporary music at Primavera Sound. The city's neighborhoods each offer unique cultural experiences,
              from the bohemian vibe of Gràcia to the modernist architecture of Eixample. Barcelona's streets are 
              alive with street performers, markets, and outdoor cafes, creating a lively and welcoming atmosphere.
               The city's commitment to preserving its heritage while embracing innovation makes 
            Barcelona a cultural capital that captivates both residents and visitors.
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


export default Barcelona