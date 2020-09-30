import React from 'react';
import '../css/About.css';
import aboutImg from '../assets/about.png';
import { Container, Row, Col } from 'react-bootstrap';
import resume from '../assets/MRresume.pdf';

const About = () => {
	const about =
		"Hello, I'm Mario, I am a Full-stack web developer based on Washington, DC. I have expericen with multiple programing langues as well as data base. I have experice with: ";
	const technologies = [
		'JavasScript',
		'RubyonRails',
		'React',
		'Redux',
		'Puppetter',
		'Node',
		'BootstrapUI',
		'SemanticUI',
		'HTML',
		'CSS'
	];
	const traits = [
		{
			animation: 'fade-right',
			title: 'Frontend Development',
			description:
				'Build mobile and desktop responsive websites utilizing the latest technologies compatible with popular browsers. CSS, HTML, JavaScript, as well as frameworks like react, redux, angular ',
			icon: <i className="fa fa-code iron-color" />
		},
		{
			animation: 'fade-up',
			title: 'Backend Development',
			description:
				'Design and architecture of server-side web application logic and integration. Dada base design as well as API development.',
			icon: <i className="fas fa-server" />
		},
		{
			animation: 'fade-left',
			title: 'UI Design',
			description:
				"Design a product that is attractive and convenient for users. Crafting an interactive structure that facilitates an enjoyable experience for business's websites.",
			icon: <i className="fas fa-pencil-ruler" />
		}
	];

	return (
		<div className="about" id="about">
			<Container data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="1000">
				<Row>
					<Col className="about__col1">
						<img className="about__img" src={aboutImg} alt="aboutImage" />
					</Col>
					<Col className="about__col2">
						<div
							data-aos="slide-left"
							data-aos-easing="ease-in-out"
							data-aos-duration="1000"
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
											data-aos-easing="ease-in-out"
											data-aos-duration="1000"
											key={tech}
										>
											<span>{tech}</span>
										</li>
									))}
								</Row>
							</div>
							<div className="about__donwload">
								<a download="resume" href={resume} className="about__donwloadBtn">
									Resume &nbsp;
									<i className="fas fa-download" />
								</a>
							</div>
						</div>
					</Col>
				</Row>
				<h1
					style={{
						color: 'white',
						textAlign: 'center',
						marginTop: '15%',
						fontSize: '30px',
						marginBottom: '5%'
					}}
				>
					What I do
				</h1>
				<Row>
					{traits.map((trait) => (
						<Col
							data-aos={trait.animation}
							data-aos-easing="ease-in-out"
							data-aos-duration="1000"
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
