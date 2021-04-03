import React, { useState } from 'react';
import '../css/Portfolio.css';

import translateme from '../assets/translateme.png';
import rickandmorty1 from '../assets/rickMorty1.png';
import tonester from '../assets/tonester.png';
import uber from '../assets/uber.png';
import portfoliov1 from '../assets/portfoliov1.png';
import portfoliov2 from '../assets/portfoliov2.png';
import marsrover from '../assets/marsrover.png';
import portfoliov3 from '../assets/portfoliov3.png';

import { Container, Row, Col, Modal } from 'react-bootstrap';

//Rails data to fetch 

const Portfolio = () => {
	const pages = [
		{
			img: translateme,
			name: 'translateme'
		},
		{
			img: tonester,
			name: 'tonester'
		},
		{
			img: uber,
			name: 'uberEats Hotzones'
		},
		/*{
			img: portfoliov1,
			name: 'portfoliov1'
		},*/
		{
			img: rickandmorty1,
			name: 'rick and morty adventures'
		},
		/*{
			img: portfoliov2,
			name: 'portfoliov2'
		},*/
		{
			img: marsrover,
			name: 'marsrover'
		},
		/*{
			img: portfoliov3,
			name: 'portfoliov3'
		}*/
	];
	const projects = [
		{
			title: 'translateme',
			description:
				'Translateme uses a machine learning technology to classify and translate images into different languages. Once the image is captured, users can flip the image to reveal the desired translated word for the image.',
			technologies: [ 'Javascript', 'React', 'RubyonRails', 'IBMWatson', 'Cloudinary', 'SemanticUI' ],
			images: [
				{
					img: 'https://github.com/MarioR9/TranslateMeFrontend/raw/master/ReadmeImages/categoryCards.png',
					description: "User's selected category page"
				},
				{
					img: 'https://github.com/MarioR9/TranslateMeFrontend/raw/master/ReadmeImages/selectLanguage.png',
					description: 'Translation process'
				}
			],
			social: [
				{
					icon: <i className="fab fa-github portfolio__fa-lg" />,
					link: 'https://github.com/MarioR9/TranslateMeFrontend'
				},
				{
					icon: <i className="fab fa-youtube portfolio__fa-lg" />,
					link: 'https://www.youtube.com/watch?v=M7LLMVlS6hg&feature=emb_logo'
				}
			]
		},
		{
			title: 'tonester',
			description:
				'Tonester was build using vanilla javascript for the frontend and rails for the backend. Tonester allows users to save albums using Spotify’s API',
			technologies: [ 'JavaScript', 'HTML', 'CSS' ],
			images: [
				{
					img: 'https://github.com/MarioR9/tonester_frontend/raw/master/ReadmeImages/login.png',
					description: 'Authentication page'
				},
				{
					img: 'https://github.com/MarioR9/tonester_frontend/raw/master/ReadmeImages/newUser.png',
					description: 'New user page'
				}
			],
			social: [
				{
					icon: <i className="fab fa-github portfolio__fa-lg" />,
					link: 'https://github.com/MarioR9/tonester_frontend'
				},
				{
					icon: <i className="fab fa-youtube portfolio__fa-lg" />,
					link: 'https://www.youtube.com/watch?v=bQAIDucJ6Dk&feature=emb_logo'
				}
			]
		},
		{
			title: 'uberEats Hotzones',
			description:
				"Using Puppeteer.js to scrape data from google maps and Express.js to collect and fetch data. The application displays information to a user about how busy the restaurants are around a specific US location. the app will start with a map showing the user's current location, a search input fill, and a search button.",
			technologies: [ 'ReactNative', 'Expo', 'Express' ],
			images: [
				{
					img: 'https://github.com/MarioR9/UberEats_HotZones/raw/master/ReadmeImages/Startapp.png',
					description: 'Search page'
				},
				{
					img: 'https://github.com/MarioR9/UberEats_HotZones/raw/master/ReadmeImages/searchtap.png',
					description: "User's Current location"
				}
			],
			social: [
				{
					icon: <i className="fab fa-github portfolio__fa-lg" />,
					link: 'https://github.com/MarioR9/UberEats_HotZones'
				}
			]
		},

		/*{
			title: 'portfoliov1',
			description:
				'My first portfolio site, it is powered by React, HTML, CSS, and bootstrap UI. The website is host by Heroku. It Holds my basic information as well as some of my projects and a contact component that will email me whenever someone tries to get in touch with me.',
			technologies: [ 'React', 'JavaScript', 'HTML', 'CSS', 'BootstrapUI' ],
			images: [
				{
					img: 'https://github.com/MarioR9/Portfolio/raw/master/ReadmeImages/home.png',
					description: 'Main page'
				},
				{
					img: 'https://github.com/MarioR9/Portfolio/raw/master/ReadmeImages/projects.png',
					description: 'projects'
				}
			],
			social: [
				{
					icon: <i className="fab fa-github portfolio__fa-lg" />,
					link: 'https://github.com/MarioR9/Portfolio'
				},
				{
					icon: <i class="fas fa-laptop-code portfolio__fa-lg" />,
					link: 'https://mariorodriguez.herokuapp.com/'
				}
			]
		},*/
		{
			title: 'rick and morty adventures',
			description:
				'Rick and Morty Adventures is an rpg game that allows you to play as Rick and capture different Morties. In addition, users have to look after each Morty they capture and help them level up by keeping them healthy and fed.',
			technologies: [ 'React', 'SemanticUI', 'RubyonRails', 'HTML', 'CSS' ],
			images: [
				{
					img: 'https://github.com/MarioR9/RickAndMortyFrontend/raw/master/ReadmeImages/login.png',
					description: 'Authentication Page'
				},
				{
					img: 'https://github.com/MarioR9/RickAndMortyFrontend/raw/master/ReadmeImages/captureMorty.png',
					description: 'Collision System'
				}
			],
			social: [
				{
					icon: <i className="fab fa-github portfolio__fa-lg" />,
					link: 'https://github.com/MarioR9/RickAndMortyFrontend'
				},
				{
					icon: <i className="fab fa-youtube portfolio__fa-lg" />,
					link: 'https://www.youtube.com/watch?v=0KokNpVvjeA&feature=emb_logo'
				}
			]
		},
		/*{
			title: 'portfoliov2',
			description:
				'It is a single page application powered by React, HTML, CSS, and Bootstrap UI. The website is host by firebase. Multiple pages containing information about me and some of my projects. ',
			technologies: [ 'React', 'HTML', 'SCSS', 'BootstrapUI' ],
			images: [
				{
					img: 'https://github.com/MarioR9/portfolio2.0/raw/master/ReadmeImages/portfoliov2.png',
					description: 'About Page'
				},
				{
					img: 'https://github.com/MarioR9/portfolio2.0/raw/master/ReadmeImages/projects.png',
					description: 'Projects page'
				}
			],
			social: [
				{
					icon: <i className="fab fa-github portfolio__fa-lg" />,
					link: 'https://github.com/MarioR9/portfolio2.0'
				},
				{
					icon: <i class="fas fa-laptop-code portfolio__fa-lg" />,
					link: 'https://portfolio-7f8cc.web.app/'
				}
			]
		},*/
		{
			title: 'marsrover',
			description:
				'NASA intends to land robotic rovers on Mars to explore a particularly curious-looking plateau. The rovers must navigate this rectangular plateau in a way so that their on board cameras can get a complete image of the surrounding terrain to send back to Earth. A simple two-dimensional coordinate grid is mapped to the plateau to aid in rover navigation. Each point on the grid is represented by a pair of numbers X Y which correspond to the number of points East or North, respectively, from the origin. The origin of the grid is represented by 0 0 which corresponds to the southwest corner of the plateau. 0 1 is the point directly north of 0 0, 1 1 is the point immediately east of 0 1, etc. A rover’s current position and heading are represented by a triple X Y Z consisting of its current grid position X Y plus a letter Z corresponding to one of the four cardinal compass points, N E S W. For example, 0 0 N indicates that the rover is in the very southwest corner of the plateau, facing north. NASA remotely controls rovers via instructions consisting of strings of letters. Possible instruction letters are L, R, and M. L and R instruct the rover to turn 90 degrees left or right, respectively (without moving from its current spot), while M instructs the rover to move forward one grid point along its current heading. Your task is write an application that takes the test input (instructions from NASA) and provides the expected output (the feedback from the rovers to NASA). Each rover will move in series, i.e. the next rover will not start moving until the one preceding it finishes.',
			technologies: [ 'React', 'HTML', 'CSS', 'BootstrapUI' ],
			images: [
				{
					img: 'https://github.com/MarioR9/MarsRovers/raw/master/ReadmeImages/mars%20info.png',
					description: 'Mars Info'
				},
				{
					img: 'https://github.com/MarioR9/MarsRovers/raw/master/ReadmeImages/output.png',
					description: 'Output'
				}
			],
			social: [
				{
					icon: <i className="fab fa-github portfolio__fa-lg" />,
					link: 'https://github.com/MarioR9/MarsRovers'
				},
				{
					icon: <i class="fas fa-laptop-code portfolio__fa-lg" />,
					link: 'https://marsrovers-7f6d9.web.app/'
				}
			]
		},
	/*	{
			title: 'portfoliov3',
			description:
				'Portfolio v3 it is powered by React, HTML, CSS, and BootstrapUI mainly. I use CSS for customization and animations. I used Fontawesome for icons and some CSS to customize color and size. Also, the page is mobile responsive from pocket phones to tablets. Portfolio V3 is hosted by Firebase',
			technologies: [ 'React', 'HTML', 'CSS', 'BootstrapUI' ],
			images: [
				{
					img: 'https://github.com/MarioR9/PortfolioV3/raw/master/ReadmeImages/main.png',
					description: 'Main Page'
				},
				{
					img: 'https://github.com/MarioR9/PortfolioV3/raw/master/ReadmeImages/about.png',
					description: 'About Page'
				}
			],
			social: [
				{
					icon: <i className="fab fa-github portfolio__fa-lg" />,
					link: 'https://github.com/MarioR9/PortfolioV3'
				},
				{
					icon: <i class="fas fa-laptop-code portfolio__fa-lg" />,
					link: 'https://github.com/MarioR9/PortfolioV3' //edit link with new site.
				}
			]
		}*/
	];
	const [ currentProject, setProject ] = useState([]);
	const handledSelectedProject = (e) => {
		setShow(true);
		setProject(projects.find((project) => project.title === e.target.alt));
	};
	const [ show, setShow ] = useState(false);
	const handleClose = () => setShow(false);

	return (
		<div id="portfolio">
			<Container data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="1000">
				<Container>
					<Modal
						size="xl"
						centered={true}
						enforceFocus={true}
						show={show}
						onHide={handleClose}
						className="portfolio__modalContainer"
					>
						<Modal.Header closeButton />
						<Modal.Body centered={true} scrollable={true}>
							<Container>
								<Row>
									<Col>
										<h2 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-duration="1000">
											{currentProject.title}
										</h2>
										<p data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-duration="1000">
											{currentProject.description}
										</p>
										<div className="portfolio__tech">
											<Row>
												{currentProject.length === 0 ? null : (
													currentProject.technologies.map((tech) => (
														<li
															data-aos="fade-up"
															data-aos-easing="ease-in-out"
															data-aos-duration="1200"
															key={tech}
														>
															<span>{tech}</span>
														</li>
													))
												)}
											</Row>
										</div>
										<div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="1200">
											<ul className="portfolio__social">
												{currentProject.length === 0 ? null : (
													currentProject.social.map((tech) => (
														<li key={tech.length}>
															<a key={tech.length} href={tech.link}>
																{tech.icon}
															</a>
														</li>
													))
												)}
											</ul>
										</div>
									</Col>
									<Col data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="1100">
										{currentProject.length === 0 ? null : (
											currentProject.images.map((project) => (
												<div>
													<img
														key={project.description}
														className="portfolio__img"
														src={project.img}
														alt="img"
													/>
													<p>{project.description}</p>
												</div>
											))
										)}
									</Col>
								</Row>
							</Container>
						</Modal.Body>
						<Modal.Footer />
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
								data-aos-easing="ease-in-out"
								data-aos-duration="1800"
								key={page.name}
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
