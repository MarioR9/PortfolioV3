import React from 'react'
import '../css/About.css'
import aboutImg from '../assets/about.png'

import { Container,Row,Col } from 'react-bootstrap';


export const About = () => {
    const about= "Hello, I'm Mario, I am a Full-stack web developer based on Washington, DC. I have expericen with multiple programing langues as well as data base. I have experice with: "
    return (
        <div className="about">
           <Container>
            <Row>
            <Col>
            <img className='about__img' src={aboutImg}/>
            </Col>
            <Col>
            <h2>About Me</h2>
            {about}
            <ul>
                <li>JavaScript</li>
                <li>Ruby on Rails</li>
                <li>React.js</li>
                <li>Puppetter.js</li>
                <li>Node.js</li>
                <li></li>
                <li>React</li>
                <li>React</li>

            </ul>
            </Col>
            </Row>
           
            </Container>
        </div>
    )
}
export default About;