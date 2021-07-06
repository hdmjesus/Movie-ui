import { apiKeyTMDB, apiUrl, genreUrl } from '../config';

export const loadMoviesPopular = async () => {
	let popular = [];
	fetch(`${apiUrl}movie/popular${apiKeyTMDB}`)
		.then((resp) => resp.json())
		.then(({ results }) => {
			popular.push(...results);
		});
	return popular;
};

export const loadMoviesAction = async () => {
	let action = [];
	fetch(`${apiUrl}discover/movie${apiKeyTMDB}${genreUrl}28`)
		.then((resp) => resp.json())
		.then(({ results }) => {
			action.push(...results);
		});
	return action;
};

export const loadMoviesAnimation = async () => {
	let animation = [];
	fetch(`${apiUrl}discover/movie${apiKeyTMDB}${genreUrl}16`)
		.then((resp) => resp.json())
		.then(({ results }) => {
			animation.push(...results);
		});
	return animation;
};
