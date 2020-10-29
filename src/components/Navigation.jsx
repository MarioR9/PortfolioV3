import React from 'react';
import '../css/Navigation.css';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';
import { Container } from 'react-bootstrap';

//new navigataion colors when page focus on

const Navigation = () => {
	const links = [ 'Home', 'About', 'Skills', 'Experience', 'Portfolio' ];

	return (
		<div className="nav">
			<Container>
				<div>
					<a href="/home">
						<img className="nav__logo" src={Logo} alt="logo" />
					</a>
				</div>
				<div>
					<label className="nav__menu" for="toggle">
						<i class="fas fa-bars fa-lg" />
					</label>
					<input type="checkbox" id="toggle" />
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
			</Container>
		</div>
	);
};
export default Navigation;
