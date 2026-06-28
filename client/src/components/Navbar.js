import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {

  const user = localStorage.getItem("token"); // ADD THIS

  return (
    <nav className="navbar">

      <div className="nav-left">

        <div className="logo">
          <Link to="/">
  <img src="/logo.png" alt="logo" />
</Link>
          <h2>MediConnect</h2>
        </div>

        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><a href="#about">About</a></li>
          <li><Link to="/doctors">Doctors</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

      </div>

      <div className="nav-right">

        <Link to="/doctors">
          <button className="book-btn-nav">
            Book Appointment
          </button>
        </Link>

        {user ? (

          <Link to="/profile">
            <button className="login-btn">
              My Account
            </button>
          </Link>

        ) : (

          <Link to="/login">
            <button className="login-btn">
              Login
            </button>
          </Link>

        )}

      </div>

    </nav>
  );
};

export default Navbar;