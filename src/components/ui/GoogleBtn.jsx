import React from "react";

export const GoogleBtn = ({ handleGoogleLogin }) => {
  return (
    <div className="google-btn" onClick={handleGoogleLogin}>
      <div className="google-icon-wrapper">
        <img
          className="google-icon"
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          alt="google button"
        />
      </div>
      <p className="btn-text">
        <b>Sign in with google</b>
      </p>
    </div>
  );
};
