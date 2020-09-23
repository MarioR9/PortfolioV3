import React from 'react'
import '../css/About.css'
import aboutImg from '../assets/about.png'
import { Container, Row, Col } from 'react-bootstrap';
import GetAppIcon from '@material-ui/icons/GetApp';

export const About = () => {
    const about= "Hello, I'm Mario, I am a Full-stack web developer based on Washington, DC. I have expericen with multiple programing langues as well as data base. I have experice with: "
    return (
        <div className="about">
            <Container>
                <Row>
                    <Col><img className='about__img' src={aboutImg}/></Col>
                    <Col>
                    <div className='about__info'>
                    <h2>About Me</h2>
                    {about}
                    <div className='about_tech'>
                        <Row>
                        <li>JavasScript</li>
                        <li>RubyonRails</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Puppetter</li>
                        <li>Node</li>
                        <li>BootstrapUI</li>
                        <li>SemanticUI</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        </Row>
                    </div>
                    <div className='about__donwload'>
                    <span className='about__donwloadBtn'>Resume
                    <GetAppIcon/>
                    </span>
                    </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default About;