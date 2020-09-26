import React from 'react'
import '../css/Experience.css'
import { Container, Row, Col } from 'react-bootstrap';

const Experience = () => {
    const education = [{name: "Flatiron School",discipline: 'Software Engineering', description: "Flatiron School is an educational organization founded in 2012 by Adam Enbar and Avi Flombaum. The organization is based in New York City and teaches software engineering, computer programming, data science, and cybersecurity analytics",year: "2019" },{name: 'Nothern Virginia Community College', discipline: 'Computer Science',description: 'In the digital age, everyone uses a computer. But Computer Scientists are the brains behind the devices that dominate our daily lives. If you know your way around an algorithm, or can expound on the differences between Python and Java.',year: '2018 - current' }]
    const workexperience = [{title: "Web Development",company: "Freelancer",tenure: "current",description: "Experience building responsive and modern sites with best practice techniques",skills:["HTML and CSS","JavaScript and Postgresql","Responsive design and development","Popular front-end frameworks (e.g. Bootstrap)","User Experience (UX)","Server-side development","database management"]},{title: "Sales Representative",company: "AT&T",tenure: "2017 - 2019",description: "Resposabilities",skills:["Advised customers on purchasing the right products and plans based on their lifestyle and usage patterns","On boarded customers, helped them set up their devices, explained their bill, and creating their AT&T online accoun","Troubleshooting wireless devices"]},{title: "Sales Representative",company: "T-Mobile",tenure: "2012 - 2016",description: "Resposabilities",skills:["Troubleshooting wireless devices","Maintained good working relations with retail customers and ensured customer satisfaction at every stage of sale","Called customers within 3 days of activation for feedback and to ensure the service is working as it should.","On boarded customers, helped them set up their devices for the first time, explained their first bill, created their T-Mobile online account, set up their Refer-a-Friend account"]}    
    
    ]   
    return (
        <div>
            <Container className='exp'>
                <Row>
                    <Col>
                    <h3>Education</h3>
                    <div>
                        {education.map(edu => 
                         <Row key={edu.name} >
                         <Col>
                         <div className='exp__education'>
                         <h4>{edu.discipline}<p className="exp__colorDetails">{edu.name}</p> </h4>
                         <div className="exp__colorDetails">{edu.year}</div>
                         <p>{edu.description}</p>
                         </div>
                         </Col>
                         </Row>
                        )}
                    </div>
                    </Col>
                    <Col>
                    <h3>Work Experience</h3>
                    <div> {workexperience.map(work => 
                        <Row key={work.company}>
                        <Col>
                        <div className='exp__work'>
                        <h4>{work.title}<p className="exp__colorDetails">{work.company}</p> </h4>
                        <div className="exp__colorDetails">{work.tenure}</div>
                        <p>{work.description}</p>
                            {work.skills.map(skill =>
                                <li key={skill}>{skill}</li>)}
                        </div>
                        </Col>
                        </Row>
                        )}
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Experience;