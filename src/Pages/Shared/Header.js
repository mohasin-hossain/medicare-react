import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/surgery-logo.png";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  console.log(user);
  return (
    <header>
      <Navbar bg="light" expand="xl" fixed="top">
        <Container fluid className="bg-light">
          <img className="logo" src={logo} alt="" />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-4 my-xl-0 main-links" navbarScroll>
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/faq">Faq</Link>
              <Link to="/contact">Contact</Link>
            </Nav>
            <div className="login-section">
              {user.email && (
                <div className="user-content">
                  <img src={user.photoURL} alt="" />
                  <span>{user.displayName}</span>
                </div>
              )}
              <span>
                {user.email ? (
                  <button className="logout-btn" onClick={logOut}>
                    Logout
                  </button>
                ) : (
                  <Link to="/login">Login</Link>
                )}
              </span>
              {!user.email && (
                <span>
                  <small style={{ marginRight: ".5rem" }}>/</small>
                  <Link to="/register">Register</Link>
                </span>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
