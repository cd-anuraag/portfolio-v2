import React, {Component} from 'react';
import ServerDescription from '../components/ServerDescription';

class Infra extends Component {
    render() {
        return (
            <div className="bg-infra cover-screen">
                <a href="/"><img src="./back-icon.png" alt="back-icon" className="back-icon"/></a>
                <img src="./infra.png" alt="Infra" className="infra-image"/>
                <div className="infra-desc">
                    All my projects rely on a distributed architecture with three key servers: Constantinople,
                    Rome, and Karakoram. This setup is designed to efficiently manage different aspects of my
                    projects, from databases to REST APIs, real-time services, and centralized control.
                </div>
                <div className="servers">
                    <ServerDescription
                        serverImage="./karakoram.png"
                        serverName="Karakoram"
                        serverDescription="Karakoram functions as the controlling headquarters overseeing and managing all services.
                         I use it to disable/enable specific services. It allows secure remote access to Constantinople and Rome for
                         management purposes and also facilitates actions such as killing processes on Constantinople and Rome."
                    />
                    <ServerDescription
                        serverImage="./rome.png"
                        serverName="Rome"
                        serverDescription="Rome is the primary server responsible for hosting REST API servers, real-time services, and various jobs and tasks.
                        Deploys and manages the backend services crucial for my projects, including REST APIs and real-time functionalities.
                        It Acts as the backbone of my applications by handling communication and background tasks."
                    />
                    <ServerDescription
                        serverImage="./constantinople.png"
                        serverName="Constantinople"
                        serverDescription="Constantinople serves as the centralized database server for all my projects.
                        It hosts MongoDB, acting as the data repository for my various applications. It provides a unified storage solution for project data, ensuring data consistency and accessibility."
                    />

                </div>

            </div>
        );
    }
}

export default Infra;