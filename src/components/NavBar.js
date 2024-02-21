import './navbarstyles.css';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	
	const [color, setColor] = useState(false);
	const changeColor = () =>{
		if(window.scrollY >=100){
			setColor(true);
		}
		else {
			setColor(false);
		}
	};
	window.addEventListener("scroll", changeColor);

	return (
		<div className={color ? 'header header-bg': 'header'}>
			<Link to='/'>
				<h1>Dharura</h1>
			</Link>
			<ul className={click ? 'nav-menu active' : 'nav-menu'}>
				<React.Fragment>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/map'>Map</Link>
					</li>
					<li>
						<Link to='/post'>Post</Link>
					</li>
					<li>
						<Link to='/learn'>Learn</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
					<li>
						<Link to='/contacts'>Contacts</Link>
					</li>
				</React.Fragment>
			</ul>
			<div className='hamburger' onClick={handleClick}>
				{click ? (
					<FaTimes size={20} style={{ color: "#fff" }} />
				) : (
					<FaBars size={20} style={{ color: "#fff" }} />
				)}
			</div>
		</div>
	);
};

export default Navbar;