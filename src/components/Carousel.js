import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import temp1 from '../images/temp1.png'
import temp2 from '../images/temp2.png'
import temp3 from '../images/temp3.png'
import temp4 from '../images/temp4.png'
import temp5 from '../images/temp5.png'
import temp6 from '../images/temp6.png'

export default () => (
    <Carousel>
        <div>  
            <img className="template-img" src={temp1} alt=""/>
        </div> 
        <div>
            <img className="template-img" src={temp2} alt=""/>
        </div>
        <div>
            <img className="template-img" src={temp3} alt=""/>
        </div>
        <div>
            <img className="template-img" src={temp4} alt=""/>
        </div>
        <div>
            <img className="template-img" src={temp5} alt=""/>
        </div>
        <div>
            <img className="template-img" src={temp6} alt=""/>
        </div>
    </Carousel>
);