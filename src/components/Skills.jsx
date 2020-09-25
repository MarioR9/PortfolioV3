import React from 'react'
import '../css/Skills.css'
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';


const Skills = () => {
    return (
        <div>
            <div className='skills'>
            <Container>
                <Row>
                    <Col>
                    <h3>Technical Skills</h3>
                    <div>
                        <div className='skills__details'>
                            <div className='skills__info'>
                                <p>javascript</p>
                                <p>80%</p>
                            <div className='skills__progessbarback'>
                                <div style={{width: "80%" }} className='skills__progessbar'></div>
                            </div>
                            </div>
                        </div>
                    </div>
                    
                    </Col>
                    <Col>
                    <h3>Professional Skills</h3>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    )
}
export default Skills;