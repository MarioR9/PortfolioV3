import React, {useState} from 'react'
import '../css/About.css'
import aboutImg from '../assets/about.png'
import { Container, Row, Col, Fade, Button } from 'react-bootstrap';
import GetAppIcon from '@material-ui/icons/GetApp';
import resume from '../assets/MRresume.pdf'


const About = () => {
    const about= "Hello, I'm Mario, I am a Full-stack web developer based on Washington, DC. I have expericen with multiple programing langues as well as data base. I have experice with: "
    const technologies = ["JavasScript","RubyonRails","React","Redux","Puppetter","Node","BootstrapUI","SemanticUI","HTML","CSS"]
    const traits = [{title: "Frontend Development",description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",icon: <i className="fa fa-code iron-color"></i>},{title: "Backend Development",description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",icon: <i className="fas fa-server"></i>},{title: "UI Design",description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",icon:  <i className="fas fa-pencil-ruler"></i>}]
    const [open, setOpen] = useState(false);
    return (
        <div className="about">
             <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
      ></Button>
       <Fade in={open}>
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
                    {technologies.map(tech => 
                    <li key={tech}><span>{tech}</span></li>
                    )}
                    </Row>
                    </div>
                    <div className='about__donwload'>
                    <a download='resume' href={resume} className='about__donwloadBtn'>Resume
                    <GetAppIcon/>
                    </a>
                    </div>
                    </div>
                    </Col>
                </Row>
                <h1 style={{color:'white', textAlign: "center", marginTop: '15%',fontSize: "30px", marginBottom: "5%"}}>What I do</h1>
                <Row>
                    {traits.map(trait =>
                    <Col key={trait.title} >
                    <div className='about__traits'>
                        {trait.icon}
                        <h3>{trait.title}</h3>
                        <p>{trait.description}</p>
                    </div>
                    </Col>  
                    )} 
                </Row>
            </Container>
            </Fade>
        </div>
    )
}
export default About;