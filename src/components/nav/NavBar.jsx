import React from 'react';

export const NavBar = () => {
	return (
		<header className='header'>
			<nav className='header__nav'>
				<ul>
					<li>Home</li>
					<li>Movies</li>
					<li>Series</li>
					<li>Kids</li>
				</ul>
			</nav>
			<div className='user'>
				<figure className='user__container'>
					<img
						src='https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png'
						alt='user'
					/>
				</figure>
			</div>
		</header>
	);
};
