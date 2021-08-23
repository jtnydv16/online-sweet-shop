import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import wall1 from '../resources/wall1.PNG';
import wall2 from '../resources/wall2.PNG';
import wall3 from '../resources/wall3.png';

function Home() {
  return (
    <div>

    <Carousel infiniteLoop autoPlay>
                <div className="image">
                    <img src={wall1} alt="img1"/>
                </div>
                <div>
                    <img src={wall2} alt="img2"/>
                </div>
                <div>
                    <img src={wall3} alt="img3"/>
                </div>
    </Carousel>
    
    </div>
  );
}

export default Home;
