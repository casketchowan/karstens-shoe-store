import React, { useState } from 'react';
import CreateShoesForm from './createShoesForm';
import { toast } from 'react-toastify';

export default function CreateShoes(props) {
	const [shoe, setShoe] = useState({
		id: '',
		type: '',
		size: '',
	});

	function handleChange(event) {
		setShoe({ ...shoe, [event.target.name]: event.target.value });
	}

	function handleSubmit(event) {
		event.preventDefault();
		fetch('http://localhost:3000/shoes', {
			method: 'POST',
			headers: { 'Content-Type': '../../json' },
			body: JSON.stringify(shoe),
		})
			.then((result) => {
				toast.success('New Shoe Created!');
				props.history.push('/shoes');
			})
			.catch((err) => {
				toast.error('Something went wrong....');
			});
	}

	return (
		<div>
			<h3>Create a New Shoe Below</h3>
			<CreateShoesForm
				onSubmit={handleSubmit}
				onChange={handleChange}
				shoe={shoe}/>
		</div>
	);
}
