import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Home from './components/Home';

const App = () => {
	return (
		<div id="home" className="app" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="1300">
			<Navigation />
			<Home />
			<About />
			<Skills />
			<Experience />
			<Portfolio />
			<p className="app__2020">© 2020 Mario Rodriguez</p>
		</div>
	);
};

export default App;
