import React from 'react';

export default function PaperList(props) {
	return (
		<table className='table'>
			<thead>
				<tr>
					<th>ID</th>
					<th>Type</th>
					<th>Price</th>
					<th>Color</th>
					<th>Size</th>
				</tr>
			</thead>
			<tbody>
				{props.papers.map((paper) => {
					return (
						<tr key={paper.id}>
							<td>{paper.id}</td>
							<td>{paper.type}</td>
							<td>{paper.price}</td>
							<td>{paper.color}</td>
							<td>{paper.size}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

