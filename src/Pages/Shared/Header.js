import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/surgery-logo.png";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <header>
      <Navbar collapseOnSelect bg="light" expand="xl" fixed="top">
        <Container fluid className="bg-light">
          <Link to='/home'>
            <img className="logo" src={logo} alt="" />
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-4 my-xl-0 main-links" navbarScroll>
              <Nav.Link as={Link} eventKey='1' to="/home">Home</Nav.Link>
              <Nav.Link as={Link} eventKey='2' to="/about">About</Nav.Link>
              <Nav.Link as={Link} eventKey='3' to="/services">Services</Nav.Link>
              <Nav.Link as={Link} eventKey='4' to="/doctors">Doctors</Nav.Link>
              <Nav.Link as={Link} eventKey='5' to="/faq">Faq</Nav.Link>
              <Nav.Link as={Link} eventKey='6' to="/contact">Contact</Nav.Link>
            </Nav>
            <div className="login-section">
              {(user.displayName || user.email) && (
                <div className="user-content">
                  {user.photoURL ? <img src={user.photoURL} alt="" /> : null}
                  <span>{user.displayName}</span>
                </div>
              )}
              <span>
                {user.displayName || user.email ? (
                  <button className="logout-btn" onClick={logOut}>
                    Logout
                  </button>
                ) : (
                  <Link to="/login">Login</Link>
                )}
              </span>
              {!(user.displayName || user.email) && (
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
