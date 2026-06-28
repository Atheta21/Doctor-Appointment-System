import React from "react";
import "../styles/reviews.css";
import { FaStar } from "react-icons/fa";

const Reviews = () => {
  return (
    <section className="reviews">

      <h2 className="section-title">Patient Reviews</h2>

      <div className="reviews-container">

        <div className="review-card">

          <div className="stars">
            <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
          </div>

          <p>
            Excellent doctors and very friendly staff. My treatment was smooth
            and professional.
          </p>

          <h4>- Riya Sharma</h4>

        </div>

        <div className="review-card">

          <div className="stars">
            <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
          </div>

          <p>
            The facilities are modern and the consultation process is
            very easy.
          </p>

          <h4>- Amit Verma</h4>

        </div>

        <div className="review-card">

          <div className="stars">
            <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
          </div>

          <p>
            Highly recommend this. Doctors are very experienced and
            supportive.
          </p>

          <h4>- Neha Kapoor</h4>

        </div>

      </div>

    </section>
  );
};

export default Reviews;