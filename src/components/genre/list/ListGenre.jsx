import React from 'react';
import { GenreItem } from './GenreItem';

export const ListGenre = ({ children }) => {
	return (
		<section className='genre'>
			<article className='genre__container'>{children}</article>
		</section>
	);
};
