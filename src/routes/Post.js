import React from 'react';
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2';
const Post = () => {
	return (
		<div>
			<Navbar />
			<HeroImg2 heading='Posts' text='Here you can post and comment' />
			<Footer />
		</div>
		);
};

export default Post;