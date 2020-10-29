import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/Home.css';
import profile from '../assets/avatar.jpeg';
//new Logo?
//new navigation bar - chang color on scroll

const Home = () => {
	const name = { first: 'Mario', last: 'Rodriguez' };
	const details = {
		email: 'mariorodriguezan@gmail.com',
		phone: 'on Demand',
		location: 'Washington, DC'
	};

	return (
		<div className="home">
			<Container>
				<Row>
					<Col className="home__col2">
						<div className="home__tag">
							<span>Hello I'm</span>
						</div>
						<div>
							<div className="home__header">
								<h2>{name.first + ' ' + name.last}</h2>
								<h4>Software Engineer</h4>
							</div>
							<div className="home__details">
								<li>
									<p>
										<i className="fas fa-envelope" />
										{details.email}
									</p>
								</li>
								<li>
									<p>
										<i className="fa fa-phone" />
										{details.phone}
									</p>
								</li>
								<li>
									<p>
										<i className="fa fa-map-marker" />
										{details.location}
									</p>
								</li>
							</div>
							<div>
								<ul className="home__social">
									<li>
										<a href="https://github.com/MarioR9">
											<i className="fab fa-github fa-lg" />
										</a>
									</li>
									<li>
										<a href="https://www.linkedin.com/in/mario-rodriguezan/">
											<i className="fab fa-linkedin-in" />
										</a>
									</li>
									<li>
										<a href="https://medium.com/@mariorodriguezan">
											<i className="fab fa-medium-m" />
										</a>
									</li>
								</ul>
							</div>
						</div>
					</Col>
					<Col
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-duration="1000"
						className="home__col1"
					>
						<img src={profile} alt="avatar" className="home__avatar" />
					</Col>
				</Row>
			</Container>
		</div>
	);
};
export default Home;
