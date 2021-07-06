import { types } from '../types/types';
import moduleName from '../helpers/loadMovies';
import {
	loadMoviesPopular,
	loadMoviesAction,
	loadMoviesAnimation,
} from '../helpers/loadMovies';

export const startLoadingMovies = () => {
	return async (dispatch, getState) => {
		const moviesPopular = await loadMoviesPopular();
		const moviesAction = await loadMoviesAction();
		const moviesAnimation = await loadMoviesAnimation();
		console.log(moviesAnimation);
		const categories = {
			popular: moviesPopular,
			action: moviesAction,
			animation: moviesAnimation,
		};

		dispatch(setCategoriesMovies(categories));
	};
};

export const movieAddList = (item) => {
	return { type: types.movieAddList, payload: { ...item } };
};

export const setCategoriesMovies = (categories) => {
	return {
		type: types.movieSetCategories,
		payload: { ...categories },
	};
};

export const categotiesLogout = () => {
	return {
		type: types.movieLogout,
	};
};

export const movieDeleteList = (item) => {
	return {
		type: types.movieDeleteList,
		payload: { ...item },
	};
};
