import React, {Component} from 'react';

class ServerDescription extends Component {
    render() {
        return (
            <div className="server-block">
                <div className="server-name">{this.props.serverName}</div>
                <img src={this.props.serverImage} alt="Server" className="server-image"/>
                <div className="server-desc">{this.props.serverDescription}</div>
            </div>
        );
    }
}

export default ServerDescription;