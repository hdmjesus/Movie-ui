import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import validator from "validator";
import {
  startGoogleLogin,
  startLoginEmailPassword,
} from "../actions/authAction";
import { removeError, setError } from "../actions/uiAction";
import { GoogleBtn } from "../components/ui/GoogleBtn";
import { useForm } from "../hooks/useForm";

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.ui);

  const [formValue, HandleInputChange] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formValue;

  const handleLogin = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(startLoginEmailPassword(email, password));
    }
  };

  const isFormValid = () => {
    if (!validator.isEmail(email)) {
      dispatch(setError("Email is not valid"));
      return false;
    }
    dispatch(removeError());
    return true;
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };
  return (
    <>
      <h3 className="auth__title">Login</h3>

      <form action="" onSubmit={handleLogin}>
        <input
          className="auth__input"
          type="text"
          placeholder="E-mail"
          name="email"
          autoComplete="off"
          value={email}
          onChange={HandleInputChange}
        />
        <input
          className="auth__input"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={HandleInputChange}
        />
        <button
          className=" auth__btn btn btn-primary btn-block"
          type="submit"
          disabled={loading}
        >
          Login
        </button>

        <hr />
        <div className="auth__social-networks">
          <p>Login with social networks</p>
          <GoogleBtn handleGoogleLogin={handleGoogleLogin} />
        </div>
        <Link to="/auth/register" className="auth__link-register link">
          Create new account
        </Link>
      </form>
    </>
  );
};
