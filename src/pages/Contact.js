import React, {Component} from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="bg-landing cover-screen">
                <a href="/"><img src="./back-icon.png" alt="back-icon" className="back-icon"/></a>
                <div className="contact-heading">
                    I enjoy working with dedicated individuals from businesses that make the world beautiful. We can do
                    so much together, lets talk.
                </div>
                <div className="contact-options">
                    <div className="contact-option">
                        <a href="https://github.com/cd-anuraag">
                            <img src="./github.png" alt="github-logo" className="contact-option-image"/>
                        </a>
                    </div>
                    <div className="contact-option">
                        <a href="mailto:anuraag541@gmail.com">
                            <img src="./email.png" alt="email-logo" className="contact-option-image"/>
                        </a>
                    </div>
                    <div className="contact-option">
                        <a href="https://twitter.com/anuraag_bansal">
                            <img src="./x.png" alt="x-logo" className="contact-option-image"/>
                        </a>
                    </div>
                    <div className="contact-option">
                        <a href="https://www.linkedin.com/in/anuraag-bansal-54a091194/">
                            <img src="./linkedin.png" alt="linkedin-logo" className="contact-option-image"/>
                        </a>
                    </div>
                </div>

            </div>
        );
    }
}

export default Contact;