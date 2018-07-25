import React from 'react'
import SimpleMenu from './Menu'
import BackdropCarousel from './BackdropCarousel'

import prop1 from '../images/prop1.jpg'
import prop2 from '../images/prop2.jpg'
import prop3 from '../images/prop3.jpg'
import prop4 from '../images/prop4.jpg'
import prop5 from '../images/prop5.jpg'
import prop6 from '../images/prop6.jpg'

class Backdrops extends React.Component {
    render() {
        return (
            <div className="backdrop">
                <SimpleMenu />
                <p className="back-header"> BACKDROPS </p>
                <p className="back-body"> Here are Backdrops that I currently have.  They are all customizable, so If you'd like a 
                    white backdrop, but with different flowers, I can do that! I am extremely flexible and would love to see any new 
                    ideas you have for me.  I am willing to create any idea you have.</p>
                <p className="back-body"> *Star Wars backdrop coming soon!! </p>
                <BackdropCarousel />
                <p className="back-header"> PROPS </p>
                <p className="back-body">Here are the props I currently have.  Every package comes with a set of props that fit your 
                    event.  If we don't have any that work, we will order more.  If you don't request any, the host will pick the 
                    ones they think will be best. </p>
                <p className="back-body"> *Star Wars Props coming soon!! </p>
                <img className="prop-img" src={prop1} alt=""/>
                <img className="prop-img" src={prop2} alt=""/>
                <img className="prop-img" src={prop3} alt=""/>
                <img className="prop-img" src={prop4} alt=""/>
                <img className="prop-img" src={prop5} alt=""/>
                <img className="prop-img" src={prop6} alt=""/>
            </div>
        )
    }
}

export default Backdrops