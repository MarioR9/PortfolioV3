import React from 'react'
import '../css/About.css'
import aboutImg from '../assets/about.png'
import { Container, Row, Col } from 'react-bootstrap';
import GetAppIcon from '@material-ui/icons/GetApp';

const About = () => {
    const about= "Hello, I'm Mario, I am a Full-stack web developer based on Washington, DC. I have expericen with multiple programing langues as well as data base. I have experice with: "
    return (
        <div className="about">
            <Container>
                <Row>
                    <Col className='about__col1'>
                        <img className='about__img' src={aboutImg} alt='aboutImage'/>
                        </Col>
                    <Col className='about__col2'>
                    <div className='about__info'>
                    <h2>About Me</h2>
                    <br/>
                    {about}
                    <div className='about_tech'>
                        <Row>
                        <li><span>JavasScript</span></li>
                        <li><span>RubyonRails</span></li>
                        <li><span>React</span></li>
                        <li><span>Redux</span></li>
                        <li><span>Puppetter</span></li>
                        <li><span>Node</span></li>
                        <li><span>BootstrapUI</span></li>
                        <li><span>SemanticUI</span></li>
                        <li><span>HTML</span></li>
                        <li><span>CSS</span></li>
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