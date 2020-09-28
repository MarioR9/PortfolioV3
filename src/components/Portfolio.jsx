import React, {useState} from "react";
import "../css/Portfolio.css";
import translateme from "../assets/translateme.png";
import rickandmorty1 from "../assets/rickMorty1.png";
import tonester from "../assets/tonester.png";
import uber from "../assets/uber.png";
import portfoliov1 from "../assets/portfoliov1.png";
import portfoliov2 from "../assets/portfoliov2.png";
import marsrover from "../assets/marsrover.png";
import portfoliov3 from "../assets/portfoliov3.png";

import { Container,Button,Modal } from "react-bootstrap";

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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const data = {
                translateme:{ Title: "Translateme", description: "", technologies:[],images:[]},
                rickandMorty:{ Title: "rickandMorty", description: "", technologies:[],images:[]}, 
              }
  return (
    <div id="portfolio">
      <Container
        data-aos="fade-up"
        data-aos-delay="30"
        data-aos-easing="ease-in-out"
        data-aos-offset="200"
        data-aos-duration="1200"
      >
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>lol</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>  

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
                <img onClick={handleShow} className="portfolio__img" src={page} alt={page} />
              </ul>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Portfolio;
