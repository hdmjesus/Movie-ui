import { types } from '../types/types';

export const moviesReducer = (
	state = {
		myList: [],
		actions: [],
		animations: [],
		popular: [],
	},
	action
) => {
	switch (action.type) {
		case types.movieAddList:
			if (
				state.myList.filter((element) => element.id == action.payload.id)
					.length !== 0
			) {
				return state;
			}
			return {
				...state,
				myList: [action.payload, ...state.myList],
			};

		case types.movieDeleteList:
			console.log(action.payload);
			return {
				...state,
				myList: state.myList.filter((movie) => movie.id !== action.payload.id),
			};

		case types.movieSetCategories:
			return {
				...state,
				actions: action.payload.action,
				popular: action.payload.popular,
				animations: action.payload.animation,
			};

		case types.movieLogout:
			return {
				...state,
				myList: [],
				actions: [],
				animations: [],
				popular: [],
			};

		default:
			return state;
	}
};
