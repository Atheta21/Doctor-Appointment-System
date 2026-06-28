import React from "react";
import "../styles/facilities.css";
import {
  FaAmbulance,
  FaUserMd,
  FaHeartbeat,
  FaStethoscope,
  FaCapsules,
  FaHospital
} from "react-icons/fa";

const Facilities = () => {
  return (
    <section className="facilities">

      <h2 className="section-title">Our Services</h2>

      <div className="facilities-container">

        <div className="facility-box">
          <FaAmbulance />
          <h3>Emergency</h3>
          <p>24/7 emergency care</p>
        </div>

        <div className="facility-box">
          <FaUserMd />
          <h3>Doctors</h3>
          <p>Qualified specialists</p>
        </div>

        <div className="facility-box">
          <FaHeartbeat />
          <h3>Cardiology</h3>
          <p>Heart care experts</p>
        </div>

        <div className="facility-box">
          <FaStethoscope />
          <h3>Consultation</h3>
          <p>Online consultation</p>
        </div>

        <div className="facility-box">
          <FaCapsules />
          <h3>Pharmacy</h3>
          <p>Medicines available</p>
        </div>

        <div className="facility-box">
          <FaHospital />
          <h3>Hospital Care</h3>
          <p>Modern facilities</p>
        </div>

      </div>

    </section>
  );
};

export default Facilities;