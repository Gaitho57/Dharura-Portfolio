import React from 'react';
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2';

const Contacts = () => {
	return (
		<div>
			<Navbar />
			<HeroImg2 heading='Contacts' text='This section gives contacts for various emergency responders in the region' />
			<Footer />
		</div>
		);
};

export default Contacts;