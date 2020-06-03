import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from 'react-router-dom';

// class HelloWorld extends React.Component {
// 	render() {
// 		return <h1>Hello World!</h1>;
// 	}
// }

// function HelloWorld() {
// 	return <h1>Hello World!</h1>;
// }

// const HelloWorld = () => {
// 	return (
// 		<div>
// 			<h1>Hello World!</h1>
// 			<Greeting />
// 		</div>
// 	);
// };

// function Greeting() {
// 	return <p>Have a Good day!</p>;
// }

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById('root')
);
