import React, {Component} from 'react';

import About from "../components/About";
import Navbar from "../components/Navbar";

class Landing extends Component {
    render() {
        return (
            <div className="bg-landing cover-screen">
                <Navbar/>
                <About/>
            </div>
        );
    }
}

export default Landing;