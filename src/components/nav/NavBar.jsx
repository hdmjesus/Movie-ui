import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/authAction';
import { categotiesLogout } from '../../actions/moviesAction';

export const NavBar = () => {
	const dispatch = useDispatch();
	const { auth } = useSelector((state) => state);
	const handleLogout = () => {
		dispatch(startLogout());
		dispatch(categotiesLogout());
	};

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
				<ul className='user__info'>
					<li>{auth.name}</li>
					<li>
						<a className='' onClick={handleLogout}>
							Logout
						</a>
					</li>
				</ul>
			</div>
		</header>
	);
};
