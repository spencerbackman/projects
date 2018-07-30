import React from 'react'
import SimpleMenu from './Menu'
import homeImage from '../images/home.png'

class Home extends React.Component {
    render() {
        return(
            <div className="home">
                <header className="title">MUGSHOT PHOTOBOOTH</header>
                <div className="menu">
                <SimpleMenu className="menu"/>
                </div>
                <img src={homeImage} alt="" className="home-img"/>
                <div className="greetings">
                <span className="home-header"> Hey there! </span>
                <br/>
                <span className="home-body"> Mugshot Photobooth is there for any event. We have gone to charity events, parties, 
                    weddings, family reunions, and anything else that attracts a crowd of people. </span><br/>
                <span className="home-body">We are here to help your guests have a good time. What is better than a strip of photos to 
                    remember your special night? </span><br/>
                <span className="home-body"> Can't wait to work with you, thanks for visiting! </span>
                </div>
            </div>
        )
    }
}

export default Home;