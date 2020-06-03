import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
	const activeStyle = { color: 'orange' };
	return (
		<nav>
			<NavLink to='/' activeStyle={activeStyle} exact>
				Home
			</NavLink>
			{' | '}
			<NavLink to='/papers' activeStyle={activeStyle}>
				Paper
			</NavLink>
			{' | '}
			<NavLink to='/about' activeStyle={activeStyle}>
				About
			</NavLink>
		</nav>
	);
};

export default Navbar;
