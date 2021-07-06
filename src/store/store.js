import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "../reducers/authReducer";
import { moviesReducer } from '../reducers/moviesReducer';
import { uiReducer } from "../reducers/uiReducer";

// combineReducers lo que hace es combinar todos los reducer de la aplicacion para posteriormente pasarlo al store
//  como parametro,dado que el store no puede recibir simultaneos reducers

const reducers = combineReducers({
	auth: authReducer,
	ui: uiReducer,
	movies: moviesReducer,
});

// composeEnhancers es una variable que se crea con la finalidad de añadir distintos middleware a la vez al store
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
