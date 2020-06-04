import React from 'react';
import ShoeList from './shoeList';
import { Link } from 'react-router-dom';
//import {getShoes, getShoesById, createShoes, updateShoes, deleteShoes} from '../config/queries';

//const express = require('express');

export default class ShoePage extends React.Component {
	// optionally, you could set state in the constructor
	// constructor(){
	//     super();
	//     this.state ={
	//         papers:[]
	//     }
	// }

	state = {
		shoes: [],
	};

	componentDidMount() {
		fetch('http://localhost:3000/shoes')
			.then((response) => response.json())
			.then((data) => {
				this.setState({
					shoes: data,
				});
			})
			.catch((err) => console.log(err));
	}

	render() {
		return (
			<div style={{"color": "white"}}>
			<div className='text-center'>
				<h3>Shoes!!!</h3>
			</div>
				<ShoeList shoes={this.state.shoes} />
				<Link to='/shoes/create'>
					<button className='btn btn-primary'>Create Shoes</button>
				</Link>
				<Link to='/shoes/get'>
					<button className="btn btn-secondary">Get All Shoes</button>
				</Link>
				<Link to='/shoes/get-by-id'>
					<button className="btn btn-success">Get Shoes by ID</button>
				</Link>
				<Link to='/shoes/update'>
					<button className="btn btn-danger">Update Shoes</button>
				</Link>
				<Link to='/shoes/delete'>
					<button className="btn btn-warning">Delete Shoes</button>
				</Link>		
			</div>
		);
	}
}
