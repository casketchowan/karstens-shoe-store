import React from 'react';
import PaperList from './paperList';
import { Link } from 'react-router-dom';

export default class PaperPage extends React.Component {
	// optionally, you could set state in the constructor
	// constructor(){
	//     super();
	//     this.state ={
	//         papers:[]
	//     }
	// }

	state = {
		papers: [],
	};

	componentDidMount() {
		fetch('http://localhost:5000/paper')
			.then((response) => response.json())
			.then((data) => {
				this.setState({
					papers: data,
				});
			})
			.catch((err) => console.log(err));
	}

	render() {
		return (
			<div>
				<Link to='/papers/create'>
					<button className='btn btn-primary'>Make Paper</button>
				</Link>
				<h3>Paper Page</h3>
				<PaperList papers={this.state.papers} />
			</div>
		);
	}
}
