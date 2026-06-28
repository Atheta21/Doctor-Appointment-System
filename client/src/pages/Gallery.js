import React from "react";
import Navbar from "../components/Navbar";
import "../styles/gallery.css";

const Gallery = () => {
  return (
    <>
      <Navbar/>

      <div className="gallery-page">

        <h2 className="section-title">Hospital Gallery</h2>

   <div className="gallery-grid">

  <img src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc" alt="hospital building"/>

  <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118" alt="doctor consultation"/>

  <img src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3" alt="hospital corridor"/>

  <img src="https://images.unsplash.com/photo-1538108149393-fbbd81895907" alt="medical equipment"/>

  <img src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b" alt="surgery room"/>
<img src="https://images.unsplash.com/photo-1584438784894-089d6a62b8fa" alt="modern hospital room"/>

  <img src="https://images.unsplash.com/photo-1550831107-1553da8c8464" alt="doctor team"/>

  <img src="https://images.unsplash.com/photo-1584515933487-779824d29309" alt="hospital bed"/>

  <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef" alt="doctor working"/>

  <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d" alt="hospital exterior"/>

  <img src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8" alt="nurse patient care"/>

  <img src="https://images.unsplash.com/photo-1584982751601-97dcc096659c" alt="medical checkup"/>

</div>
      </div>
    </>
  );
};

export default Gallery;