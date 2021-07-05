import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";
export const PublicRoute = ({
  isAuthenticated,
  // Este component es el componente que se le pasa como propiedad al componente PrivateRoute y contiene lo que se va a renderizar
  // se renombra con la 'C' mayuscula para seguir con la sistaxis de los componentes
  component: Component,
  // ...rest quiere decir que extrae el resto de propiedades que le fueron pasadas al componenten
  ...rest
}) => {
  return (
    <Route
      // Este ...rest contiene lo que es el exact , path o cualquier otra propiedad que se le paso al componente PrivateRouter
      // al momento de mandarlo a llamar (Ver AppRouters)
      {...rest}
      component={(props) => {
        return !isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        );
      }}
    />
  );
};

PublicRoute.prototype = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
