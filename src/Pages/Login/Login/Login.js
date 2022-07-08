import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { signInWithGoogle, processLogin, error } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirect_url = location.state?.from || "/home";

  const googleSignIn = (e) => {
    e.preventDefault();
    signInWithGoogle().then(() => {
      navigate(redirect_url, { replace: true });
    });
  };

  const loginUser = (e) => {
    e.preventDefault();
    processLogin().then(() => {
      navigate(redirect_url, { replace: true });
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={loginUser} action="" className="form" autoComplete="off">
        <div className="img-overlay"></div>
        <div className="icon">
          <i className="fas fa-times"></i>
        </div>
        <h1>Join Medicare community!</h1>
        <div className="inputs">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Enter your email" />
        </div>
        <div className="inputs">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <input type="submit" className="button" value="Login" />
        <p className="text-danger fw-bold">{error}</p>
        <h3>----- or sign in with -----</h3>
        <div className="social-signup">
          <div className="google">
            <button className="button" onClick={googleSignIn}>
              <ion-icon name="logo-google"></ion-icon>
            </button>
          </div>
          <div className="facebook">
            <button className="button">
              <ion-icon name="logo-facebook"></ion-icon>
            </button>
          </div>
        </div>
        <p>Don't have an account?</p>
        <Link className="btn-primary btn me-3" to="/register">
          Register
        </Link>
      </form>
    </div>
  );
};

export default Login;
