import React from 'react';
import ProfileImage from '../../image/profile.JPG';
import './profile.css'

// iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faMailBulk, faUser, faPhone, faMap, faLanguage, faRunning,
    faGuitar, faPlane, faGamepad, faFutbol, faCode
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
                        <h4> <FontAwesomeIcon icon={faUser} /> <a href="https://www.linkedin.com/in/agustin-decima-05289864"> Linkedin Profile</a> </h4>
                        <h4> <FontAwesomeIcon icon={faCode} /> <a href="https://github.com/AguDecima"> GitHub Profile</a> </h4>
                        <h4> <FontAwesomeIcon icon={faPhone} /> <a href="https://wa.me/543814665043">+543814665043 </a> </h4>
                        <h4> <FontAwesomeIcon icon={faMap} /> <a href="https://goo.gl/maps/DoaBVfWLXDUS4cRF8"> San Miguel de Tucuman - Argentina </a> </h4>
                    </div>
                </div>

                <div className="margen">
                    <button type="button" class="btn btn-primary btn-lg m-3">SKILLS</button>
                    <div className="text-white">
                        <h4 className="text-left m-3">SPRING BOOT - HIBERNATE  75%</h4>
                        <div class="progress m-3">
                            <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: 270 }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <h4 className="text-left m-3">ANGULAR 75%</h4>
                        <div class="progress m-3">
                            <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{ width: 270 }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <h4 className="text-left m-3">NODE JS - EXPRESS - MONGODB 75%</h4>
                        <div class="progress m-3">
                            <div class="progress-bar progress-bar-striped bg-primary" role="progressbar" style={{ width: 270 }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <h4 className="text-left m-3">MYSQL - POSTGRES 85%</h4>
                        <div class="progress m-3">
                            <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: 290 }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <h4 className="text-left m-3">REACT JS - REDUX 75%</h4>
                        <div class="progress m-3">
                            <div class="progress-bar progress-bar-striped bg-primary" role="progressbar" style={{ width: 270 }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <h4 className="text-left m-3">HTML - CSS - BOOTSTRAP 80%</h4>
                        <div class="progress m-3">
                            <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: 280 }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <h4 className="text-left m-3">GIT 70%</h4>
                        <div class="progress m-3">
                            <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: 250 }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <h4 className="text-left m-3">Digital Ocean - AWS - Heroku 75% </h4>
                        <div class="progress m-3">
                            <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: 270 }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <h4 className="text-left m-3">Linux Servers 70%</h4>
                        <div class="progress m-3">
                            <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{ width: 250 }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                        <h4 className="text-left m-3">Agile Methodologies - SCRUM 65%</h4>
                        <div class="progress m-3">
                            <div class="progress-bar progress-bar-striped bg-primary" role="progressbar" style={{ width: 240 }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>

                    </div>
                </div>

                <div className="margen">
                    <button type="button" class="btn btn-success btn-lg m-3">LANGUAGES</button>
                    <div className="text-white text-canter m-3">
                        <h4> <FontAwesomeIcon icon={faLanguage} /> Native Spanich</h4>
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