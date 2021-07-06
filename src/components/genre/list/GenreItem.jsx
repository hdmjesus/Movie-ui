import React from 'react'

export const GenreItem = ({ url, title, titles, onMouseOver, onMouseLeave }) => {
	
	return (
		<div
			className='genre-Item'
			onMouseOver={onMouseOver}
			onMouseLeave={onMouseLeave}>
			<img className='genre-img' src={url} alt={title} />
			<div className='genre-details'>
				<p className='genre__title'>{title}</p>
				<p className='genre__count'>{titles}</p>
			</div>
		</div>
	);
};
