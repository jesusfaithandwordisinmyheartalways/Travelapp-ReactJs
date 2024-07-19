


import React from "react";
import Navbar from "../components/Navbar/navbar";
import SevilleMap from '../images/seville spain image map.png';
import SevilleCity from '../images/seville spain city.png';
import '../components/ seville/ seville.css';
import SevilleArchitecture from '../images/seville spain Architecture .jpg';
import SevilleMonuments from '../images/seville spain Monuments.jpg';
import SevilleFlamenco from '../images/seville spain Flamenco.jpg';
import SevilleCulture from '../images/seville spain culture.png'




function Seville () {


    return (
        <>

            <Navbar />



            <div className="Seville-Header">
            <div className="Seville-Wrapper">

        <div className="seville-content-two">
            <div className="seville-text">
                <div><h3>Visit Seville</h3></div>
            </div>
        </div>

        <div className="seville-content">
            <div><img src={SevilleCity} alt="Seville City"></img></div>
        </div>
        
    </div>
</div>

{/*-------------------------ABOUT CONTENT------------------------*/}

<div className="Seville-About-Container">

    <div className="Seville-About-Wrapper">

        <div className="seville-content-three">
            <div><h3>About Seville</h3></div>
            <hr className="seville-underline-text" />
        </div>

        <div className="seville-about-image">
            <div><img src={SevilleMap} alt="Seville City Map"></img></div>
        </div>
        
        <div className="Seville-about-text">
            <p>Seville, Spain, is a city renowned for its stunning architecture,
             historic monuments, and passionate flamenco culture. The city's architectural beauty
              is epitomized by the Seville Cathedral, the largest Gothic cathedral in the world, and the Giralda,
               its iconic bell tower offering breathtaking views of the city. The Real Alcázar, a magnificent royal
                palace with intricate Mudéjar architecture and lush gardens, further showcases Seville's
                 rich architectural heritage. Seville is also home to the Plaza de España, 
                 a grand semi-circular plaza adorned with ornate tile work and a picturesque canal. 
                 The city is the beating heart of flamenco, with numerous tablaos and annual festivals where t
                 he vibrant dance and music come alive, reflecting the deep cultural roots and emotional intensity 
                 of Andalusian tradition. These elements combine to make Seville a captivating city where history, art,
             and culture are vividly intertwined.
            </p>
        </div>
    </div>

    <div className="seville-parkland-wrapper">
        <div><h3>Architecture</h3></div>
    </div>

    <div className="Seville-About-Wrapper-Two">

        <div className="seville-parkland-image">
            <div><img src={ SevilleArchitecture} alt="Seville Prado Museum"></img></div>
        </div>

        <div className="seville-parkland-content">
            <div><p>Seville, Spain, is a city celebrated for its stunning and diverse architectural styles,
             which reflect its rich historical tapestry. The Seville Cathedral, an awe-inspiring Gothic masterpiece,
              stands as the largest cathedral in the world and houses the tomb of Christopher Columbus. 
              Adjacent to it is the Giralda, originally a minaret converted into a bell tower, 
              offering panoramic views of the city. The Real Alcázar, a royal palace originally
               built as a Moorish fort, exemplifies Mudéjar architecture with its intricate tile work,
                ornate arches, and beautiful gardens. Seville’s Plaza de España, a grand semi-circular
                 complex built for the Ibero-American Exposition of 1929, showcases Renaissance Revival
                  architecture with its expansive tiled alcoves and majestic bridges over a central canal. 
                  These architectural marvels make
             Seville a city where every corner tells a story of its multifaceted past.
            </p></div>
        </div>
    </div>

    <div className="seville-job-market">
        <div><h3>Monuments</h3></div>
    </div>

    <div className="Seville-About-Wrapper-Three">
        <div className="seville-job-market-content">
            <div><img src={SevilleMonuments } alt="Seville El Retiro Park"></img></div>
        </div>

        <div className="seville-job-market-content-two">
            <div><p> Seville is home to an array of remarkable monuments that reflect its 
            rich history and cultural significance. The Seville Cathedral and the Giralda tower 
            dominate the skyline, representing centuries of religious and architectural evolution. 
            The Real Alcázar, a UNESCO World Heritage Site, is a living testament to the city’s Moorish and 
            Christian heritage, with its lush gardens and opulent interiors. The Plaza de España, with its
             grandiose structure and intricate tile work, stands as a symbol of Spanish unity and craftsmanship.
              The Torre del Oro, a historic watchtower on the banks of the Guadalquivir River, offers insights into 
              Seville’s maritime history. These monuments, each with its unique story, 
            contribute to the city's allure as a destination rich in history and grandeur.
            </p></div>
        </div>
    </div>

    <div className="seville-arts">
        <div><h3>Flamenco</h3></div>
    </div>

    <div className="Seville-About-Wrapper-Four">

        <div className="seville-arts-image">
            <div><img src={SevilleFlamenco } alt="Seville Plaza Mayor"></img></div>
        </div>

        <div className="seville-arts-content">
            <div><p>Seville is widely regarded as the heart and soul of flamenco, 
            the passionate and soulful art form that is an integral part of Andalusian culture. The city's vibrant 
            flamenco scene can be experienced in its many tablaos, where talented dancers, singers, and
             guitarists perform with raw emotion and intensity. The annual Seville Flamenco Biennial attracts
              enthusiasts from around the world, showcasing the finest talent in traditional and contemporary flamenco.
               In the neighborhoods of Triana and Santa Cruz, flamenco’s deep roots are palpable, with historic bars 
               and cultural centers preserving and promoting this expressive dance and music. 
               Flamenco in Seville is more than just a performance; it 
            is a profound cultural expression that captures the spirit and history of the city and its people.
            </p></div>
        </div>
    </div>

    <div className="Seville-Australia-Culture">
        <div><h3>Culture</h3></div>
    </div>

    <div className="Seville-About-Wrapper-Five">

        <div className="Seville-Culture-Image">
            <div><img src={SevilleCulture} alt="Seville Culture"></img></div>
        </div>

        <div className="Seville-Culture-Content">
            <div><p> Seville, Spain, is a city brimming with vibrant culture and deep historical roots, 
            offering a rich tapestry of traditions, festivals, and local customs. The city's cultural life is 
            profoundly influenced by its Moorish and Christian heritage, reflected in its stunning architecture
             and grand monuments. Seville's festivals, such as the Feria de Abril and Semana Santa, are integral 
             to its cultural identity, featuring colorful processions, traditional costumes, and lively celebrations 
             that attract visitors from around the world. The city’s tapas bars and lively markets are central to
              its culinary culture, offering a variety of delicious local dishes and creating a social hub for 
              both locals and tourists. Flamenco, with its passionate dance and music, is a cornerstone of 
              Seville’s cultural scene, deeply rooted in the city’s history and celebrated through performances
               and festivals. Seville’s blend of historical grandeur, festive spirit, and artistic expression makes
                it a captivating city where 
            tradition and contemporary life harmoniously coexist.
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


export default Seville