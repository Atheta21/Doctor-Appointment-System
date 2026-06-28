import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../styles/bookAppointment.css";

function BookAppointment() {

  const params = useParams();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleBooking = async () => {

    if(!date || !time){
      alert("Please select date and time");
      return;
    }

    try {

      const res = await axios.post(
        "http://localhost:8080/api/v1/appointment/book-appointment",
        {
          doctorId: params.doctorId,
          userId: localStorage.getItem("userId") || "123456",
          date,
          time
        }
      );

      if(res.data.success){
        alert("Appointment booked successfully");
        setDate("");
        setTime("");
      }

    } catch (error) {
  console.log(error.response?.data || error.message);
  alert("Error booking appointment");
}

  };

  return (

    <div className="book-page">

      <div className="book-card">

        <h2>Book Appointment</h2>

        <input
          type="date"
          value={date}
          onChange={(e)=>setDate(e.target.value)}
        />

        <input
          type="time"
          value={time}
          onChange={(e)=>setTime(e.target.value)}
        />

        <button className="book-btn" onClick={handleBooking}>
          Confirm Appointment
        </button>

      </div>

    </div>

  );

}

export default BookAppointment;