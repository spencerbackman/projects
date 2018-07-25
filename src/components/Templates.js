import React from 'react'
import SimpleMenu from './Menu'
import PastCarousel from './PastCarousel'

import temp1 from '../images/temp1.png'
import temp2 from '../images/temp2.png'
import temp3 from '../images/temp3.png'
import temp4 from '../images/temp4.png'
import temp5 from '../images/temp5.png'
import temp6 from '../images/temp6.png'

class Templates extends React.Component {
    render() {
        return (
            <div className="templates">
                <SimpleMenu />
                <p className="temp-header"> TEMPLATES </p>
                    <span className="temp-body">Your photo strips are completely customizable to make your event as fit to you as possible. 
                        (Note that if you'd like me to choose the design for you, we can do that as well.)  On this page you can see all 
                        the different templates that I use.  (They are from the Modern Minimalist Collection from Design Aglow). Then, at 
                        the very bottom of the page, there is a numbered gallery of sample templates.</span>
                        <div className="past-temps">
                <p className="temp-header"> PAST TEMPLATES </p>
                <PastCarousel  className="past-carousel"/>
                </div>
                    <div className="container">
                        <div>
                    <div className="template-images">
                        <div className="image">   
                            <img className="template-img" src={temp1} alt=""/>
                            <img className="template-img" src={temp2} alt=""/>
                        </div>
                        <div className="image">
                            <img className="template-img" src={temp3} alt=""/>
                            <img className="template-img" src={temp4} alt=""/>
                        </div>
                        <div className="image">
                            <img className="template-img" src={temp5} alt=""/>
                            <img className="template-img" src={temp6} alt=""/>
                        </div>
                        </div>
                    </div>
                    <div>
                <p className="temp-header"> A FEW EASY STEPS FOR DIY TEMPLATES: </p>
                <ol className="temp-list">
                    <li> Pick your favorite Layout (Pictured to the left) </li>
                    <li> Tell me what text/ writing you'd like on the photo strips. </li>
                    <li> Decide what background you want! This is any kind of pictures, drawings, colors, flowers, greenery, etc. 
                        Look at samples below for inspiration! </li>
                    <li> I'll send a rough draft, tell me any changes you want made, and if needed we can design again. </li>
                </ol>
                </div>
                
                <br/>
                </div>
            </div>
        )
    }
}

export default Templates;