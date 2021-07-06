import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthRouter } from "./AuthRouter";
import { firebase } from "../firebase/config";
import { useDispatch } from "react-redux";
import { login } from "../actions/authAction";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import {HomeScreen} from '../screens/HomeScreen'
import { startLoadingMovies } from '../actions/moviesAction';
export const AppRouter = () => {
    const dispatch = useDispatch();
    const [checking, setCheaking] = useState(true);
    const [IsLoginIn, setIsLoginIn] = useState(false);
  
    useEffect(() => {
        
      // esto crea un objeto observable, es decir siempre estara escuchando el estado la autenticacion
      firebase.auth().onAuthStateChanged(async (user) => {
     
        if (user?.uid) {
					// setIsLoginIn en true indica que se esta haciendo el proceso de login del usuario, consultando eso en firebase
					setIsLoginIn(true);
					dispatch(login(user.uid, user.displayName));
				} else {
          // setIsLoginIn en false indica que el proceso de consulta en firebase termino.
          setIsLoginIn(false);
            dispatch(startLoadingMovies());
        }
        // setCheaking es la funcion que cambia el estado cheaking que se usa para asegurar si esta verificando
        // que se esta logueado con un usuario y cuando termina esta proceso.
        setCheaking(false);
      });

      dispatch(startLoadingMovies());
    }, [dispatch, setCheaking]);
  
    // Esta condicion se establece para que las rutas de abajo no se rendericen a la primera, si no que se
    // rendericen cuando se tenga la certeza si se esta logueado o no con un usuario para asi saber a que
    // ruta debe acceder.
    if (checking) {
      return <h1>Espere...</h1>;
    }
    
    return (
      <Router>
        <>
          <Switch>
            <PublicRoute
              path="/auth"
              component={AuthRouter}
              isAuthenticated={IsLoginIn}
            />
            <PrivateRoute
              exact
              path="/"
              component={HomeScreen}
              isAuthenticated={IsLoginIn}
            />
          </Switch>
        </>
      </Router>
    );
  };
  