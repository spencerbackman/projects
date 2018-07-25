import React from 'react'
import SimpleMenu from './Menu'

class Home extends React.Component {
    render() {
        return(
            <div className="home">
                <SimpleMenu />
                <p className="home-header"> Hey there! </p>
                <p className="home-body"> Mugshot Photobooth is there for any event. We have gone to charity events, parties, 
                    weddings, family reunions, and anything else that attracts a crowd of people. </p>
                <p className="home-body">We are here to help your guests have a good time. What is better than a strip of photos to 
                    remember your special night? </p>
                <p className="home-body"> Can't wait to work with you, thanks for visiting! </p>
            </div>
        )
    }
}

export default Home;