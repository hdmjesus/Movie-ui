import React from 'react'
import { useDispatch } from 'react-redux';
import { movieAddList, movieDeleteList } from '../../../actions/moviesAction';
import { AddList } from '../../ui/AddList';
import { PlayNow } from '../../ui/PlayNow';
import { RemoveList } from '../../ui/RemoveList';

export const CategorieListItem = (props) => {
const dispatch = useDispatch()
	const { id, poster_path, isList } = props;
	
	const handleAddList = (e) => {
		
		dispatch(movieAddList(props));
	
	}
	const handleDeleteList = (e) => {
		dispatch(movieDeleteList(props));
	};
	
	return (
		<article className='categorie__item'>
			<img
				className='item-image'
				src={`http://image.tmdb.org/t/p/w500${poster_path}`}
				alt=''
			/>

			<figure className='categorie-buttons'>
				<PlayNow />
				{isList ? (
					<RemoveList onClick={handleDeleteList} />
				) : (
					<AddList onClick={handleAddList} />
				)}
			</figure>
		</article>
	);
};
