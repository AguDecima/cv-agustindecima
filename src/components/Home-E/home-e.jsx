import React from 'react';
import './home.css'

// iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard , faIndustry, faBook, faPencilAlt, faNetworkWired, 
        faArchive, faProjectDiagram, faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons'

const HomeE = () => {
    return ( 
        <div className="container">
            <div className="titulo">
                <h1 class="display-3">Agustín Décima</h1>
                <h1 className="mt-1 text-muted">Software Engineer</h1>
                <hr/>
            </div>

            <div className="section">
                <h1 class="display-5">PERSONAL PROFILE <FontAwesomeIcon icon={faIdCard} /></h1><hr/>
                <h4 className="text-justify">
                    I'm a very dedicated and responsible person. I really like the challenges and constantly 
                    demonstrate what I'm capable of, throughout my life I carried out various activities which 
                    helped me develop qualities to develop in the best way. I have facility to learn and adapt quickly 
                    thanks to the self-taught personality that always characterized me. Sincere first and foremost when 
                    something I don't know, but I don't rest until I learn it and can solve it. I could write many more 
                    things but I prefer that the facts speak for me.
                </h4>
            </div>

            <div className="section">
                <h1 class="display-5">EXPERIENCE <FontAwesomeIcon  icon={faIndustry} /></h1><hr/>
                
                <h2 className="text-primary mt-3"><FontAwesomeIcon  icon={faNetworkWired} /> 2020 - Currently <small class="text-muted">IncluIT - Naranja</small></h2>
                <h4>
                    - I'm currently working on a project for the company Naranja in which a collection 
                    system is developed through a payment link or a webcheckout. Leading a team and 
                    taking architect roles. The objective is that a client can receive money from another 
                    person by sending him a link or integrating by api and implementing his own form.
                    <br/>
                    <br/><FontAwesomeIcon  icon={faProjectDiagram} /> Projects:
                    <div className="m-3">
                         <p><FontAwesomeIcon  icon={faArrowAltCircleRight}/> <b>API Payment: </b>
                         In this project we work with node js and serverless using cloud technologies 
                         with AWS (dynamo db, sqs, sns, api gateway), with an event-driven architecture. 
                         Payzen is used to integrate payments with other cards 
                         </p>
                    </div>
                </h4>

                <h2 className="text-primary mt-3"><FontAwesomeIcon  icon={faNetworkWired} /> 2017 - Currently <small class="text-muted">Iconic Software</small></h2>
                <h4>
                    - Work on temporary projects, mostly Web and Mobile. Technologies such as Android Studio (Java) 
                    were used for Native Android applications with data consumption of an API, Spring Boot, Node JS, 
                    MongoDB and Postgres for Backend with OAuth2 security, Angular for Web.
                    <br/>
                    <br/><FontAwesomeIcon  icon={faProjectDiagram} /> Projects:
                    <div className="m-3">
                         <p><FontAwesomeIcon  icon={faArrowAltCircleRight}/> <b>Web Billing System: </b>
                         Project carried out with Spring boot, hibernate, Git and MySQL, Spring Security was 
                         implemented together with Oauth2 for security, the system handles sales, sales details, 
                         users with different permits, products. For the front-end, React JS, Redux is used together
                        with Bootstrap for design, today this project is still supported and developed. It is deployed 
                        in Digital Ocean. 
                         </p>
                         <p><FontAwesomeIcon  icon={faArrowAltCircleRight}/> <b>Mobile App Movies : </b> 
                         Application for educational purposes developed in Flutter, the data of an API was
                         consumed to get the movies with its detailed information.
                         </p>
                         <p><FontAwesomeIcon  icon={faArrowAltCircleRight}/> <b>UNT Space Reserve Web System: </b>
                         Project under development for the National University for which Node JS, Express, Postgres, 
                         Bitbucket and Angular 7.x is used. The main objective is that teachers and students can reserve 
                         classrooms for different reasons. They can view availability, receive emails for modifications or 
                         approvals of reservations. The administrators of each Faculty will be able to establish the schedules 
                         that are occupied the spaces by courses of subjects, dictated of courses or partial.
                         </p>
                         <p><FontAwesomeIcon  icon={faArrowAltCircleRight}/> <b> Mobile App College Week: </b> 
                         Application for college week, which was developed in Android Studio with Java, consuming 
                         Firebase data, its operation was basic more than anything informative, of the schedule of activities.
                         </p>
                         <p><FontAwesomeIcon  icon={faArrowAltCircleRight}/> <b>Web Pages: </b>
                         Static web pages made with React Js, Bootstrap and CSS and deployed in Heroku or Netlify.
                         </p>
                    </div>
                </h4>

                <h2 className="text-primary text-rigth"><FontAwesomeIcon  icon={faNetworkWired} /> 2018 - 2019 <small class="text-muted">Municipal Revenue Office</small></h2>
                <h4>
                    - Perform work as a Full Stack programmer, making support and development of systems necessary 
                    to expedite tasks of the internal staff of the entity. Work with technologies such as Spring Boot, 
                    Hibernate, Node JS and Postgres for Backend developing API Rest, and Angular with Bootstrap for the FrontEnd.<br/>
                    <br/><FontAwesomeIcon  icon={faProjectDiagram} /> Projects:
                    <div className="m-3">
                         <p><FontAwesomeIcon  icon={faArrowAltCircleRight}/> <b>Self-Management System: </b> 
                          Destined for users attending the entity, to request tickets, shifts, consult files, 
                         notifications to the user through text messages. This project was carried out completely 
                         from the bases, the technologies used for the backend were Node Js with Express which 
                         connected to an existing database made in Postgres and SQL Server, with a JSON Web Token 
                         security. Angular 6.x was used for the Front-End.
                         </p>
                         <p><FontAwesomeIcon  icon={faArrowAltCircleRight}/> <b>Backend Procedures System: </b>
                          In this project we worked with Spring Boot, hibernate and postgres, I had to manage an CRUD 
                         of users who had assigned permissions, which determined what type of procedures the user 
                         could perform. In this way from the client application you could determine what options to 
                         display.
                         </p>
                    </div>
                        
                </h4>
            </div>

            <div className="section">
                <h1 class="display-5">EDUCATION <FontAwesomeIcon  icon={faBook} /></h1><hr/>
                <h2 className="text-warning"><FontAwesomeIcon  icon={faPencilAlt} /> 2014-2018 <small class="text-muted">University Programmer - UNT</small></h2>
                <h2 className="text-warning"><FontAwesomeIcon  icon={faPencilAlt} /> 2006-2012 <small class="text-muted">Bachelor of Business Administration - Col. San Francisco</small></h2>
            </div>

            <div className="section">
                <h1 class="display-5">OTHER DATA <FontAwesomeIcon  icon={faArchive} /></h1><hr/>
                <h3><a className="text-muted" href="https://drive.google.com/file/d/1UUusky9MyncR9wH27YrfjouWUBPuGTgJ/view">- Java 111 Programmers Certification</a></h3>
                <h3><a className="text-muted" href="https://drive.google.com/file/d/1Miw4apPPxZwSPgeF7tw8ripzAKrwl91r/view">- Android Course</a></h3>
                <h3><a className="text-muted" href="https://www.udemy.com/course/swift_ios/">- IOS Swift Course </a></h3>
                <h3 className="text-muted" >- Participant in programming tournaments (TAP, IEEE, RPC) and training 2018 of the Training Camp taught at the UBA (University of Buenos Aires).</h3>
                <br/>

            </div>
            
        </div>
     );
}
 
export default HomeE;