import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';


export const MovieUI = () => {
  
	return (
		<Provider store={store}>
			<AppRouter />
		</Provider>
	);
};
