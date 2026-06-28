import React from "react";
import { Link } from "react-router-dom";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-left">

        <h1>Your Health <br/> Our Priority</h1>

        <p>
          We provide trusted healthcare with experienced doctors and modern
          medical facilities. Book appointments easily and receive the best
          treatment for you and your family.
        </p>

        <Link to="/doctors">
          <button className="hero-btn">
            Book Appointment
          </button>
        </Link>

      </div>

      <div className="hero-right">
        <img
          src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg"
          alt="doctor"
        />
      </div>

    </section>
  );
};

export default Hero;