import React from 'react';
import ProfileImage from '../../image/profile-1.jpg';
import './profile.css'

// iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faMailBulk, faUser, faPhone, faMap, faLanguage, faRunning,
    faGuitar, faPlane, faGamepad, faFutbol, faCode, faServer, faNetworkWired, faMobile, faDatabase, faCat, faScroll, faChartBar
} from '@fortawesome/free-solid-svg-icons'

const ProfileE = () => {
    return (
        <div class="profile">
            <div class="text-center">
                <img src={ProfileImage} alt="imagen de contacto" className="img-fluid redondo" />
                <div className="margen">
                    <button type="button" class="btn btn-danger btn-lg  m-3">CONTACT</button>
                    <div className="text-white">
                        <h4> <FontAwesomeIcon icon={faMailBulk} /> <a href="mailto:agudecima@gmail.com">agudecima@gmail.com</a> </h4>
                        <h4> <FontAwesomeIcon icon={faUser} /> <a href="https://www.linkedin.com/in/agustin-decima-05289864"> Linkedin Profile: Agustin Decima</a> </h4>
                        <h4> <FontAwesomeIcon icon={faCode} /> <a href="https://github.com/AguDecima?tab=repositories"> GitHub Profile: AguDecima</a> </h4>
                        <h4> <FontAwesomeIcon icon={faPhone} /> <a href="https://wa.me/543814665043">+543814665043 </a> </h4>
                        <h4> <FontAwesomeIcon icon={faMap} /> <a href="https://goo.gl/maps/DoaBVfWLXDUS4cRF8"> San Miguel de Tucuman - Argentina </a> </h4>
                    </div>
                </div>

                <div className="margen">
                    <button type="button" class="btn btn-primary btn-lg m-3">SKILLS</button>
                    <div className="text-white">
                        <h4 className="text-left m-3">Spring Boot - Hibernate <FontAwesomeIcon icon={faChartBar} /> </h4>
                        <div class="progress m-3">
                            <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: 500 }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <h4 className="text-left m-3">Node JS - Express - MongoDB <FontAwesomeIcon icon={faCode} /></h4>
                        <div class="progress m-3">
                            <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: 500 }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <h4 className="text-left m-3">React JS - Angular - Redux <FontAwesomeIcon icon={faNetworkWired} /> </h4>
                        <div class="progress m-3">
                            <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{ width: 500 }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <h4 className="text-left m-3">Flutter <FontAwesomeIcon icon={faMobile} /> </h4>
                        <div class="progress m-3">
                            <div class="progress-bar progress-bar-striped bg-primary" role="progressbar" style={{ width: 500 }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <h4 className="text-left m-3">MySQL - Postgres <FontAwesomeIcon icon={faDatabase} /></h4>
                        <div class="progress m-3">
                            <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: 500 }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <h4 className="text-left m-3">GIT <FontAwesomeIcon icon={faCat} /> </h4>
                        <div class="progress m-3">
                            <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: 500 }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <h4 className="text-left m-3">Digital Ocean - AWS - Linux Servers <FontAwesomeIcon icon={faServer} /> </h4>
                        <div class="progress m-3">
                            <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: 500 }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <h4 className="text-left m-3">Serverless - AWS Cloud <FontAwesomeIcon icon={faDatabase} /></h4>
                        <div class="progress m-3">
                            <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: 500 }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <h4 className="text-left m-3">Agile Methodologies (SCRUM, XP) <FontAwesomeIcon icon={faScroll} /></h4>
                        <div class="progress m-3">
                            <div class="progress-bar progress-bar-striped bg-primary" role="progressbar" style={{ width: 500 }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                    </div>
                </div>

                <div className="margen">
                    <button type="button" class="btn btn-success btn-lg m-3">LANGUAGES</button>
                    <div className="text-white text-canter m-3">
                        <h4> <FontAwesomeIcon icon={faLanguage} /> Native Spanish</h4>
                        <h4> <FontAwesomeIcon icon={faLanguage} /> English - Middle Level </h4>
                    </div>
                </div>

                <div className="margen">
                    <button type="button" class="btn btn-warning btn-lg m-3">HOBBIES</button>
                    <div className="text-white text-canter m-3">
                        <h1><FontAwesomeIcon icon={faGuitar} /> <FontAwesomeIcon icon={faRunning} /> <FontAwesomeIcon icon={faPlane} /> <FontAwesomeIcon icon={faGamepad} /> <FontAwesomeIcon icon={faFutbol} /> </h1>
                    </div>
                </div>

               
            </div>

        </div>
    );
}

export default ProfileE;