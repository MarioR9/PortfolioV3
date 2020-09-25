import React from 'react'
import '../css/Skills.css'
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';


const Skills = () => {
    return (
        <div>
            <div className='skills'>
            <Container>
                <Row>
                    <Col className='skills__col1'>
                    <h3>Technical Skills</h3>
                    <div>
                        <div className='skills__details'>
                            <div className='skills__info'>
                            <p>Bootstrap UI</p>
                            <p>80%</p>
                            <div className='skills__progessbarback'>
                            <div style={{width: "80%" }} className='skills__progessbar'></div>
                            </div>
                            </div>
                            <div className='skills__info'>
                            <p>Semantic UI</p>
                            <p>75%</p>
                            <div className='skills__progessbarback'>
                            <div style={{width: "75%" }} className='skills__progessbar'></div>
                            </div>
                            </div>
                            <div className='skills__info'>
                            <p>React</p>
                            <p>78%</p>
                            <div className='skills__progessbarback'>
                            <div style={{width: "78%" }} className='skills__progessbar'></div>
                            </div>
                            </div>
                            <div className='skills__info'>
                            <p>Ruby on Rails</p>
                            <p>75%</p>
                            <div className='skills__progessbarback'>
                            <div style={{width: "75%" }} className='skills__progessbar'></div>
                            </div>
                            </div>
                            <div className='skills__info'>
                            <p>Javascript</p>
                            <p>70%</p>
                            <div className='skills__progessbarback'>
                            <div style={{width: "70%" }} className='skills__progessbar'></div>
                            </div>
                            </div>
                            <div className='skills__info'>
                            <p>Java</p>
                            <p>35%</p>
                            <div className='skills__progessbarback'>
                            <div style={{width: "35%" }} className='skills__progessbar'></div>
                            </div>
                            </div>
                        </div>
                    </div>
                    
                    </Col>
                    <Col className='skills__col2'>
                    <h3>Professional Skills</h3>
                    <div>
                        <Container>
                            <Row>
                                <Col>
                                <div className='skills__circles'>
                                    <svg viewBox="0 0 100 100" height='120'>
                                    <circle cx="50" cy="50" r="40" stroke="#c7c6c699" stroke-width="5" fill-opacity="0" />
                                    <circle cx="50" cy="50" r="40" stroke="#0bceaf" stroke-width="5" fill-opacity="0" />
                                    </svg>
                                </div>
                                </Col>
                                <Col>
                                <div className='skills__circles'>
                                    <svg viewBox="0 0 100 100" height='120'>
                                    <circle cx="50" cy="50" r="40" stroke="#c7c6c699" stroke-width="5" fill-opacity="0" />
                                    <circle cx="50" cy="50" r="40" stroke="#0bceaf" stroke-width="5" fill-opacity="0" />
                                    </svg>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <div className='skills__circles'>
                                    <svg viewBox="0 0 100 100" height='120'>
                                    <circle cx="50" cy="50" r="40" stroke="#c7c6c699" stroke-width="5" fill-opacity="0" />
                                    <circle cx="50" cy="50" r="40" stroke="#0bceaf" stroke-width="5" fill-opacity="0" />
                                    </svg>
                                </div>
                                </Col>
                                <Col>
                                <div className='skills__circles'>
                                    <svg viewBox="0 0 100 100" height='120'>
                                    <circle cx="50" cy="50" r="40" stroke="#c7c6c699" stroke-width="5" fill-opacity="0" />
                                    <circle cx="50" cy="50" r="40" stroke="#0bceaf" stroke-width="5" fill-opacity="0" />
                                    </svg>
                                </div>
                                </Col>
                            </Row>
                        </Container>
                       
                    </div>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    )
}
export default Skills;