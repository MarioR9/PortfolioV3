import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/Home.css';

const Home2 = () => {
	return (
		<div className="home2">
			<Container>
				<Row>
				<Col className="home2__col2">
					
						<div>
							<div className="home__header">
								<h2>{name.first + ' ' + name.last}</h2>
								<h4>Software Engineer</h4>
							</div>
							
						</div>
					</Col>
					<Col>
						<img src={profile} alt="avatar" className="home__avatar" />	
					</Col>	
				</Row>
			</Container>
		</div>
	);
};
export default Home2;
