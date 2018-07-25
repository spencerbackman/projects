import React from 'react';
import SimpleMenu from './Menu'
import faq from '../images/faq.jpg'

class Faqs extends React.Component {
    render() {
        return (
            <div className="faqs">
                <SimpleMenu />
                <p className="faq-header"> FREQUENTLY ASKED QUESTIONS </p>
                <ul className="faq-list">
                    <li className="question"> HOW MUCH SPACE DOES THE BOOTH TAKE UP? </li>
                    <p className="answer">The closed booth takes up about a 6'x6' space, and fits well in corners or against walls. 
                        You will want to pick a spot where there is also room for a small line. The open booth with a backdrop takes 
                        up about a 6'x10' space, which will also need a bit of room for a small line. </p>
                    <li className="question"> IS THE BOOTH AVAILABLE FOR AN OUTDOOR EVENT? </li>
                    <p className="answer">Yes it is. We provide adequate lighting for outdoor photos, including at night.  We just 
                        need a shady area at your event to ensure the booth's proper functioning and picture quality, then we are 
                        good to go! </p>
                    <li className="question"> DO YOU OFFER A "CLOSED BOOTH" AKA MALL-STYLE PHOTO BOOTH? </li>
                    <p className="answer">I do offer a closed-style booth (Pictured to the right) but only offer it upon special 
                        request.  If you're interested, head over to the CONTACT TAB!</p>
                </ul>
                <img className="faq-img" src={faq} alt=""/>
            </div>
        )
    }
}

export default Faqs;