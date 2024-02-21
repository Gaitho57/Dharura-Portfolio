import React from 'react';
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2';
import InteractiveMap from '../components/InteractiveMap';

const Map = () => {
	return (
		<div>
			<Navbar />
			<HeroImg2 heading='Map' text='Interactie map showcasing different disaster regions' />
			<InteractiveMap />
			<Footer />
		</div>
		);
};

export default Map;