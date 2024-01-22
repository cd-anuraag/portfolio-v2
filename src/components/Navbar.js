import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="navbar-item">Contact</div>
                <div className="navbar-item"><a href="/infra">Infra</a></div>
                <div className="navbar-item"><a href="/work">Work</a></div>
                <div className="navbar-item"><a href="/about">About</a></div>
                <a href="/"><img src="./logo.png" alt="logo" className="navbar-item-logo"/></a>
            </div>
        );
    }
}

export default Navbar;