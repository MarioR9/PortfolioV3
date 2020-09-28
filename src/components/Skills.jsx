import React from "react";
import "../css/Skills.css";
import { Container, Row, Col } from "react-bootstrap";

const Skills = () => {
  const skills = [
    { name: "Bootstrap UI", percentage: "80%" },
    { name: "Semantic UI", percentage: "75%" },
    { name: "React", percentage: "78%" },
    { name: "Ruby on Rails", percentage: "75%" },
    { name: "Javascript", percentage: "70%" },
    { name: "Java", percentage: "35%" },
  ];
  return (
    <div id="skills">
      <div
        className="skills"
        data-aos="fade-up"
        data-aos-delay="30"
        data-aos-easing="ease-in-out"
        data-aos-offset="200"
        data-aos-duration="1500"
      >
        <Container>
          <Row>
            <Col className="skills__col1">
              <h3>Technical Skills</h3>
              <div>
                <div className="skills__details">
                  {skills.map((skill) => (
                    <div key={skill.name}
                      data-aos="zoom-in-right"
                      data-aos-delay="30"
                      data-aos-easing="ease-in-out"
                      data-aos-offset="200"
                      data-aos-duration="800"
                      className="skills__info"
                    >
                      <p>{skill.name}</p>
                      <p>{skill.percentage}</p>
                      <div className="skills__progessbarback">
                        <div
                          data-aos="zoom-in-right"
                          data-aos-delay="30"
                          data-aos-easing="ease-in-out"
                          data-aos-offset="200"
                          data-aos-duration="1800"
                          style={{ width: `${skill.percentage}` }}
                          className="skills__progessbar"
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
            <Col className="skills__col1">
              <h3>Professional Skills</h3>
              <div className="container2">
                <Container>
                  <Row>
                    <Col
                      data-aos="flip-right"
                      data-aos-delay="30"
                      data-aos-easing="ease-in-out"
                      data-aos-offset="200"
                      data-aos-duration="1800"
                      className="skills__circles"
                    >
                      <div>
                        <svg viewBox="0 0 100 100" height="120">
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="#c7c6c699"
                            stroke-width="5"
                            fill-opacity="0"
                          />
                          <circle
                            className="skills__circlePercentage0"
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="#0bceaf"
                            stroke-width="5"
                            fill-opacity="0"
                          />
                        </svg>
                        <p className="skills__percent">95%</p>
                        <p>Communication</p>
                      </div>
                    </Col>
                    <Col
                      data-aos="flip-left"
                      data-aos-delay="30"
                      data-aos-easing="ease-in-out"
                      data-aos-offset="200"
                      data-aos-duration="1800"
                      className="skills__circles"
                    >
                      <div>
                        <svg viewBox="0 0 100 100" height="120">
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="#c7c6c699"
                            stroke-width="5"
                            fill-opacity="0"
                          />
                          <circle
                            className="skills__circlePercentage1"
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="#0bceaf"
                            stroke-width="5"
                            fill-opacity="0"
                          />
                        </svg>
                        <p className="skills__percent">98%</p>
                        <p>Team Work</p>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col
                      data-aos="flip-right"
                      data-aos-delay="30"
                      data-aos-easing="ease-in-out"
                      data-aos-offset="200"
                      data-aos-duration="1800"
                      className="skills__circles"
                    >
                      <div>
                        <svg viewBox="0 0 100 100" height="120">
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="#c7c6c699"
                            stroke-width="5"
                            fill-opacity="0"
                          />
                          <circle
                            className="skills__circlePercentage2"
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="#0bceaf"
                            stroke-width="5"
                            fill-opacity="0"
                          />
                        </svg>
                        <p className="skills__percent">97%</p>
                        <p>Problem solving</p>
                      </div>
                    </Col>
                    <Col
                      data-aos="flip-left"
                      data-aos-delay="30"
                      data-aos-easing="ease-in-out"
                      data-aos-offset="200"
                      data-aos-duration="1800"
                      className="skills__circles"
                    >
                      <div>
                        <svg viewBox="0 0 100 100" height="120">
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="#c7c6c699"
                            stroke-width="5"
                            fill-opacity="0"
                          />
                          <circle
                            className="skills__circlePercentage3"
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="#0bceaf"
                            stroke-width="5"
                            fill-opacity="0"
                          />
                        </svg>
                        <p className="skills__percent">95%</p>
                        <p>Creativity</p>
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
  );
};
export default Skills;
