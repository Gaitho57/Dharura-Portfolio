import React from 'react';
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2';

const Learn = () => {
	return (
		<div>
			<Navbar />
			<HeroImg2 heading='Learn' text='This section teaches you about various disasters and safety procedures' />
			<Footer />
		</div>
		);
};

export default Learn;