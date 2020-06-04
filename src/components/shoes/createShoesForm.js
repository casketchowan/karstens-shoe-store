import React from 'react';
import TextInput from '../common/TextInput';

export default function CreateShoesForm(props) {
	return (
		<form onSubmit={props.onSubmit}>
			<TextInput
				id='type'
				label='type'
				onChange={props.onChange}
				onSubmit={props.onSubmit}
				name='type'
				value={props.shoe.type}/>
			<TextInput
				id='size'
				label='size'
				onChange={props.onChange}
				onSubmit={props.onSubmit}
				name='size'
				value={props.shoe.size}/>

			<button type='submit' className='btn btn-primary'>
				Submit
			</button>
		</form>
	);
}
