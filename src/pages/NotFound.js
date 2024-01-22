import React, {Component} from 'react';

class NotFound extends Component {
    render() {
        return (
            <div className="bg-landing cover-screen">
                <a href="/"><img src="./back-icon.png" alt="back-icon" className="back-icon"/></a>
               <div className="not-found-text">Oops! You're beyond the borders. Please return to
                   <a href="/"><span className="not-found-home-text"> home</span></a>.
               </div>
            </div>
        );
    }
}

export default NotFound;