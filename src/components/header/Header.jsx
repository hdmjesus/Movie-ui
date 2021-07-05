import React from 'react';
import { PlayNow } from '../ui/PlayNow';
import { AddList } from '../ui/AddList';
import banner from '../../../public/assets/images/raya.webp';
import { NavBar } from '../nav/NavBar';

export const Header = () => {
	return (
		<section
			className='banner'
			style={{
				backgroundImage: `url(${banner})`,
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center top',
			}}>
			<NavBar />
			<article className='banner__container'>
				<div className='banner__details'>
					<p>Raya and the last dragon</p>
					<div className='banner__buttons'>
						<PlayNow />
						<AddList />
					</div>
				</div>
			</article>
		</section>
	);
};
