import React, {Component} from 'react';

class About extends Component {
    render() {
        return (
            <div >
                <video className="video" autoPlay muted loop>
                    <source src="./video.mp4" type="video/mp4"/>
                </video>
                <div className="about">
                    Hi, I am Numan (A.K.A 'ciphernova') . I specialize in crafting efficient backend solutions and
                    harnessing blockchain's potential for transformative experiences. With a focus on security and
                    scalability, I bring seamless functionality to applications and drive innovation in the digital
                    realm.
                </div>
            </div>
        );
    }
}

export default About;