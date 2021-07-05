import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";
import { removeError, setError } from "../actions/uiAction";
import { startRegisterWithEmailPasswordName } from "../actions/authAction";
export const RegistersCreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);

  const [formValue, HandleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formValue;

  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(startRegisterWithEmailPasswordName(email, password, name));
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("Name is required"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Email is not valid"));

      return false;
    } else if (password !== password2 || password.length < 5) {
      dispatch(setError("password should be equal or hight 5 caracteres"));

      return false;
    }
    dispatch(removeError());
    return true;
  };

  return (
    <div>
      <h3 className="auth__title">Register</h3>

      <form action="" onSubmit={handleRegister}>
        {msgError && (
          <div className="auth__alert-error">
            <p> {msgError}</p>
          </div>
        )}
        <input
          className="auth__input mt-5"
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
          onChange={HandleInputChange}
          value={name}
        />
        <input
          className="auth__input"
          type="text"
          placeholder="E-mail"
          name="email"
          autoComplete="off"
          onChange={HandleInputChange}
          value={email}
        />
        <input
          className="auth__input"
          type="password"
          name="password"
          placeholder="Password"
          onChange={HandleInputChange}
          value={password}
        />
        <input
          className="auth__input"
          type="password"
          name="password2"
          placeholder="Confirm password"
          onChange={HandleInputChange}
          value={password2}
        />
        <button className=" auth__btn btn btn-primary btn-block" type="submit">
          Register
        </button>

        <Link to="/auth/login" className="auth__link-register link">
          Already Registered?
        </Link>
      </form>
    </div>
  );
};
