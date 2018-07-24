import React from 'react'
import SimpleMenu from './Menu'
import contact from '../images/contact.jpg'

class Contact extends React.Component {
    render() {
        return (
            <div className="contact">
                <SimpleMenu />
                <p className="contact-header">
                    CONTACT
                </p>
                <p className="contact-body" id="contact-main">
                    Here you can send me a direct message. Feel free to contact me with questions, 
                    information about your event, or reservation inquiries.  I am here to help and 
                    excited to get to know you!
                </p>
                <div className="contact-column" id="column-left">
                <img id="contact-img" src={contact} alt=""/>
                </div>
             
                <div className="contact-column" id="column-middle">
                <p className="contact-info">
                    MUGSHOT PHOTOBOOTH
                </p>
                <p className="contact-info">
                    Based in Salt Lake City & Utah County, UT
                </p>
                <p className="contact-info">
                    mugshotphotoslc@gmail.com
                </p>
                <p className="contact-info">
                    (385)268-8877 Call or Text
                </p>
                <p className="contact-info">
                    Facebook & Instagram:
                </p>
                <p className="contact-info">
                    @mugshotphotoslc
                </p>
                <div id="form-container">
                <p className="contact-subheader">
                    SEND ME A MESSAGE!
                </p>
                </div>
                <div className="contact-form" id="column-right">
                <p>
                    * Indicates required field
                </p>
                <br/>
                <br/>
                <form onSubmit={this.handleSubmit} className="contact-form">
                    Name:
                    <br/>
                    <input 
                        type="text"
                        className="firstname-input"
                        placeholder="first"
                        onChange={this.handleChange}
                        />
                    <input 
                        type="text"
                        className="lastname-input"
                        placeholder="last"
                        onChange={this.handleChange}
                        />
                        <br/>
                    Email: 
                    <br/>
                    <input 
                        type="text"
                        className="email-input"
                        name="email"
                        onChange={this.handleChange}
                        />
                        <br/>
                    Question/info:
                    <br/>
                    <input 
                        type="text"
                        className="question-input"
                        name="question"
                        onChange={this.handleChange}
                        />
                        <br/>
                    <button>Submit</button>
                </form>                     
                </div>
                </div>
                
            </div>
        )
    }
}

export default Contact;