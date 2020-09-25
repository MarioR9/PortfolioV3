import React from 'react'
import '../css/Experience.css'
import { Container, Row, Col } from 'react-bootstrap';

const Experience = () => {
    const flatiron = {name: "Flatiron School",discipline: 'Software Engineering', description: "Flatiron School is an educational organization founded in 2012 by Adam Enbar and Avi Flombaum. The organization is based in New York City and teaches software engineering, computer programming, data science, and cybersecurity analytics",year: "2019" }
    const nova = {name: 'Nothern Virginia Community College', discipline: 'Computer Science',description: 'In the digital age, everyone uses a computer. But Computer Scientists are the brains behind the devices that dominate our daily lives. If you know your way around an algorithm, or can expound on the differences between Python and Java.',year: '2018 - current' }    
    return (
        <div>
            <Container className='exp'>
                <Row>
                    <Col>
                    <h3>Education</h3>
                    <div>
                        <Row>
                            <Col>
                        <div className='exp__education'>
                        <h4>{flatiron.discipline}<p class="exp__colorDetails">{flatiron.name}</p> </h4>
                        <div class="exp__colorDetails">{flatiron.year}</div>
                        <p>{flatiron.description}</p>
                        </div>
                         </Col>
                         </Row>
                        <Row>
                            <Col>
                        <div className='exp__education'>
                        <h4>{nova.discipline}<p class="exp__colorDetails">{nova.name}</p> </h4>
                        <div class="exp__colorDetails">{nova.year}</div>
                        <p>{nova.description}</p>   
                        </div>
                            </Col>
                            </Row>
                       
                    </div>
                    </Col>

                    <Col>
                    <h3>Work Experience</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Experience;