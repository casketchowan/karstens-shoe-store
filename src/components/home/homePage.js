import React from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends React.Component {
	render() {
		return (
			<div className='jumbotron'>
				<h1>Welcome To ABC Mart</h1>
				<Link to='/about'>
					<button className='btn btn-danger'>About</button>
				</Link>
			</div>
		);
	}
}
