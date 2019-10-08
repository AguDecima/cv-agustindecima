import React from 'react';
import './home.css'

// iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard , faIndustry, faBook, faPencilAlt, faNetworkWired, 
        faArchive, faProjectDiagram, faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    return ( 
        <div className="container">
            <div className="titulo">
                <h1 class="display-3">Agustín Décima</h1>
                <h1 className="mt-1 text-muted">Full Stack Developer</h1>
                <hr/>
            </div>

            <div className="section">
                <h1 class="display-5">PERFIL PERSONAL <FontAwesomeIcon icon={faIdCard} /></h1><hr/>
                <h4 className="text-justify">
                        Soy una persona muy dedicada y responsable. Me gustan mucho los desafíos y demostrarme constantemente de 
                        lo que soy capaz, a lo largo de mi vida realice diversas actividades las cuales me ayudaron a desarrollar 
                        cualidades para desenvolverme de la mejor manera. Tengo facilidad para aprender y adaptarme rapidamente
                        gracias a la personalidad autodidacta que siempre me caracterizo. Sincero ante todo cuando algo no lo se hacer,
                        pero no descanso hasta aprenderlo y poder resolverlo. Podría escribir muchas cosas más pero prefiero que los 
                        hechos hablen por mí.
                </h4>
            </div>

            <div className="section">
                <h1 class="display-5">EXPERIENCIA <FontAwesomeIcon  icon={faIndustry} /></h1><hr/>
                <h2 className="text-primary text-rigth"><FontAwesomeIcon  icon={faNetworkWired} /> 2018-2019 <small class="text-muted">Direccion de Ingresos Municipales</small></h2>
                <h4>
                    - Realize trabajos como programador Full Stack, haciendo soporte y desarrollo de sistemas necesarios para agilizar 
                    tareas del personal interno de la entidad. Trabaje con tecnologías como Spring Boot, Hibernate, Node JS y Postgres 
                    para Backend desarrolando API Rest, y Angular junto a Bootstrap para el  FrontEnd. <br/>
                    <br/><FontAwesomeIcon  icon={faProjectDiagram} /> Proyectos:
                    <div className="m-3">
                         <p><FontAwesomeIcon  icon={faArrowAltCircleRight}/> <b>Sistema de Autogestion: </b> 
                            Destinado para usuarios que asisten a la entidad, para solicitar boletas, turnos, consultar expedientes, notificaciones al usuario mediante
                            mensajes de texto. Este proyecto se realizo por completo desde las bases, las tecnologias usadas para el backend fueron Node Js con Express la cual se conectaban  a una base de datos
                            existente hecha en Postgres y SQL Server, con una seguridad JSON Web Token. Para el Front-End se utilizo Angular 6.x.
                         </p>
                         <p><FontAwesomeIcon  icon={faArrowAltCircleRight}/> <b>Sistema de Tramites Backend: </b>
                            En este proyecto se trabajo con Spring Boot, hibernate y postgres, debia manejar un ABM de usuarios que contaban con permisos asignados,
                            los cuales determinaban que tipo de tramites podia realizar el usuario. De esta manera desde la aplicacion cliente se podia determinar que opciones
                            mostrar.
                         </p>
                    </div>
                        
                </h4>
                <h2 className="text-primary mt-3"><FontAwesomeIcon  icon={faNetworkWired} /> 2017-2018 <small class="text-muted">Freelancer</small></h2>
                <h4>
                    - Trabaje en proyectos temporales, en su mayoría Web y Mobile. Se uso tecnologías como Android Studio (Java) 
                    para aplicaciones Android Nativas con consumo de datos de una API, Spring Boot, Node JS, MongoDB y Postgres para Backend 
                    con seguridad OAuth2, Angular para Web.
                    <br/>
                    <br/><FontAwesomeIcon  icon={faProjectDiagram} /> Proyectos:
                    <div className="m-3">
                         <p><FontAwesomeIcon  icon={faArrowAltCircleRight}/> <b>App Mobile Semana Colegio: </b> 
                            Aplicacion para semana de colegio, la cual se desarrollo en Android Studio con Java, consumiendo datos de Firebase su funcionamiento
                            era basico mas que nada informativo, del cronograma de las actividades.
                         </p>
                         <p><FontAwesomeIcon  icon={faArrowAltCircleRight}/> <b>Sistema Web de Facturacion: </b>
                            Proyecto realizado con Spring boot ,hiberate, Git y MySQL, se implemento Spring Security junto a Oauth2 para la seguridad,
                            el sistema maneja ventas, detalles de ventas, usuarios con distintos permisos, productos. Para el front-end se usa React JS, Redux junto a Bootstrap para el diseño, hoy en dia este
                            proyecto aun sigue con soporte y desarrollo.
                         </p>
                         <p><FontAwesomeIcon  icon={faArrowAltCircleRight}/> <b>Sistema Desktop Barrios Privados: </b>
                            Proyecto realizado en Visual Basic para el manejo de empleados, pago de expensas por lotes y espacios publicos
                            de los distintos propietarios e inquilinos del barrio. Se uso Visual Studio con SQL Server Express para funcionar de una 
                            manera local.
                         </p>
                         <p><FontAwesomeIcon  icon={faArrowAltCircleRight}/> <b>Sistema Web Reservas de Espacios UNT: </b>
                            Proyecto en desarrollo para la Universidad Nacional para el cual se usa Node JS, Express, Postgres, Bitbucket y Angular 7.x, . El mismo tiene 
                            como objetivo principalmente que los profesores y alumnos puedan reservar aulas por distintos motivos. Podran visualizar la disponibilidad,
                            recibir correos por modificaciones o aprobaciones de la reservas. Los administradores de cada Facultad podran establecer los horarios que estan ocupados
                            los espacios por cursado de materias, dictado de cursos o parciales. Este proyecto actualmente esta en desarrollo, principalmente se esta trabajando con el backend.
                         </p>
                         <p><FontAwesomeIcon  icon={faArrowAltCircleRight}/> <b>Paginas Web: </b>
                            Paginas web estaticas realizas con React Js, Bootstrap y CSS y desplegadas en Heroku o Netlify.
                         </p>
                    </div>
                </h4>
            </div>

            <div className="section">
                <h1 class="display-5">EDUCACIÓN <FontAwesomeIcon  icon={faBook} /></h1><hr/>
                <h2 className="text-warning"><FontAwesomeIcon  icon={faPencilAlt} /> 2014-2019 <small class="text-muted">Programador Universitario - UNT</small></h2>
                <h2 className="text-warning"><FontAwesomeIcon  icon={faPencilAlt} /> 2006-2012 <small class="text-muted">Bachiller Gestion de Empresas - Col. San Francisco</small></h2>
            </div>

            <div className="section">
                <h1 class="display-5">OTROS DATOS <FontAwesomeIcon  icon={faArchive} /></h1><hr/>
                <h3><a className="text-muted" href="https://drive.google.com/file/d/1UUusky9MyncR9wH27YrfjouWUBPuGTgJ/view">- Certificacion Java 111 Programadores</a></h3>
                <h3><a className="text-muted" href="https://drive.google.com/file/d/1Miw4apPPxZwSPgeF7tw8ripzAKrwl91r/view">- Curso Android</a></h3>
                <h3 className="text-muted" >- Participante en torneos de programación (TAP, IEEE, RPC) y entrenamientos 2018 del Training Camp dictado en la UBA (Universidad de Buenos Aires).</h3>
                <br/>

            </div>
            
        </div>
     );
}
 
export default Home;