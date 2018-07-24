import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import backdropimg1 from '../images/backdropimg1.png'
import backdrop2 from '../images/backdrop2.jpg'
import backdrop3 from '../images/backdrop3.jpg'
import backdrop4 from '../images/backdrop4.jpg'
import backdrop5 from '../images/backdrop5.jpg'
import backdrop6 from '../images/backdrop6.jpg'
import backdropimg2 from '../images/backdropimg2.png'
import backdrop8 from '../images/backdrop8.jpg'

export default () => (
    <Carousel>
        <div>
            <img className="backdrop-img" src={backdropimg1} alt=""/>
        </div>
        <div>
            <img className="backdrop-img" src={backdrop2} alt=""/>
        </div>
        <div>
            <img className="backdrop-img" src={backdrop3} alt=""/>
        </div>
        <div>
            <img className="backdrop-img" src={backdrop4} alt=""/>
        </div>
        <div>
            <img className="backdrop-img" src={backdrop5} alt=""/>
        </div>
        <div>
            <img className="backdrop-img" src={backdrop6} alt=""/>
        </div>
        <div>
            <img className="backdrop-img" src={backdropimg2} alt=""/>
        </div>
        <div>
            <img className="backdrop-img" src={backdrop8} alt=""/>
        </div>
    </Carousel>
)