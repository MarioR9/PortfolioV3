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
                        <h4>{flatiron.discipline}<p className="exp__colorDetails">{flatiron.name}</p> </h4>
                        <div className="exp__colorDetails">{flatiron.year}</div>
                        <p>{flatiron.description}</p>
                        </div>
                         </Col>
                         </Row>
                        <Row>
                            <Col>
                        <div className='exp__education'>
                        <h4>{nova.discipline}<p className="exp__colorDetails">{nova.name}</p> </h4>
                        <div className="exp__colorDetails">{nova.year}</div>
                        <p>{nova.description}</p>   
                        </div>
                            </Col>
                            </Row>
                       
                    </div>
                    </Col>

                    <Col>
                    <h3>Work Experience</h3>
                    <div>
                        <Row>
                            <Col>
                        <div className='exp__work'>
                        <h4>Web Development<p className="exp__colorDetails">Freelancer</p> </h4>
                        <div className="exp__colorDetails">Current</div>
                        <p>Experience building responsive and modern sites with best practice techniques</p>
                          
                            <li>HTML and CSS</li>
                            <li>JavaScript and Postgresql</li>
                            <li>Responsive design and development</li>
                            <li>Popular front-end frameworks (e.g. Bootstrap)</li>
                            <li>User Experience (UX)</li>
                            <li>Server-side development</li>
                            <li>database management</li>
                        </div>
                         </Col>
                         </Row>
                        <Row>
                        <Col>
                        <div className='exp__work'>
                        <h4>Sales Representative<p className="exp__colorDetails">AT&T</p> </h4>
                        <div className="exp__colorDetails">​2017 - 2019</div>
                        <p>Resposabilities</p> 
                            <li>Troubleshooting wireless devices</li>
                            <li>Advised customers on purchasing the right products and plans based on their lifestyle and usage patterns</li>
                            <li>On boarded customers, helped them set up their devices, explained their bill, and creating their AT&T online account.</li>   
                        </div>
                        </Col>
                        </Row>
                        <Row>
                        <Col>
                        <div className='exp__work'>
                        <h4>Sales Representative<p className="exp__colorDetails">T-Mobile</p> </h4>
                        <div className="exp__colorDetails">​2012 - 2016</div>
                        <p>Resposabilities</p> 
                            <li>Troubleshooting wireless devices</li>
                            <li>Maintained good working relations with retail customers and ensured customer satisfaction at every stage of sale</li>
                            <li>Called customers within 3 days of activation for feedback and to ensure the service is working as it should.</li>  
                            <li>On boarded customers, helped them set up their devices for the first time, explained their first bill, created their T-Mobile online account, set up their Refer-a-Friend account</li> 
                        </div>
                        </Col>
                        </Row>
                       
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Experience;