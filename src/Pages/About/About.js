import React from "react";
import "./About.css";
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'
import {
  MDBContainer,
  MDBRow,
  MDBCol
} from 'mdbreact';

const About = props => {
  return (
    <div className="About">
      <NavBar/>



      <MDBContainer>


<MDBRow>

      <MDBCol md='12' className= "text-white text-center"><h1>About</h1></MDBCol>
  </MDBRow>

<MDBRow>


 



  <MDBCol md='12'>
      <h5 className='text-white'>It was developed with Mongoose, Express, React, and Node. It is currently still a work in progress.</h5>
      <center>
<h3 className='text-white'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u>Made with:</u></h3>
<ul className='text-white'>
  <li>React</li>
  <li>HTML/CSS/JS</li>
  <li>Node/Express</li>
  <li>MongoDB</li>
  <li>JSON Web Tokens</li>
</ul>
</center>
  </MDBCol>
  </MDBRow>
</MDBContainer> 
<br/>
                   


  <Footer/>

    </div>
  );
};

export default About;