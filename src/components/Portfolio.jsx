import React, { useState } from "react";
import "../css/Portfolio.css";

import translateme from "../assets/translateme.png";
import rickandmorty1 from "../assets/rickMorty1.png";
import tonester from "../assets/tonester.png";
import uber from "../assets/uber.png";
import portfoliov1 from "../assets/portfoliov1.png";
import portfoliov2 from "../assets/portfoliov2.png";
import marsrover from "../assets/marsrover.png";
import portfoliov3 from "../assets/portfoliov3.png";

import { Container, Row, Col, Modal } from "react-bootstrap";

const Portfolio = () => {
  const pages = [
    {
      img: translateme,
      name: "translateme",
    },
    {
      img: tonester,
      name: "tonester",
    },
    {
      img: uber,
      name: "uber",
    },
    {
      img: portfoliov1,
      name: "portfoliov1",
    },
    {
      img: rickandmorty1,
      name: "rickandmorty1",
    },
    {
      img: portfoliov2,
      name: "portfoliov2",
    },
    {
      img: marsrover,
      name: "marsrover",
    },
    {
      img: portfoliov3,
      name: "portfoliov3",
    },
  ];
  const projects = [
    {
      title: "translateme",
      description:
        "Translateme uses a machine learning technology to classify and translate images into different languages. Once the image is captured, users can flip the image to reveal the desired translated word for the image.",
      technologies: [
        "Javascript",
        "React",
        "RubyonRails",
        "IBMWatson",
        "Cloudinary",
        "SemanticUI",
      ],
      images: [
        {
       img: "https://raw.githubusercontent.com/MarioR9/TranslateMeFrontend/master/ReadmeImages/main.png",
       description: "Authentication page"
      },
      {
        img: "https://github.com/MarioR9/TranslateMeFrontend/raw/master/ReadmeImages/categories.png",
        description: "ALl categories page",
      },
      {
        img: "https://github.com/MarioR9/TranslateMeFrontend/raw/master/ReadmeImages/categoryCards.png",
        description: "User's selected category page"
      },
      {
        img: "https://github.com/MarioR9/TranslateMeFrontend/raw/master/ReadmeImages/selectLanguage.png",
        description: "Translation process"
      }
       
      ],
      social: [
        {
          icon: <i className="fab fa-github portfolio__fa-lg"></i>,
          link: "https://github.com/MarioR9/TranslateMeFrontend",
        },
        {
          icon: <i className="fab fa-youtube portfolio__fa-lg" ></i>,
          link: "https://www.youtube.com/watch?v=M7LLMVlS6hg&feature=emb_logo",
        },
      ],
    }
      
  ];
  const [currentProject, setProject] = useState([])
  const handledSelectedProject = (e) => {
    setShow(true);
    setProject(projects.find((project) => project.title == e.target.alt));
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <div id="portfolio">
      <Container
        data-aos="fade-up"
        data-aos-delay="30"
        data-aos-easing="ease-in-out"
        data-aos-offset="200"
        data-aos-duration="1200"
      >
        <Container>
          <Modal
            size="xl"
            centered
            enforceFocus
            show={show}
            onHide={handleClose}
            className="portfolio__modalContainer"
          >
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body centered scrollable>
              <Container>
                <Row>
                  <Col>
                    <h2
                      data-aos="fade-down"
                      data-aos-delay="40"
                      data-aos-easing="ease-in-out"
                      data-aos-offset="100"
                      data-aos-duration="1200"
                    >
                      {currentProject.title}
                    </h2>
                    <p
                      data-aos="fade-down"
                      data-aos-delay="40"
                      data-aos-easing="ease-in-out"
                      data-aos-offset="100"
                      data-aos-duration="1200"
                    >
                      {currentProject.description}
                    </p>
                    <div className="portfolio__tech">
                      <Row>
                        {
                        currentProject.length === 0  
                        ?
                        null
                        :
                        currentProject.technologies.map(tech => 
                          <li
                            data-aos="fade-up"
                            data-aos-delay="40"
                            data-aos-easing="ease-in-out"
                            data-aos-offset="100"
                            data-aos-duration="1200"
                            key={tech}
                          >
                            <span>{tech}</span>
                          </li>
                        )}
                      </Row>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="40"
                      data-aos-easing="ease-in-out"
                      data-aos-offset="100"
                      data-aos-duration="1800"
                    >
                      <ul className="portfolio__social">
                        {
                        currentProject.length === 0
                        ?
                        null
                        :  
                        currentProject.social.map(tech => 
                          <li key={tech.length}>
                            <a key={tech.length} href={tech.link}>
                              {tech.icon}
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>
                  </Col>
                  <Col
                   data-aos="fade-down"
                   data-aos-delay="40"
                   data-aos-easing="ease-in-out"
                   data-aos-offset="100"
                   data-aos-duration="1800"
                  >
                    {currentProject.length === 0 
                    ? 
                    null
                    :
                    currentProject.images.map(project => 
                      <div>
                      <img key={project.description} className="portfolio__img" src={project.img} />
                      <p >{project.description}</p>
                      </div>
                    )}
                  </Col>
                </Row>
              </Container>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal>
        </Container>

        <div className="portfolio">
          <div className="portfolio__header">
            <h3>Recent Projects</h3>
          </div>
          <div className="portfolio__grid">
            {pages.map((page) => (
              <ul
                key={page.name}
                data-aos="zoom-in"
                data-aos-delay="30"
                data-aos-easing="ease-in-out"
                data-aos-offset="200"
                data-aos-duration="1200"
              >
                <img
                  onClick={handledSelectedProject}
                  className="portfolio__img"
                  src={page.img}
                  alt={page.name}
                />
              </ul>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Portfolio;
