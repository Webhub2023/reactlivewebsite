import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
// import "../node_modules/bootstrap/dist/bootstrap.min.css";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () => {
  return (
  <>
  <Navbar />
  <Routes>
  
   <Route path="/" element={ <Home /> } />
   <Route path="/about" element={ <About /> } />
   <Route path="/services" element={ <Service /> } />
   <Route path="/contact" element={ <Contact /> } />
   <Route path="/:home" element={<Navigate to="/" />} />
   </Routes>
   <Footer />
  </>
  );
}

export default App;
