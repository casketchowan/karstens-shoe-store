import React from 'react';
import { Link } from 'react-router-dom';
//import logo from '../../pictures/logo.jpg';

/*
function Header() {
	return <img src={logo} alt="Logo" />;
}
*/
export default class HomePage extends React.Component {
	render() {
		return (
			<div className='jumbotron text-center'>
				<h1>Welcome To Karstens Shoe Store!</h1>
				<Link to='/about'>
					<button className='btn btn-dark'>About</button>
				</Link>
			</div>
		);
	}
}
