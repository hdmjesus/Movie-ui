import { types } from '../types/types';
import { auth, firebase, googleAuthProvider } from '../firebase/config';
import { finishLoading, startLoading } from './uiAction';
import Swal from 'sweetalert2';


export const startLoginEmailPassword = (email, password) => {
 
	return (dispatch) => {
		dispatch(startLoading());
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(({ user }) => {
				
				dispatch(login(user.uid, user.displayName));
				dispatch(finishLoading());
			})
			.catch((e) => {
				console.log(e);
				Swal.fire('Error', `${e}`, 'error');
				dispatch(finishLoading());
			});
	};
};

export const startGoogleLogin = () => {
	return (dispatch) => {
		firebase
			.auth()
			.signInWithPopup(googleAuthProvider)
			.then(({ user }) => {
				dispatch(login(user.uid, user.displayName));
			});
	};
};

export const startRegisterWithEmailPasswordName = (email, password, name) => {
	return (dispatch) => {
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(async ({ user }) => {
				await user.updateProfile({ displayName: name });
				dispatch(login(user.uid, user.displayName));
			})
			.catch((e) => {
				Swal.fire('Error', `${e}`, 'error');
			});
	};
};

export const login = (uid, displayName) => {
	return {
		type: types.login,
		payload: { uid, displayName },
	};
};

export const startLogout = () => {
	return async (dispatch) => {
		await firebase.auth().signOut();

		dispatch(logout());
	};
};

export const logout = () => {
	return {
		type: types.logout,
	};
};
