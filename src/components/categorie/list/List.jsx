import React from 'react';

export const CategorieList = ({ children, categorie }) => {
	
	return (
		<>
			<h2 className='categorie__title'>{categorie}</h2>
			<section className='categorie'>
				<article className='categorie__container'>{children}</article>
			</section>
		</>
	);
};
