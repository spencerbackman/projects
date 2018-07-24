import React from 'react'
import SimpleMenu from './Menu'
import Carousel from './Carousel';
import PastCarousel from './PastCarousel'

class Templates extends React.Component {
    render() {
        return (
            <div className="templates">
                <SimpleMenu />
                <p className="temp-header">
                    TEMPLATES
                </p>
                <p className="temp-body">
                    Your photo strips are completely customizable to make your event 
                    as fit to you as possible. (Note that if you'd like me to choose 
                    the design for you, we can do that as well.)  On this page you 
                    can see all the different templates that I use.  (They are from 
                    the Modern Minimalist Collection from Design Aglow). Then, at the 
                    very bottom of the page, there is a numbered gallery of sample 
                    templates.
                </p>
                <Carousel />
                <p className="temp-header">
                    A FEW EASY STEPS FOR DIY TEMPLATES:
                </p>
                <ol className="temp-list">
                    <li>
                        Pick your favorite Layout (Pictured to the left)
                    </li>
                    <li>
                        Tell me what text/ writing you'd like on the photo strips.
                    </li>
                    <li>
                        Decide what background you want! This is any kind of pictures, drawings, 
                        colors, flowers, greenery, etc.  Look at samples below for inspiration!
                    </li>
                    <li>
                        I'll send a rough draft, tell me any changes you want made, 
                        and if needed we can design again.
                    </li>
                </ol>
                <p className="temp-header">
                    PAST TEMPLATES
                </p>
                <PastCarousel />
            </div>
        )
    }
}

export default Templates;