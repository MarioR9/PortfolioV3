import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import '../css/Home.css'

const Home = () => {
    const name = {first: 'Mario', last: "Rodriguez"}
    const details = {email: "mariorodriguezan@gmail.com",phone: "+1 571-251-7280", location: 'Washington, DC'}
    return (
        <div className='home'>
            <Container>
                <Row>
                    <Col>  
                    <div className='home__tag'>
                    <span>Hello I'm</span>
                    </div>
                    <div> 
                    <div className='home__header'>
                    <h2>{name.first + " "+ name.last}</h2>
                    <h4>Software Engineer</h4>
                    </div>
                    <div className='home__details'>
                      <li><p><i class="fas fa-envelope"></i> {details.email}</p></li>
                      <li><p><i class="fa fa-phone"></i> {details.phone}</p></li>
                      <li><p><i class="fa fa-map-marker"></i>  {details.location}</p></li>
                    </div>
                    <div >
                        <ul className='home__social'>
                            <li><a><i class="fab fa-github fa-lg"></i></a></li>
                            <li><a><i class="fab fa-linkedin fa-lg"></i></a></li>
                            <li><a><i class="fab fa-medium fa-lg"></i></a></li>
                        </ul>
                    </div>
                    </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}
export default Home;