import React, {Component} from 'react';

class NotFound extends Component {
    render() {
        return (
            <div className="bg-landing cover-screen">
                <a href="/"><img src="./back-icon.png" alt="back-icon" className="back-icon"/></a>
               <div className="not-found-text"> The page you are looking for does not exist!
               </div>
            </div>
        );
    }
}

export default NotFound;