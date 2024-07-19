

import React from "react";
import Navbar from "../components/Navbar/navbar";
import '../components/Sydney/sydney.css';
import SydneyMap from '../images/Sydney-Australia image map.png';
import SydneyCity from '../images/Sydney-Australia city.jpg';
import SydneyOperaHouse from '../images/sydney australia Opera House.png';
import SydneyBeaches from '../images/sydney australia Iconic Beaches.png';
import SydneyZoo from '../images/sydney australia Amazing Zoos.jpg';
import SydneyCulture from '../images/sydney australia people.png'



function Sydney () {


    return (
        <>

                <Navbar />
            {/*-------------------------CONTENT------------------------*/}

    <div className="Sydney-Header">
        <div className="Sydney-Wrapper">

            <div className="sydney-content-two">
                <div className="sydney-text">
                    <div><h3>Visit Sydney</h3></div>
                </div>
            </div>

            <div className="sydney-content">
                <div><img src={SydneyCity}></img></div>
            </div>
            
        </div>
    </div>
    
    {/*-------------------------ABOUT CONTENT------------------------*/}

    <div className="Sydney-About-Container">

        <div className="Sydney-About-Wrapper">

            <div className="sydney-content-three">
                <div><h3>About Sydney</h3></div>
                <hr className="sydney-underline-text" />
            </div>

            <div className="sydney-about-image">
                <div><img src={SydneyMap}></img></div>
            </div>
            
            <div className="Sydney-about-text">
                <p>Sydney, Australia, is a city that effortlessly combines architectural marvels,
                 world-class attractions, and stunning natural beauty. The Sydney Opera House stands as an iconic symbol
                  of the city, renowned for its unique sail-like design and its role as a premier venue for performing arts,
                   hosting a wide range of concerts, theater productions, and cultural events. Sydney is also home to
                    amazing zoos, such as Taronga Zoo, which offers breathtaking views of Sydney Harbour and houses
                     a diverse array of wildlife from around the globe, providing both entertainment and education
                      to visitors. The city's iconic beaches, including Bondi Beach and Manly Beach, attract surfers, 
                      sunbathers, and tourists alike, offering golden sands, crystal-clear waters, and vibrant coastal 
                      atmospheres. Together,
                 these attractions make Sydney a must-visit destination, blending urban sophistication with natural wonders.
                </p>
            </div>
        </div>

        <div className="sydney-parkland-wrapper">
            <div><h3> Sydney Opera House</h3></div>
        </div>

        <div className="Sydney-About-Wrapper-Two">

            <div className="sydney-parkland-image">
                <div><img src={SydneyOperaHouse}></img></div>
            </div>

            <div className="sydney-parkland-content">
                <div><p>The Sydney Opera House is an architectural masterpiece and one of the most recognizable
                 landmarks in the world. Located on Bennelong Point in Sydney Harbour, its striking design, 
                 featuring a series of white, sail-shaped shells, makes it a stunning visual centerpiece for the city. 
                 The Opera House is a cultural hub, hosting over 1,500 performances annually, including opera, ballet, 
                 theater, and concerts, drawing millions of visitors from around the globe. Its multiple venues, 
                 including the Concert Hall and the Joan Sutherland Theatre, provide world-class acoustics and settings
                  for a wide range of artistic expressions. The Sydney Opera House not only symbolizes 
                Sydney's vibrant cultural scene but also stands as a testament to innovative design and engineering.
                </p></div>
            </div>
        </div>

        <div className="sydney-job-market">
            <div><h3>Iconic Beaches</h3></div>
        </div>

        <div className="Sydney-About-Wrapper-Three">
            <div className="sydney-job-market-content">
                <div><img src={SydneyBeaches}></img></div>
            </div>

            <div className="sydney-job-market-content-two">
                <div><p>Sydney’s iconic beaches are renowned for their beauty, vibrant atmospheres, 
                and excellent recreational opportunities. Bondi Beach, with its golden sands and powerful surf,
                 is a world-famous destination for surfers, swimmers, and sunbathers. The beach's lively promenade
                  is lined with trendy cafes, shops, and restaurants, making it a hotspot for both locals and tourists.
                   Manly Beach, accessible by a scenic ferry ride from Circular Quay, offers a more relaxed vibe with its
                    gentle waves, perfect for families and novice surfers. Other notable beaches like Coogee, Bronte, 
                    and Palm Beach provide stunning coastal landscapes, rock pools, and scenic walking trails. Sydney’s
                     beaches are not just about the sun and surf; they embody 
                the city’s outdoor lifestyle and provide a perfect escape from urban life.
                </p></div>
            </div>
        </div>

        <div className="sydney-arts">
            <div><h3>Amazing Zoos</h3></div>
        </div>

        <div className="Sydney-About-Wrapper-Four">

            <div className="sydney-arts-image">
                <div><img src={SydneyZoo}></img></div>
            </div>

            <div className="sydney-arts-content">
                <div><p>Sydney is home to some of the world’s most impressive zoos, offering unforgettable experiences
                 for animal lovers and families. Taronga Zoo, situated on the northern shores of Sydney Harbour, 
                 provides a spectacular setting with panoramic views of the city skyline. It houses over 4,000 animals
                  from around the world, including rare and endangered species, and focuses on conservation and education.
                   Visitors can enjoy interactive exhibits, close-up encounters, and daily shows that highlight
                    the importance of wildlife preservation. Featherdale Wildlife Park and the Sydney Zoo in Western 
                    Sydney also offer unique opportunities to see native Australian animals like kangaroos, koalas, 
                    and emus up close. These zoos
                 not only entertain but also educate the public about the importance of biodiversity and animal welfare.
                </p></div>
            </div>
        </div>

        <div className="Sydney-Australia-Culture">
            <div><h3>Culture</h3></div>
        </div>

        <div className="Sydney-About-Wrapper-Five">

            <div className="Sydney-Culture-Image">
                <div><img src={SydneyCulture}></img></div>
            </div>

            <div className="Sydney-Culture-Content">
                <div><p> Sydney, Australia, boasts a vibrant and diverse cultural scene that reflects its status as a
                 global city. The city's rich cultural tapestry is woven from its history, multicultural population,
                  and thriving arts community. Sydney hosts numerous cultural festivals and events throughout the year, 
                  such as the Sydney Festival, Vivid Sydney, and the Sydney Film Festival, which celebrate everything 
                  from music and light to cinema and performance arts. The city is home to world-class museums and 
                  galleries, including the Art Gallery of New South Wales and the Museum of Contemporary Art, 
                  showcasing both international and Australian artists. Sydney’s neighborhoods, such as Newtown and
                   Surry Hills, are known for their bohemian vibe, bustling with independent theaters, live music venues,
                    and eclectic street art. The city's culinary scene is equally diverse, with a plethora of restaurants
                     offering cuisines from around the world, reflecting its multicultural heritage.
                      Sydney's culture is a dynamic blend of tradition and innovation,
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


export default Sydney