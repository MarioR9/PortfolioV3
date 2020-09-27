import React from "react";
import "../css/About.css";
import aboutImg from "../assets/about.png";
import { Container, Row, Col } from "react-bootstrap";
import resume from "../assets/MRresume.pdf";

const About = () => {
  const about =
    "Hello, I'm Mario, I am a Full-stack web developer based on Washington, DC. I have expericen with multiple programing langues as well as data base. I have experice with: ";
  const technologies = [
    "JavasScript",
    "RubyonRails",
    "React",
    "Redux",
    "Puppetter",
    "Node",
    "BootstrapUI",
    "SemanticUI",
    "HTML",
    "CSS",
  ];
  const traits = [
    {
      animation: "fade-right",
      title: "Frontend Development",
      description:
        "Building mobile responsive frontend websites u",
      icon: <i className="fa fa-code iron-color"></i>,
    },
    {
      animation: "fade-up",
      title: "Backend Development",
      description:
        "I design attractive and convenient interface for users. Foucusing on your business to make sure the desing enhances customers experience.",
      icon: <i className="fas fa-server"></i>,
    },
    {
      animation: "fade-left",
      title: "UI Design",
      description:
        "I design a product that is attractive and convenient for users. Creating an interactive design that facilitates an enjoyable experience for business's websites.",
      icon: <i className="fas fa-pencil-ruler"></i>,
    },
  ];

  return (
    <div className="about" id="about">
      <Container
        data-aos="fade-up"
        data-aos-delay="30"
        data-aos-easing="ease-in-out"
        data-aos-offset="200"
        data-aos-duration="1800"
      >
        <Row>
          <Col className="about__col1">
            <img className="about__img" src={aboutImg} alt="aboutImage" />
          </Col>
          <Col className="about__col2">
            <div
              data-aos="slide-left"
              data-aos-delay="30"
              data-aos-easing="ease-in-out"
              data-aos-offset="200"
              data-aos-duration="1800"
              className="about__info"
            >
              <h2>About Me</h2>
              <br />
              {about}
              <div className="about_tech">
                <Row>
                  {technologies.map((tech) => (
                    <li
                      data-aos="fade-up"
                      data-aos-delay="40"
                      data-aos-easing="ease-in-out"
                      data-aos-offset="100"
                      data-aos-duration="1800"
                      key={tech}
                    >
                      <span>{tech}</span>
                    </li>
                  ))}
                </Row>
              </div>
              <div className="about__donwload">
                <a
                  download="resume"
                  href={resume}
                  className="about__donwloadBtn"
                >
                  Resume
                  &nbsp;
                  <i class="fas fa-download"></i>
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <h1
          style={{
            color: "white",
            textAlign: "center",
            marginTop: "15%",
            fontSize: "30px",
            marginBottom: "5%",
          }}
        >
          What I do
        </h1>
        <Row>
          {traits.map((trait) => (
            <Col
              data-aos={trait.animation}
              data-aos-delay="30"
              data-aos-easing="ease-in-out"
              data-aos-offset="200"
              data-aos-duration="1800"
              key={trait.title}
            >
              <div className="about__traits">
                {trait.icon}
                <h3>{trait.title}</h3>
                <p>{trait.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default About;
