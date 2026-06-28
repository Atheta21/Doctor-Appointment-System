import React from "react";
import "../styles/about.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about" id="about">

      <div className="about-container">

        <div className="about-image">
          <img
            src="https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-goggles_23-2149611193.jpg"
            alt="hospital"
          />
        </div>

        <div className="about-text">

          <h2>About MediConnect</h2>

          <p>
            We provide the best healthcare services with experienced doctors
            and modern medical facilities. Our mission is to deliver
            high-quality treatment and ensure every patient receives the
            care they deserve.
          </p>

          <p>
            With advanced medical technology and a dedicated healthcare team,
            we aim to make healthcare accessible and convenient for everyone.
          </p>

          <Link to="/doctors">
            <button className="about-btn">
              Book Appointment
            </button>
          </Link>

        </div>

      </div>

    </section>
  );
};

export default About;