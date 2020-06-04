import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
	const activeStyle = { color: 'purple' };
	return (
		<nav>
			<NavLink to='/' activeStyle={activeStyle} exact>
				Home
			</NavLink>
			{' | '}
			<NavLink to='/shoes' activeStyle={activeStyle}>
				Shoes
			</NavLink>
			{' | '}
			<NavLink to='/about' activeStyle={activeStyle}>
				About
			</NavLink>
		</nav>
	);
};

export default Navbar;
