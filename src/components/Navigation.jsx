import React from "react";
import "../css/Navigation.css";
import Logo from "../assets/Mlogo2.png";
import { Link } from "react-scroll";

const Navigation = () => {
  const links = ["Home", "About", "Skills", "Experience", "Portfolio"];

  return (
    <div className="nav">
      <div>
        <div className="nav__menu">
          <i class="fas fa-bars"></i>
        </div>
      </div>
      <div>
        <div>
          <a href="/home">
            <img className="nav__logo" src={Logo} alt="logo" />
          </a>
        </div>
      </div>
      <div className="nav__links">
        {links.map((link) => (
          <Link
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
    </div>
  );
};
export default Navigation;
