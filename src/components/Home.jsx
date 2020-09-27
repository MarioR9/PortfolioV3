import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import '../css/Home.css'
import profile from '../assets/avatar.jpeg'

const Home = () => {

    const name = {first: 'Mario', last: "Rodriguez"}
    const details = {email: "mariorodriguezan@gmail.com",phone: "+1 571-251-7280", location: 'Washington, DC'}
    
    return (
        <div className='home'>
            <Container >
                <Row>
                    <Col className='home__col2'>  
                    <div className='home__tag'>
                    <span >Hello I'm</span>
                    </div>
                    <div> 
                    <div className='home__header'>
                    <h2>{name.first + " "+ name.last}</h2>
                    <h4>Software Engineer</h4>
                    </div>
                    <div className='home__details'>
                      <li><p><i className="fas fa-envelope"></i>{details.email}</p></li>
                      <li><p><i className="fa fa-phone"></i>{details.phone}</p></li>
                      <li><p><i className="fa fa-map-marker"></i>{details.location}</p></li>
                    </div>
                    <div >
                        <ul className='home__social'>
                            <li><a href='https://github.com/MarioR9'><i className="fab fa-github fa-lg"></i></a></li>
                            <li><a href='https://www.linkedin.com/in/mario-rodriguezan/'><i className="fab fa-linkedin-in"></i></a></li>
                            <li><a href='https://medium.com/@mariorodriguezan'><i className="fab fa-medium-m"></i></a></li>
                        </ul>
                    </div>
                    </div>
                    </Col>
                    <Col 
                    data-aos="fade-up" 
                    data-aos-delay="30"  
                    data-aos-easing="ease-in-out"
                    data-aos-offset="200"
                    data-aos-duration="1800"
                    className='home__col1'>
                        <img src={profile} alt="avatar" className="home__avatar"/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Home;