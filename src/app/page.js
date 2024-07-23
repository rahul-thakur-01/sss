"use client"
import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import About from "../components/Detail";
import Services from "../components/Services";
import Solution from "../components/Solutions";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import LoadingScreen from "../components/LoadingScreen";
import Testimonial from "../components/Testimonial";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar />
          <div id="hero-section">
            <HeroSection />
          </div>
          <div id="product-section">
            <About />
          </div>
          <div id="services-section">
            <Services />
          </div>
          <div id="solutions-section">
            <Solution />
          </div>
          <div id="testimonial-section">
            <Testimonial />
          </div>
          <div id="contact-section">
            <Contact />
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;


// "use client"
// import React from 'react';
// import LoadingScreen from '../components/LoadingScreen';
// import {useState , useEffect} from 'react';


// function App() {
//     const [isLoading, setIsLoading] = useState(true);

//     const handleLoadingComplete = () => {
//         setIsLoading(false);
//     };

//     return (
//         <div className="App">
//             {isLoading ? (
//                 <LoadingScreen onLoadingComplete={handleLoadingComplete} />
//             ) : (
//                 <h1> hLe </h1>
//             )}
//         </div>
//     );
// }

// export default App;
