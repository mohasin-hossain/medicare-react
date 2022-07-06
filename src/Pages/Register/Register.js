import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const {
    signInWithGoogle,
    setName,
    setEmail,
    setPassword,
    registerNewUser,
    error,
  } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirect_url = location.state?.from || "/home";

  const googleSignIn = (e) => {
    e.preventDefault();
    signInWithGoogle()
    .then(() => {
      navigate(redirect_url, { replace: true });
    });
  };

  const registerUser = (e) => {
    e.preventDefault();
    registerNewUser()
    .then(() => {
        navigate('/login', { replace: true }) ;
    });
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form onSubmit={registerUser} action="" className="form" autoComplete="off">
      <div className="img-overlay"></div>
      <div className="icon">
        <i className="fas fa-times"></i>
      </div>
      <h1>Join Medicare community!</h1>
      <div className="inputs">
        <label htmlFor="name">Name</label>
        <input
          onBlur={handleName}
          id="name"
          type="text"
          placeholder="Enter your name"
        />
      </div>
      <div className="inputs">
        <label htmlFor="email">Email</label>
        <input
          onBlur={handleEmail}
          id="email"
          type="email"
          placeholder="Enter your email"
        />
      </div>
      <div className="inputs">
        <label htmlFor="password">Password</label>
        <input
          onBlur={handlePassword}
          id="password"
          type="password"
          placeholder="Enter your password"
        />
      </div>
      <input type="submit" className="button" value="Register" />
      <p className="text-danger fw-bold">{error}</p>
      <h3>----- or sign up with -----</h3>
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
      <p>Already have an account?</p>
      <Link className="btn-primary btn me-3" to="/login">
        Login
      </Link>
    </form>
  );
};

export default Register;
