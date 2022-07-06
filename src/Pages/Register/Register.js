import React from 'react';
import { Link } from 'react-router-dom';
// import './Register.css';

const Register = () => {
    return (
        <form action="" class="form" autoComplete='off'>
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
      <input type="submit" class="button" value="Register" />
      <p>Already have an account?</p>
      <Link className="btn-primary btn me-3" to="/login">
        Login
      </Link>
    </form>
    );
};

export default Register;