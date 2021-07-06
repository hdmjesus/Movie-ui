import React from 'react';

export const RemoveList = ({ onClick }) => {
	return (
		<div className='remove-list' onClick={onClick}>
			<p>Remove</p>
		</div>
	);
};
