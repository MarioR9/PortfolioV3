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

import { Container, Row, Col, Modal, Button } from "react-bootstrap";

const Portfolio = () => {
  const pages = [
    translateme,
    tonester,
    uber,
    portfoliov1,
    rickandmorty1,
    portfoliov2,
    marsrover,
    portfoliov3,
  ];
  const data = {
    translateme: {
      Title: "Translateme",
      description:
        "Translate me uses a machine learning technology to classify and translate images into different languages. Once the image is captured, users can flip the image to reveal the desired translated word for the image.",
      technologies: [
        "Javascript",
        "React",
        "RubyonRails",
        "IBMWatson",
        "Cloudinary",
        "SemanticUI",
      ],
      images: [
        "https://raw.githubusercontent.com/MarioR9/TranslateMeFrontend/master/ReadmeImages/main.png",
        "https://github.com/MarioR9/TranslateMeFrontend/raw/master/ReadmeImages/categories.png",
        "https://github.com/MarioR9/TranslateMeFrontend/raw/master/ReadmeImages/categoryCards.png",
        "https://github.com/MarioR9/TranslateMeFrontend/raw/master/ReadmeImages/selectLanguage.png",
      ],
    },
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const body = (
    <div>
      <Container>
        <Row>
          <Col>
            <h2>{data["translateme"].Title}</h2>
            <p>{data["translateme"].description}</p>
            <div className="portfolio__tech">
              <Row>
                {data["translateme"].technologies.map((tech) => (
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
          </Col>
          <Col>
            {data["translateme"].images.map((img) => (
              <img className="portfolio__img" src={img} />
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );

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
                    <h2>{data["translateme"].Title}</h2>
                    <p>{data["translateme"].description}</p>
                    <div className="portfolio__tech">
                      <Row>
                        {data["translateme"].technologies.map((tech) => (
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
                    <div>
                      <ul className="portfolio__social">
                        <li>
                          <a href="https://github.com/MarioR9/TranslateMeFrontend">
                            <i className="fab fa-github fa-lg"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.youtube.com/watch?v=M7LLMVlS6hg&feature=emb_logo">
                            <i class="fab fa-youtube fa-lg"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col>
                    {data["translateme"].images.map((img) => (
                      <img className="portfolio__img" src={img} />
                    ))}
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
                data-aos="zoom-in"
                data-aos-delay="30"
                data-aos-easing="ease-in-out"
                data-aos-offset="200"
                data-aos-duration="1200"
                key={page}
              >
                <img
                  onClick={() => setShow(true)}
                  className="portfolio__img"
                  src={page}
                  alt={page}
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
