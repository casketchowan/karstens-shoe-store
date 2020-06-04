import React from 'react';

export default function ShoeList(props) {
	return (
		<table className='table'>
			<thead style={{"color": "white"}}>
				<tr>
					<th>ID</th>
					<th>Type</th>
					<th>Size</th>
				</tr>
			</thead>
			<tbody style={{"color": "white"}}>
				{props.shoes.map((shoe) => {
					return (
						<tr key={shoe.id}>
							<td>{shoe.id}</td>
							<td>{shoe.type}</td>
							<td>{shoe.size}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

