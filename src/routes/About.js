import React from 'react';
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2';
const About = () => {
	return (
		<div>
			<Navbar />
			<HeroImg2 heading='About' text='This section describes what the app is for' />
			<Footer />
		</div>
		);
};

export default About;