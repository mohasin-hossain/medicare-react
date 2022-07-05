import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

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
    <div>
      <button onClick={googleSignIn} className="btn-warning">
        Google Login
      </button>
    </div>
  );
};

export default Login;
