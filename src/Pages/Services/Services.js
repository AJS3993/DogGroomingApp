import React from "react";
import "./Services.css";
import { MDBContainer, MDBRow, MDBCol, Card } from "mdbreact";
// import { Link } from 'react-router-dom';
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'

const Services = props => {
  return (
    <div>
      <NavBar/>

<h1>Services</h1>

<div className="Services">

<MDBContainer>
          
          <MDBRow>

            <MDBCol sm="6">

              <Card>

                  <p>hello</p>

              </Card>

              <Card>

<p>hello</p>

</Card>


              </MDBCol>

              

              <MDBCol sm="6">

<Card>

    <p>hello</p>

</Card>

<Card>

<p>hello</p>

</Card>


</MDBCol>
              
              
              
              </MDBRow>
              

              </MDBContainer>
              </div>

             <Footer/>       
     
      </div>

  );
};

export default Services;