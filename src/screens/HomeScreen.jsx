import React, { useState } from 'react';
import { Header } from '../components/header/Header';

import { ListGenre } from '../components/genre/list/ListGenre';
import { CategorieList } from '../components/categorie/list/List';
import { GenreItem } from '../components/genre/list/GenreItem';
import { CategorieListItem } from '../components/categorie/list/Item';
import { useSelector } from 'react-redux';

import actionImg from '../../public/assets/images/action.webp';
import animationImg from '../../public/assets/images/animation.webp';
import fantasyImg from '../../public/assets/images/fatasy.webp';
import documentalImg from '../../public/assets/images/documental.webp';

import documentalGif from '../../public/assets/images/giphy.gif';

export const HomeScreen = () => {
	const [IsHover, setIsHover] = useState({
		animation: false,
		action: false,
		fantasy: false,
		documental: false,
	});
	
	const movies = useSelector((state) => state.movies);
	const urlAnimation = 'https://media.giphy.com/media/RpfIXomvjCh8I/giphy.gif';
	const urlAction =
		'https://media.giphy.com/media/8PadKgGXNBmMrFn8Ce/giphy.gif';
	const urlFantsy =
		'https://media.giphy.com/media/gDU3K2ooKk9VXMBara/giphy.gif';


	const handleAnimationGifOn = (e) => {
		if (e.target.alt === 'Fantasy') {
			setIsHover((state) => {
				return { ...state, fantasy: true };
			});
		} else if (e.target.alt === 'Animation') {
			setIsHover((state) => {
				return { ...state, animation: true };
			});
		} else if (e.target.alt === 'Action') {
			setIsHover((state) => {
				return { ...state, action: true };
			});
		} else if (e.target.alt === 'Documental') {
			
			setIsHover((state) => {
				return { ...state, documental: true };
			});
		}
		

	};
	
	const handleAnimationGifOff = (e) => {
		console.log(e.target.alt);
		if (e.target.alt == 'Fantasy') {
			setIsHover((state) => {
				return { ...state, fantasy: false };
			});
		} else if (e.target.alt === 'Animation') {
			setIsHover((state) => {
				return { ...state, animation: false };
			});
		} else if (e.target.alt === 'Action') {
			setIsHover((state) => {
				return { ...state, action: false };
			});
		} else if (e.target.alt === 'Documental') {
			setIsHover((state) => {
				return { ...state, documental: false };
			});
		}
	};

	return (
		<>
			<Header />
			<ListGenre>
				<GenreItem
					url={!IsHover.animation ? animationImg : urlAnimation}
					title='Animation'
					titles='90'
					onMouseOver={handleAnimationGifOn}
					onMouseLeave={handleAnimationGifOff}
				/>
				<GenreItem
					url={!IsHover.action ? actionImg : urlAction}
					title='Action'
					titles='50'
					onMouseOver={handleAnimationGifOn}
					onMouseLeave={handleAnimationGifOff}
				/>
				<GenreItem
					url={!IsHover.fantasy ? fantasyImg : urlFantsy}
					title='Fantasy'
					titles='20'
					onMouseOver={handleAnimationGifOn}
					onMouseLeave={handleAnimationGifOff}
				/>
				<GenreItem
					url={!IsHover.documental ? documentalImg : documentalGif}
					title='Documental'
					titles='36'
					onMouseOver={handleAnimationGifOn}
					onMouseLeave={handleAnimationGifOff}
				/>
			</ListGenre>

			{movies.myList.length > 0 && (
				<CategorieList categorie='My list'>
					{movies.myList.map((item) => {
						return <CategorieListItem key={item.id} {...item} isList />;
					})}
				</CategorieList>
			)}

			<CategorieList categorie='Actions'>
				{movies &&
					movies.actions.map((item) => {
						return <CategorieListItem key={item.id} {...item} />;
					})}
			</CategorieList>

			<CategorieList categorie='Animation'>
				{movies &&
					movies.animations.map((item) => {
						return <CategorieListItem key={item.id} {...item} />;
					})}
			</CategorieList>

			<CategorieList categorie='Popular'>
				{movies &&
					movies.popular.map((item) => {
						return <CategorieListItem key={item.id} {...item} />;
					})}
			</CategorieList>
		</>
	);
};
