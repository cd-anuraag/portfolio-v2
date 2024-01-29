import React, {Component} from 'react';

class About extends Component {
    render() {
        return (<div>
                <video className="video" autoPlay muted loop>
                    <source src="./video.mp4" type="video/mp4"/>
                </video>
                <div className="about">
                    Hi, I am Anuraag.
                    I excel in developing high-performance backend solutions and leveraging blockchain technology to
                    revolutionize digital experiences. My expertise lies in ensuring robust security measures and
                    scalability, enabling seamless functionality across applications.
                </div>
            </div>);
    }
}

export default About;