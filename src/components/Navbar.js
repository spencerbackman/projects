import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
    render() {
        return(
            <div className="navbar">
                <Link className="nav" id="home-link" to="/">Home</Link>
                <Link className="nav" id="backdrops-link" to="/backdrops">Backdrops</Link>
                <Link className="nav" id="contact-link" to="/contact">Contact</Link>
                <Link className="nav" id="faq-link" to="/faqs">Faqs</Link>
                <Link className="nav" id="pricing-link" to="/pricing">Pricing</Link>
                <Link className="nav" id="temp-link" to="/templates">Templates</Link>
            </div>
        )
    }
}

export default Navbar;