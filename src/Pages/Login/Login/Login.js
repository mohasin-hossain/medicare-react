import React from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirect_url = location.state?.from || "/home";

  const googleSignIn = () => {
    signInWithGoogle().then(() => {
      navigate(redirect_url, { replace: true });
    });
  };

  return (
    <form action="" class="form" autoComplete="off">
      <div class="img-overlay"></div>
      <div class="icon">
        <i class="fas fa-times"></i>
      </div>
      <h1>Join Medicare community!</h1>
      <div class="inputs">
        <label for="email">Email</label>
        <input id="email" type="email" placeholder="Enter your email" />
      </div>
      <div class="inputs">
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
        />
      </div>
      <input type="submit" class="button" value="Login" />
      <p>Don't have an account?</p>
      <Link className="btn-primary btn me-3" to="/register">
        Register
      </Link>
      <Button onClick={googleSignIn} variant="warning">
        Google Sign In
      </Button>
    </form>
  );
};

export default Login;
