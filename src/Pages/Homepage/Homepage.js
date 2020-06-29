import React from "react";
import "./Homepage.css";
import Signup from '../../Components/Signup/Signup'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'

const Homepage = props => {
  return (
    <div className="Homepage">
      <NavBar/>

    <Signup/>

  <Footer/>

    </div>
  );
};

export default Homepage;