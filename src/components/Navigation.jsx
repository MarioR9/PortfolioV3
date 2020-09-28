import React from "react";
import "../css/Navigation.css";
import Logo from "../assets/Mlogo2.png";
import { Link } from "react-scroll";
import { Container } from "react-bootstrap";

const Navigation = () => {
  const links = ["Home", "About", "Skills", "Experience", "Portfolio"];

  return (
    <div className="nav">
      <Container>
      <div>
          <a href="/home">
            <img className="nav__logo" src={Logo} alt="logo" />
          </a>
      </div>
      <div >
          <label className="nav__menu" for='toggle'>&#9776;</label>
          <input type='checkbox' id='toggle'></input>
        </div>
      <div >
        {links.map((link) => (
          <Link
            className="nav__links"
            key={link}
            to={link.toLowerCase()}
            offset={-100}
            smooth={true}
            duration={1300}
            href={`/${link.toLowerCase()}`}
          >
            <li>{link}</li>
          </Link>
        ))}
      </div>
      </Container>
    </div>
  );
};
export default Navigation;
