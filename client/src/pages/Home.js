import React, { useEffect } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Facilities from "../components/Facilities";
import About from "../components/About";
import Reviews from "../components/Reviews"
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {

  const getUserData = async () => {
    try {

      const res = await axios.post(
        "/api/v1/user/getUserData",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      console.log(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if(localStorage.getItem("token")){
      getUserData();
    }
  }, []);

  return (
    <>
  <Navbar />
  <Hero />
  <Facilities />
  <About />
  <Reviews />
  <Contact />
  <Footer />
</>
  );
};

export default Home;