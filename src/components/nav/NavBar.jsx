import React from 'react';
import { Link } from 'react-router-dom';
import { BannerPrincipal } from '../header/Header';

export const NavBar = () => {
    return (
			<div>
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
						<ul className='user__info'>
							<li>Jesus Hernandez</li>
							<li>
								<a className=''>Logout</a>
							</li>
						</ul>
					</div>
            </header>
            
			</div>
		);
};
