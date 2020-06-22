import React from "react";
import "./Homepage.css";
import Signup from '../../Components/Signup/Signup'

const Homepage = props => {
  return (
    <div className="Homepage">

  <img alt='dog' src='https://animalcampus.com/wp-content/uploads/2017/10/dog-groomed.jpg'/>

    <Signup/>

    </div>
  );
};

export default Homepage;