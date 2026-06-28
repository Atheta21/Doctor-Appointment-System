import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import "../styles/doctors.css";
import { useNavigate } from "react-router-dom";
const Doctors = () => {
const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);

  const getDoctors = async () => {
    try {

      const res = await axios.get("/api/v1/doctor/getDoctors");

      if(res.data.success){
        setDoctors(res.data.data);
      }

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    getDoctors();
  },[]);

  return (
    <>
      <Navbar/>

      <div className="doctors-page">

        <h2 className="section-title">Our Doctors</h2>

        <div className="doctors-grid">

          {doctors.map((doctor) => (

            <div className="doctor-card" key={doctor._id}>

<img
  src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
  alt="doctor"
/>

              <h3>{doctor.name}</h3>

              <p>{doctor.specialization}</p>

              <p>{doctor.experience} Years Experience</p>

                <p className="doctor-fees">
    Consultation Fee: ₹{doctor.fees}
  </p>

<button
  className="doctor-btn"
  onClick={() => navigate(`/book-appointment/${doctor._id}`)}
>
  Book Appointment
</button>

            </div>

          ))}

        </div>

      </div>
    </>
  );
};

export default Doctors;